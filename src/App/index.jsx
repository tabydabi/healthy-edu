import React from 'react'

import Navbar from '@/components/NavBar'
import { GlobalWrapper, DivWrapper } from './style'
import Content from '@/components/Content'
import Images from '@/components/Image'

export default () => (
  <React.Fragment>
    <GlobalWrapper>
      <Navbar />
      <div
        style={{
          height: '100vh',
          maxHeight: '100vh',
          maxWidth: '90wh',
          width: '60%',
          position: 'fixed',
          zIndex: '1',
          top: '0',
          overflowX: 'hidden',
          paddingTop: '20px',
          left: '0',
          backgroundImage:
            'url(https://i.ibb.co/P6bJDzg/Group-607.png)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'left bottom',
          backgroundSize: '80%',
          overflowX: 'hidden',
          overflowY: 'hidden',
        }}>
        <div
          style={{
            position: 'absolute',
            padding: '0rem 9vw',
            top: '23vh',
            maxWidth: '1270px',
          }}>
          <Content />
        </div>
      </div>

      <div
        style={{
          position: 'fixed',
          height: '100%',
          width: '60%',
          zIndex: '1',
          top: '0',
          overflowX: 'hidden',
          overflowY: 'hidden',
          paddingTop: '20px',
          right: '0',
          backgroundImage:
            'url(https://i.ibb.co/LhZMnxj/Group-129-1.png)',
          backgroundRepeat: 'no-repeat',
        }}>
        <div
          style={{
            position: 'absolute',
            width: '100%',
            left: '0',
            height: '90%',
            top: '10vh',
            transform: 'translate(-50%, -50$)',
            backgroundImage:
              'url(https://i.ibb.co/8jRRRGb/Vector-7.png)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '70vh',
            backgroundPosition: 'right bottom ',
          }}>
          <img
            src="https://i.ibb.co/thpSp4X/Hero-Image-4.png"
            style={{
              height: '90vh',
              width: '100wh',
              zIndex: '100',
              margin: '0px 8vh',
              marginTop: '-4.7vh',
            }}
          />
        </div>
      </div>
    </GlobalWrapper>
  </React.Fragment>
)

{
  /* <DivWrapper>
<Content />
<Images />
</DivWrapper> */
}
