import React from 'react'
import InputPage from '../Input'
import TableStats from '../Stats/index'

const LeftSide = () => {
  return (
    <div>
      <p>Booking of doctor’s appointment</p>
      <p>
        Don’t Miss Our
        <br /> Exclusive Patient
        <br /> Special
      </p>
      <p>
        We want to make sure that everyone has access to
        natural
        <br /> and effective care. With our special, you’ll
        receive a<br /> consultation and a digital posture
        assesment.
      </p>
      <InputPage />
      <TableStats />
    </div>
  )
}

export default LeftSide
