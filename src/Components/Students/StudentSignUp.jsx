import React from 'react'
import '../../Assets/Styles/StudentSignUp.css'
import { Link } from 'react-router-dom'
function StudentSignUp() {
  return (
    <div className='d-flex justify-content-center align-items-center' style={{ height: "100vh"}}>
      <div className="card border"  style={{ height: '520px', width: '430px'}}>
        <h2 className='text-center pt-4 StudentSignUpHead'>SIGN UP</h2>
        <div className='h-75 d-flex flex-column gap-2 align-items-center pt-3'>
            <input className='w-75 rounded rounded-3 StudentSignUpInputs' autoFocus placeholder='FirstName' required type="text" />
            <input className='w-75 rounded rounded-3 StudentSignUpInputs' placeholder='LastName' type="text" />
            <input className='w-75 rounded rounded-3 StudentSignUpInputs' placeholder='Enter your gmail' required type="email" />
            <input className='w-75 rounded rounded-3 StudentSignUpInputs' placeholder='Password' required type="password" />
            <input className='w-75 rounded rounded-3 StudentSignUpInputs' placeholder='re-Password' required type="password" />
            <div className='d-flex flex-row w-75'>
            <input className='mb-4' type="checkbox" name="agree" id="agree"/>
            <label className='ms-2' htmlFor="agree">By Checking an SignUp you are Agree to the privacy and privacy policy</label>
            </div>
            <button className='w-50 StudentSignUpBtn'>Sign Up</button>
        </div>
      <p className='text-center mt-2'>Already have an Account? <Link to={'/'}>Login</Link></p>
      </div>
    </div>
  )
}

export default StudentSignUp