import React from 'react'
import { Card, CardBody, Heading, Text } from '@blackswap/uikit'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import { getTokenAddress } from 'utils/addressHelpers'
import {useTranslation} from "react-i18next";
import CardValue from './CardValue'
import { tokenName } from '../../../config/app'

const StyledCakeStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const CakeStats = () => {
  const { t } = useTranslation();
  const totalSupply = useTotalSupply()
  const burnedBalance = getBalanceNumber(useBurnedBalance(getTokenAddress()))
  const suuply = totalSupply ? getBalanceNumber(totalSupply) - burnedBalance : 0

  return (
    <StyledCakeStats>
      <CardBody>
        <Heading size="xl" mb="24px">
          {t( 'tokenStats.heading', `${tokenName} Stats`)}
        </Heading>
        <Row>
          <Text fontSize="14px">{t( 'tokenStats.supply', `Total ${tokenName} Supply`)}</Text>
          {suuply && <CardValue fontSize="14px" value={suuply} />}
        </Row>
        <Row>
          <Text fontSize="14px">{t( 'tokenStats.burned', `Total ${tokenName} Burned`)}</Text>
          <CardValue fontSize="14px" decimals={0} value={burnedBalance} />
        </Row>
        <Row>
          <Text fontSize="14px">{t( 'tokenStats.block', `New ${tokenName}/block`)}</Text>
          <CardValue fontSize="14px" decimals={0} value={25} />
        </Row>
      </CardBody>
    </StyledCakeStats>
  )
}

export default CakeStats
