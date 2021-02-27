import React from 'react'
import { Button, useWalletModal } from '@blackswap/uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import {useTranslation} from "react-i18next";

const UnlockButton = (props) => {
  const { t } = useTranslation();

  const { connect, reset } = useWallet()
  const { onPresentConnectModal } = useWalletModal(connect, reset)

  return (
    <Button onClick={onPresentConnectModal} {...props}>
      {t( 'btn.unlock_wallet', 'Unlock Wallet')}
    </Button>
  )
}

export default UnlockButton
