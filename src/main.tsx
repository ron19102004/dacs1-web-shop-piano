import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './modules/module.routes'
import './global.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
