import React from 'react'
import { Card, CardBody, Heading } from '@blackswap/uikit'
import styled from 'styled-components'
import { Timeline } from 'react-twitter-widgets'
import {useTranslation} from "react-i18next";
import { twitter } from '../../../config/app'

const StyledTwitterCard = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const TwitterCard = () => {
    const { t } = useTranslation();
        console.log(twitter, process.env)
  return (
    <StyledTwitterCard>
      <CardBody>
        <Heading size="xl" mb="24px">
            { t('app.announcements', 'Announcements') }
        </Heading>
        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: `${twitter}`,
          }}
          options={{
            height: '300',
            chrome: 'noheader, nofooter',
            width: '400',
          }}
        />
      </CardBody>
    </StyledTwitterCard>
  )
}

export default TwitterCard
