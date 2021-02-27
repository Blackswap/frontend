import BigNumber from 'bignumber.js'
import React, { useCallback, useMemo, useState } from 'react'
import { Button, Modal, LinkExternal } from '@blackswap/uikit'
import ModalActions from 'components/ModalActions'
import ModalInput from 'components/ModalInput'
import { getFullDisplayBalance } from 'utils/formatBalance'
import {useTranslation} from "react-i18next";

interface DepositModalProps {
  max: BigNumber
  onConfirm: (amount: string) => void
  onDismiss?: () => void
  tokenName?: string
  addLiquidityUrl?: string
}

const DepositModal: React.FC<DepositModalProps> = ({ max, onConfirm, onDismiss, tokenName = '', addLiquidityUrl }) => {

    const { t } = useTranslation();
  const [val, setVal] = useState('')
  const [pendingTx, setPendingTx] = useState(false)
  const fullBalance = useMemo(() => {
    return getFullDisplayBalance(max)
  }, [max])

  const handleChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setVal(e.currentTarget.value)
    },
    [setVal],
  )

  const handleSelectMax = useCallback(() => {
    setVal(fullBalance)
  }, [fullBalance, setVal])

  return (
    <Modal title={t('farm.modal.deposit.stake_lp', 'Stake LP tokens')} onDismiss={onDismiss}>
      <ModalInput
        value={val}
        onSelectMax={handleSelectMax}
        onChange={handleChange}
        max={fullBalance}
        symbol={tokenName}
        addLiquidityUrl={addLiquidityUrl}
        inputTitle={t('farm.modal.deposit.stake', 'Stake')}
      />
      <ModalActions>
        <Button variant="secondary" onClick={onDismiss} fullWidth>
          {t('farm.modal.deposit.cancel', 'Cancel')}
        </Button>
        <Button
          fullWidth
          disabled={pendingTx || fullBalance === '0' || val === '0'}
          onClick={async () => {
            setPendingTx(true)
            await onConfirm(val)
            setPendingTx(false)
            onDismiss()
          }}
        >
          {pendingTx ? t('farm.modal.deposit.pending', 'Pending Confirmation') : t('farm.modal.deposit.confirm', 'Confirm')}
        </Button>
      </ModalActions>
      <LinkExternal href={addLiquidityUrl} style={{ alignSelf: 'center' }}>
        {t('farm.modal.deposit.get', 'Get')} {tokenName}
      </LinkExternal>
    </Modal>
  )
}

export default DepositModal
