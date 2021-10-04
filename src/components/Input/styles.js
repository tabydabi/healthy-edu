import styled from 'styled-components'

export const Input = styled.div`
  position: relative;
  font-size: 80%;
  width: 80%;
  border-radius: 10px;
  left: -4vh;
  margin: 4.7vh;
  font-family: roboto;
  @media screen and (max-width: 640px) {
    /* position: initial; */
    width: 80%;
    margin: 3.5vh;
    left: -3vh;
  }
`

export const InputButtom = styled.button`
  position: absolute;
  right: 1.5vh;
  top: 0.8vh;
  border-radius: 30px;
  width: 15vh;
  height: 3.8vh;
  border: 0;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.06);
  background: #215ee9;
  color: white;
  font-family: roboto;
  @media screen and (min-width: 640px) and (max-width: 767px) {
    width: 11vh;
    border-radius: 2vh;
    right: 0vh;
    height: 3vh;
  }

  @media screen and (min-width: 1200px) and (max-width: 1439px) {
    right: 6.5vh;
  }
  @media screen and (min-width: 1440px) and (max-width: 1599px) {
    right: 9.5vh;
  }
  @media screen and (min-width: 1600px) and (max-width: 1920px) {
    right: 1.3vh;
  }
  @media screen and (min-width: 768px) and (max-width: 991px) {
    right: 11.5vh;
    width: 10vh;
    height: 3.7vh;
  }
  @media screen and (min-width: 992px) and (max-width: 1199px) {
    right: 3vh;
    width: 13vh;
    height: 3.7vh;
  }
  @media screen and (min-width: 568px) and (max-width: 639px) {
    right: 0vh;
    width: 10vh;
    height: 3vh;
  }
  @media screen and (min-width: 414px) and (max-width: 567px) {
    right: 2vh;
    width: 6vh;
    height: 3vh;
  }
  @media screen and (min-width: 1920px) {
    right: 5vh;
  }
`
export const InputText = styled.input`
  width: 37vh;
  height: 5.2vh;
  padding-right: 60px;
  border-radius: 60px;
  border: 0;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.06);
  background-image: url('https://i.ibb.co/txh9pYP/Union-1.png');
  background-repeat: no-repeat;
  background-position: 5% 50%;
  opacity: 0.7;
  text-indent: 5vh;
  box-shadow: 0px 10vh 10vh -2.3vh #000000;
  font-size: 1.2em;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #d3d3d3;
  }
  :-ms-input-placeholder {
    color: #d3d3d3;
  }
  @media screen and (max-width: 640px) {
    width: 28vh;
    height: 4.2vh;
    border-radius: 2vh;
  }
  @media screen and (max-width: 414px) {
    width: 18vh;
    height: 4.2vh;
    border-radius: 2vh;
  }
  @media screen and (width: 768px) {
    padding-right: 0px;
  }
`
