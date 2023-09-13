import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import TestApp from './TestData.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <TestApp />
  </React.StrictMode>,
)
