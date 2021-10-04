import React from 'react'

import Navbar from '@/components/NavBar'
import {
  GlobalWrapper,
  DivWrapper,
  DivLeft,
  SecondDivWrapper,
  DivRight,
} from './style'
import Content from '@/components/Content'
import Images from '@/components/Image'

export default () => (
  <React.Fragment>
    <GlobalWrapper>
      <Navbar />

      <DivWrapper>
        <DivLeft>
          <Images />
        </DivLeft>
      </DivWrapper>

      <SecondDivWrapper>
        <DivRight>
          <Content />
        </DivRight>
      </SecondDivWrapper>
    </GlobalWrapper>
  </React.Fragment>
)
