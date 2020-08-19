import React from 'react'

import { AuthProvider } from 'react-oidc-routing'
import { BrowserRouter } from 'react-router-dom';
import { Routes } from './routes/routes';

const App = () => {
  return <AuthProvider>
    <BrowserRouter children={Routes} basename={'/'}></BrowserRouter>
  </AuthProvider>
}

export default App
