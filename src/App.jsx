import { useState } from 'react'
import './App.css'
import AppRouter from './route/AppRouter'
import AuthContextProvider from './context/AuthContext'

function App() {


  return (
    <AuthContextProvider>
      <AppRouter/>
    </AuthContextProvider>
  )
}

export default App
