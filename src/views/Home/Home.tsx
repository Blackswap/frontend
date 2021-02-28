import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from '@blackswap/uikit'
import Page from 'components/layout/Page'
import FarmStakingCard from 'views/Home/components/FarmStakingCard'
import CakeStats from 'views/Home/components/CakeStats'
import TotalValueLockedCard from 'views/Home/components/TotalValueLockedCard'
import { useTranslation } from 'react-i18next'
import TwitterCard from './components/TwitterCard'
import { images, appName } from '../../config/app'

const Hero = styled.div`
  align-items: center;
  background-image: url('${images.hero.mobile}');
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 116px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-image: url('${images.hero.right}'), url('${images.hero.left}');
    background-position: left center,  right center;
    height: 165px;
    padding-top: 0;
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 32px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const Home: React.FC = () => {
  const { t } = useTranslation()
  return (
    <Page>
      <Hero>
        <Heading as="h1" size="xl" mb="24px" color="secondary">
          {t('app.name', appName)}
        </Heading>
        <Text>{t('app.heading', 'The #1 AMM and yield farm on Blablabla.')}</Text>
      </Hero>
      <div>
        <Cards>
          <FarmStakingCard />
          <TwitterCard />
        </Cards>
        <Cards>
          <CakeStats />
          <TotalValueLockedCard />
        </Cards>
      </div>
    </Page>
  )
}

export default Home
