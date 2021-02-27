import BigNumber from 'bignumber.js'
import styled from 'styled-components'
import React, { useMemo, useState } from 'react'
import { Button, Modal } from '@blackswap/uikit'
import ModalActions from 'components/ModalActions'
import Balance from 'components/Balance'
import { getFullDisplayBalance } from 'utils/formatBalance'
import {useTranslation} from "react-i18next";

interface DepositModalProps {
  earnings: BigNumber
  onConfirm: (amount: string) => void
  onDismiss?: () => void
  tokenName?: string
}

const CompoundModal: React.FC<DepositModalProps> = ({ earnings, onConfirm, onDismiss, tokenName = '' }) => {
  const [pendingTx, setPendingTx] = useState(false)
  const { t } = useTranslation();

  const fullBalance = useMemo(() => {
    return getFullDisplayBalance(earnings)
  }, [earnings])

  return (
    <Modal
      title={`${t('pool.modal.compound.compound', 'Compound')} ${t('pool.modal.compound.earned', `${tokenName} Earned`)}`}
      onDismiss={onDismiss}
    >
      <BalanceRow>
        <Balance value={Number(fullBalance)} />
      </BalanceRow>
      <ModalActions>
        <Button fullWidth variant="secondary" onClick={onDismiss}>
          {t('pool.modal.compound.cancel', 'Cancel')}
        </Button>
        <Button
          id="compound-cake"
          fullWidth
          disabled={pendingTx}
          onClick={async () => {
            setPendingTx(true)
            await onConfirm(fullBalance)
            setPendingTx(false)
            onDismiss()
          }}
        >
          {pendingTx ? t('pool.modal.compound.pending', 'Pending Confirmation') : t('pool.modal.compound.confirm', 'Confirm')}
        </Button>
      </ModalActions>
    </Modal>
  )
}

export default CompoundModal

const BalanceRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`
