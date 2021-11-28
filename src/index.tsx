import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import { InitialQueryProvider } from './contexts/InitialQueryContext'
import { RecentsProvider } from './contexts/RecentsContext'
import Main from './main'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <InitialQueryProvider>
        <RecentsProvider>
          <Main />
        </RecentsProvider>
      </InitialQueryProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
