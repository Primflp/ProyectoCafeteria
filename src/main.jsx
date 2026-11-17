import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'

import './index.css'
import App from './App.jsx'

import { GoogleOAuthProvider } from '@react-oauth/google';

const GOOGLE_CLIENT_ID = "745259504688-pokssjjth0m8qdm7unm3ca4al5omem1g.apps.googleusercontent.com";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <App />
    </GoogleOAuthProvider>
  </StrictMode>,
)
