import React from 'react'
import { Input, InputButtom, InputText } from './styles'

const InputPage = () => (
  <form>
    <Input>
      <InputText
        type="text"
        placeholder="Enter your email"
      />
      <InputButtom>
        <b>Get Started</b>
      </InputButtom>
    </Input>
  </form>
)

export default InputPage
