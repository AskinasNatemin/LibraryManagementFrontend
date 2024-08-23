import React from 'react'
import '../../Assets/Styles/AdminLogin.css'
import { Link } from 'react-router-dom'

function AdminLogin() {
  return (
   <div>
    <div className='loginpage'>
       <h2 className='alogin'>Admin Login</h2>
       <div className='username'><input type="text" placeholder='Username'/></div>
       <div className='email'><input type="email" placeholder='Email'/></div>
       <div className='password'><input type="password" placeholder='Password'/></div>
       <div className='but'><button type='submit'>Login</button></div>
       <div className='fp1'><Link>Forgetpassword?</Link></div>
       

    </div>
   </div>
  )
}

export default AdminLogin