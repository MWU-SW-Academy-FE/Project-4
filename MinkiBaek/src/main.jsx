import React from 'react'
import ReactDOM from 'react-dom/client'
import tailwindConfig from '../tailwind.config.js'
import Root from './Root.jsx'
tailwindConfig

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
)
