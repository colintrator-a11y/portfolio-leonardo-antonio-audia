import React from 'react'
import ReactDOM from 'react-dom/client'

// Base layer first: component stylesheets must be able to override the
// shared primitives in global.css (e.g. .service overriding .card).
import './styles/global.css'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
