import React from 'react'
import styled from 'styled-components'
import { useRouteMatch, Link } from 'react-router-dom'
import { ButtonMenu, ButtonMenuItem, Toggle, Text } from '@blackswap/uikit'
import {useTranslation} from "react-i18next";

const PoolTabButtons = ({ stackedOnly, setStackedOnly }) => {
  const { url, isExact } = useRouteMatch()
    const { t } = useTranslation();

  return (
    <Wrapper>
      <ToggleWrapper>
        <Toggle checked={stackedOnly} onChange={() => setStackedOnly(!stackedOnly)} />
          <Text> {t('btn.pool.staked_only', 'Staked only')}</Text>
      </ToggleWrapper>
      <ButtonMenu activeIndex={isExact ? 0 : 1} size="sm" variant="subtle">
        <ButtonMenuItem as={Link} to={`${url}`}>
            {t('btn.pool.active', 'Active')}
        </ButtonMenuItem>
        <ButtonMenuItem as={Link} to={`${url}/history`}>
            {t('btn.pool.inactive', 'Inactive')}
        </ButtonMenuItem>
      </ButtonMenu>
    </Wrapper>
  )
}

export default PoolTabButtons

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
`

const ToggleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 32px;

  ${Text} {
    margin-left: 8px;
  }
`
