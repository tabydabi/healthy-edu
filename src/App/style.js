import styled from 'styled-components'

export const GlobalWrapper = styled.div`
  background-color: #ebf1ff;
  height: 100vh;
  width: 100wh;
`

export const DivWrapper = styled.div`
  position: fixed;
  height: 100%;
  width: 60%;
  z-index: 1;
  top: 0;
  overflow-x: hidden;
  overflow-y: hidden;
  padding-top: 20px;
  right: 0;
  background-image: url('https://i.ibb.co/LhZMnxj/Group-129-1.png');
  background-repeat: no-repeat;
  background-size: 100%;
  @media screen and (max-width: 640px) {
    top: -3vh;
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    top: -3vh;
    width: 100%;
  }
`

export const DivLeft = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  height: 90%;
  top: 10vh;
  transform: translate(-50%, -50$);
  background-image: url('https://i.ibb.co/8jRRRGb/Vector-7.png');
  background-repeat: no-repeat;
  background-size: 68vh;
  background-position: right bottom;

  @media screen and (max-width: 640px) {
    background-image: url('https://i.ibb.co/WFgF70W/Vector-8.png');
    background-position: center top;
    background-size: 45vh;
  }
  @media screen and (width: 768px) {
    background-size: 0;
  }
`

export const SecondDivWrapper = styled.div`
  height: 100vh;
  width: 60%;
  position: fixed;
  z-index: 1;
  top: 0;
  padding-top: 20px;
  left: 0;
  background-image: url('https://i.ibb.co/P6bJDzg/Group-607.png');
  background-repeat: no-repeat;
  background-position: 0% 90%;
  background-size: 68%;
  overflow-x: hidden;
  overflow-y: hidden;
  @media screen and (max-width: 640px) {
    width: 100%;
    top: 39vh;
    left: -1.5vh;
  }
  @media screen and (width: 768px) {
    width: 100%;
    top: 30vh;
    left: 10.5vh;
    background-size: 0%;
  }
`
export const DivRight = styled.div`
  position: absolute;
  padding: 0rem 9vw;
  top: 23vh;
  @media screen and (max-width: 640px) {
    top: 21.8vh;
  }
`

export const DivBackgroundImg = styled.div`
  background-image: url('https://i.ibb.co/2tnmtnk/Vector-6.png');
  background-repeat: no-repeat;
  background-position: 80% 16%;

  @media screen and (max-width: 640px) {
    background-size: 0%;
  }
  @media screen and (width: 1200px) {
    background-size: 60%;
    background-position: 95% 16%;
  }
  @media screen and (width: 1920px) {
    background-size: 50%;
    background-position: 95% 100%;
  }
  @media screen and (width: 768px) {
    background-size: 100%;
  }
  @media screen and (width: 1440px) {
    background-position: 100% 16%;
  }
  @media screen and (width: 992px) {
    background-size: 0%;
  }
`
