import React from 'react'
import styled from 'styled-components'
import { Button, Heading, Text, LogoIcon } from '@blackswap/uikit'
import Page from 'components/layout/Page'
import {useTranslation} from "react-i18next";

const StyledNotFound = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 64px);
  justify-content: center;
`

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <Page>
      <StyledNotFound>
        <LogoIcon width="64px" mb="8px" />
        <Heading size="xxl">404</Heading>
        <Text mb="16px">{t('not_found.oops', 'Oops, page not found.')}</Text>
        <Button as="a" href="/" size="sm">
          {t('not_found.back', 'Back Home')}
        </Button>
      </StyledNotFound>
    </Page>
  )
}

export default NotFound
