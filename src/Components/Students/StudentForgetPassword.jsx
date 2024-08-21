import React from 'react'
import '../../Assets/Styles/StudentForgetPassword.css'
import { Link } from 'react-router-dom'
function StudentForgetPassword() {
    return (
        <div className='d-flex justify-content-center align-items-center' style={{ height: "100vh" }}>
            <div className="card border d-flex align-items-center" style={{ height: '400px', width: '400px' }}>
                <h3 className='ForgetPassHead mt-3'>Forget Your Password ?</h3>
                <div className='d-flex align-items-center flex-column my-3'>
                    <span>We'll Send you an OTP to reset</span>
                    <span>the Password</span>
                </div>
                <div className='w-75 border h-50 p-3'>
                    <input className='w-100 h-25 mt-4 rounded rounded-3 ps-2 fs-5' placeholder='Enter Your Email' autoFocus type="email" name="" id="" />
                    <button className='w-100 h-25 mt-3 rounded rounded-3'>GET OTP</button>
                </div>
                <p>Already have an account? <Link to={'/'}>Log in</Link></p>
            </div>
        </div>
    )
}

export default StudentForgetPassword