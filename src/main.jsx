import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AppFromApi from './UsingApi.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <AppFromApi />
  </React.StrictMode>,
)
