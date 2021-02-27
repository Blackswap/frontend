import React from 'react'
import styled from 'styled-components'
import {Spinner, SpinnerProps} from '@blackswap/uikit'
import Page from './layout/Page'

const Wrapper = styled(Page)`
  display: flex;
  justify-content: center;
  align-items: center;
`

const PageLoader: React.FC<SpinnerProps> = ({size= 6}) => {
  return (
    <Wrapper>
      <Spinner size={size} />
    </Wrapper>
  )
}

export default PageLoader
