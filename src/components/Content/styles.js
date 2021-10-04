import styled from 'styled-components'
import 'typeface-roboto'

export const LittleText = styled.p`
  font-size: 0.87vw;
  font-family: roboto;
  font-weight: bold;
  padding: 13px 7px;
  color: #215ee9;
  @media screen and (max-width: 640px) {
    font-size: 2.4vw;
  }
`

export const BigText = styled.h1`
  font-family: roboto;
  font-weight: bold;
  font-size: 5.3vh;
  line-height: 108%;
  margin-block-start: -0.1em;
  padding: 0px 0.5vw;
  color: #215ee9;
  text-align: justify;
  @media screen and (max-width: 640px) {
    font-size: 10.2vw;
    line-height: 95%;
    margin-block-start: 0em;
    padding: 0px 1vw;
  }
`
export const DescriptionText = styled.p`
  font-family: roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 1.7vh;
  line-height: 30px;
  color: #215ee9;
  margin-block-start: -0.9em;
  margin-left: 0.7vh;
  @media screen and (max-width: 640px) {
    font-size: 3.2vw;
    line-height: 130%;
    margin-block-start: -0.1em;
    padding: 0px 1vw;
  }
`
