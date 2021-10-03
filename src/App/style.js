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
  @media screen and (max-width: 640px) {
    /* position: initial; */
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
  background-size: 60vh;
  background-position: right bottom;

  @media screen and (max-width: 768px) {
    background-position: center top;
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
  background-position: left bottom;
  background-size: 80%;
  overflow-x: hidden;
  overflow-y: hidden;
  @media screen and (max-width: 640px) {
    width: 100%;
    top: 42.3vh;
    left: -2.1vh;
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
