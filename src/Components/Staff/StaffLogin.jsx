import React from 'react'
import './StaffLogin.css'
import { FaLockOpen } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';

function StaffLogin() {
  return (
  <div className='form'>
    <form action="">
      <h1>STAFF LOGIN</h1>
      <div className='input-box'>
        <input type='text' placeholder='Username' required/><FaUser className='icon'/>
      </div>
      <div className='input-box'>
        <input type='password' placeholder='password' required/><FaLockOpen className='icon'/>
      </div>
      <div className="remember-forget">
        <label><input type='checkbox'/>Remember me</label>
        <Link to={'/Staff-forget-password'}>forget Password ?</Link>
      </div>
      <button type='submit'>Login</button>
      <div className='register-link'><p>Don't have an account?<a href="#">Register</a></p></div>

    </form>

  </div>
  )
}

export default StaffLogin