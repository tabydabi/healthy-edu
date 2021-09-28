import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter } from 'react-router-dom'

import Application from '@/App'

ReactDOM.render(
  <BrowserRouter>
    <Application />
  </BrowserRouter>,
  document.getElementById('root'),
)
