import React from 'react'
import { ImagesHero } from './styles'

const Images = () => {
  return (
    <div style={{ position: 'relative' }}>
      <img
        src="https://i.ibb.co/5jfRX6F/Hero-Image.png"
        style={{
          position: 'absolute',
          zIndex: '100',
          height: '100%',
        }}
      />
      <img
        src="https://i.ibb.co/8jRRRGb/Vector-7.png"
        style={{
          position: 'absolute',
          zIndex: '99',
          height: '80%',
          marginTop: '9em',
        }}
      />
      <img
        src="https://i.ibb.co/2tnmtnk/Vector-6.png"
        style={{
          position: 'absolute',
          zIndex: '99',
          height: '30%',
        }}
      />
    </div>
  )
}
//https://i.ibb.co/2tnmtnk/Vector-6.png" alt="Vector-6
export default Images
