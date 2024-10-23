import React from 'react'
import '../../Assets/Styles/StudentForgetPassword.css'
import { Link } from 'react-router-dom'
function StudentForgetPassword() {
    return (
        <div className='d-flex justify-content-center align-items-center' style={{ height: "100vh" }}>
            <div className="card border d-flex align-items-center" style={{ height: '320px', width: '400px' }}>
                <h3 className='ForgetPassHead mt-3'>Forget Your Password ?</h3>
               
                <div className='w-75 p-2'>
                    <input className='w-100 py-2 mt-4 rounded rounded-3 ps-2 fs-5' placeholder='Enter Your Email' autoFocus type="email" name="email" id="email" />
                    <input className='w-100 py-2  mt-4 rounded rounded-3 ps-2 fs-5' placeholder='Re Enter Password'  type="password" name="pass" id="pass" />
                    <button className='w-100 py-1  mt-3 rounded rounded-3'>Reset</button>
                </div>
                <p>Already have an account? <Link to={'/'}>Log in</Link></p>
            </div>
        </div>
    )
}

export default StudentForgetPassword