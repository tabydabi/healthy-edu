import styled from 'styled-components'

export const Input = styled.div`
  position: relative;
  font-size: 80%;
  width: 80%;
  border-radius: 10px;
  left: -4vh;
  margin: 4.7vh;
  @media screen and (max-width: 640px) {
    /* position: initial; */
    width: 80%;
    margin: 3.6vh;
    left: -2.3vh;
  }
`

export const InputButtom = styled.button`
  position: absolute;
  right: -0.5vh;
  top: 0.4vh;
  border-radius: 20px;
  width: 15.3vh;
  height: 3.8vh;
  border: 0;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.06);
  @media screen and (max-width: 640px) {
    /* position: initial; */
    width: 12.6vh;
    border-radius: 2vh;
  }
`
export const InputText = styled.input`
  width: 37vh;
  height: 4.9vh;
  padding-right: 60px;
  border-radius: 20px;
  border: 0;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.06);
  @media screen and (max-width: 640px) {
    /* position: initial; */
    width: 30vh;
    height: 4.2vh;
    border-radius: 2vh;
  }
`
