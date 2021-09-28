import React from 'react'
import { Input, InputButtom, InputText } from './styles'

const InputPage = () => (
  <Input>
    <InputText type="text" placeholder="Enter your email" />
    <InputButtom>Send</InputButtom>
  </Input>
)

export default InputPage
