import React from 'react'
import InputPage from '../Input'
import TableStats from '../Stats/index'
import {
  LittleText,
  BigText,
  DescriptionText,
} from './styles'

const Content = () => {
  return (
    <React.Fragment>
      <LittleText>
        Booking of doctor’s appointment
      </LittleText>
      <BigText>
        Don’t Miss Our
        <br /> Exclusive Patient
        <br /> Special
      </BigText>
      <DescriptionText>
        We want to make sure that everyone has access to
        natural
        <br /> and effective care. With our special, you’ll
        receive a<br /> consultation and a digital posture
        assesment.
      </DescriptionText>
      <InputPage />
      <TableStats />
    </React.Fragment>
  )
}

export default Content
