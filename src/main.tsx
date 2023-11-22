import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

const config = {
  "api": {
    "baseUri": "http://localhost:5086"
  },
  "app": {
    "name": "The Exchange",
    "subtitle": "",
    "basePath": "",
    "showEmailPage": false,
    "showNotificationPage": false
  }
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<React.StrictMode>
    <BrowserRouter basename={config.app.basePath}>
      <App appConfig={config} />
    </BrowserRouter>
</React.StrictMode>)