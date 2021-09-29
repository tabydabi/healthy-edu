import styled from 'styled-components'
import 'typeface-roboto'

export const Wrapper = styled.div`
  width: 50%;
  height: 100%;
  position: sticky;
  padding: 0.2rem calc((100vw - 1150px) / 2);
  color: #215ee9;
`
export const LittleText = styled.p`
  font-size: 14px;
  font-family: roboto;
  font-weight: bold;
`

export const BigText = styled.p`
  font-family: roboto;
  font-weight: bold;
  font-size: 40px;
  line-height: 101.8%;
  margin-block-start: 0em;
  margin-block-end: 0em;
`
export const DescriptionText = styled.p`
  font-family: roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
`
