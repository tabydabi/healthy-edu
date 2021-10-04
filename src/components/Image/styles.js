import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 50%;
  height: 100%;
`
export const Hero = styled.img`
  @media screen and (min-width: 1200px) and (max-width: 1599px) {
    margin: 0px 15vh;
    margin-top: -4.7vh;
    height: 100vh;
  }

  @media screen and (width: 1600px) {
    margin: 0px 8vh;
    margin-top: -4.7vh;
    height: 90vh;
  }

  @media screen and (max-width: 640px) {
    margin: 0px -7vh -57.5vh;
    margin-top: -11vh;
    height: 69vh;
  }
  @media screen and (width: 768px) {
    margin: 0px 13vh 5vh;
    margin-top: -10vh;
    height: 60vh;
  }

  @media screen and (width: 1920px) {
    margin: 0px 30vh -57.5vh;
    margin-top: -6vh;
    height: 90vh;
  }
`

Hero.defaultProps = {
  src: 'https://i.ibb.co/thpSp4X/Hero-Image-4.png',
}
