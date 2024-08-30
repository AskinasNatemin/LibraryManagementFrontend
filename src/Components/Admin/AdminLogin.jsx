import React from 'react'
import '../../Assets/Styles/AdminLogin.css'
import { Link } from 'react-router-dom'

function AdminLogin() {
  return (
   <div className='loginbackground'>
    <div className='loginpage'>
       <h2 className='adminlogin'>Admin Login</h2>
       <div className='adminusername'><input type="text" placeholder='Username'/></div>
       <div className='adminemail'><input type="email" placeholder='Email'/></div>
       <div className='adminpassword'><input type="password" placeholder='Password'/></div>
       <div className='adminbut'><button type='submit'>Login</button></div>
       <div className='fp1 mt-3 text-center'><Link className='text-decoration-none text-white'>Forgetpassword?</Link> <Link className='text-decoration-none'>Signup</Link></div>
       

    </div>
   </div>
  )
}

export default AdminLogin