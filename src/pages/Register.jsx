import React from 'react'
import register from"../assets/register.jpg"


const Register = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      
      <img src={register} alt="" 
      className="w-full h-full object-cover"
      // className='bg-center'
       />
    </div>
  )
}

export default Register