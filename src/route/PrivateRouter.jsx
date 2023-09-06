import React from 'react'
import { Navigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

const PrivateRouter = () => {
  const currentUser=false
  return currentUser ? <Outlet/>:<Navigate to="/login"/>
}

export default PrivateRouter