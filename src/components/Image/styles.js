import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 50%;
  height: 100%;
`
export const Hero = styled.img`
  height: 90vh;

  z-index: 100;
  margin: 0px 8vh;
  margin-top: -4.7vh;

  @media screen and (max-width: 640px) {
    /* position: initial; */
    margin: 0px -7vh -58vh;
    margin-top: -20vh;
    height: 73vh;
  }
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
  src: 'https://i.ibb.co/thpSp4X/Hero-Image-4.png',
}

BackDown.defaultProps = {
  src: 'https://i.ibb.co/8jRRRGb/Vector-7.png',
}

BackUp.defaultProps = {
  src: 'https://i.ibb.co/2tnmtnk/Vector-6.png',
}
