import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { SiteContextProvider } from './context/StiteContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SiteContextProvider>
    <App />
    </SiteContextProvider>
  </React.StrictMode>,
)
