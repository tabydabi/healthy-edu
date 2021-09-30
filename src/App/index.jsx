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
          height: '100%',
          width: '40%',
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
        }}>
        <div
          style={{
            position: 'absolute',
            left: '22%',
            top: '15%',
          }}>
          <Content />
        </div>
      </div>

      <div
        style={{
          height: '100%',
          width: '60%',
          position: 'fixed',
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
            left: '20%',
            top: '-5%',
            transform: 'translate(-50%, -50$)',
          }}>
          <img
            src="https://i.ibb.co/5jfRX6F/Hero-Image.png"
            style={{
              position: 'absolute',
              height: '105vh',
              width: '100wh',
              zIndex: '100',
            }}
          />
          {/* <img
            src="https://i.ibb.co/8jRRRGb/Vector-7.png"
            style={{
              position: 'absolute',
              zIndex: '98',
            }}
          /> */}

          {/* <img
            src="https://i.ibb.co/hRNB0JR/Hero-Image-3.png"
            style={{
              position: 'absolute',
              height: '30vh',

              zIndex: '99',
            }}
          /> */}
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
