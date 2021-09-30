import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 50%;
  height: 100%;
`
export const Hero = styled.img`
  position: absolute;
  z-index: 100;
  height: 85vh;
  bottom: -4rem;
`
export const BackDown = styled.img`
  position: absolute;
  z-index: 99;
  height: 100%;
  margin-top: 5.5em;
`
export const BackUp = styled.img`
  position: absolute;
  z-index: 99;
  height: 30%;
  left: 7em;
  margin-bottom: 3em;
`
Hero.defaultProps = {
  src: 'https://i.ibb.co/5jfRX6F/Hero-Image.png',
}

BackDown.defaultProps = {
  src: 'https://i.ibb.co/8jRRRGb/Vector-7.png',
}

BackUp.defaultProps = {
  src: 'https://i.ibb.co/2tnmtnk/Vector-6.png',
}
