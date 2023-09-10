import React from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const PrivateRouter = () => {
 const{user}=useContext(AuthContext)
  return user.email&&user.password ? <Outlet/>:<Navigate to="/login"/>
}

export default PrivateRouter