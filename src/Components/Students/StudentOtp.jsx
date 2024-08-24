import React from 'react'
import '../../Assets/Styles/StudentOtp.css'
function StudentOtp() {
  return (
    <div className='d-flex justify-content-center align-items-center' style={{ height: "100vh"}}>
        <div className="card" style={{width:'350px',height:'360px'}}>
          <h1 className='text-center mt-5'>Verification</h1>
          <p className='text-center mt-2'>Enter the Otp</p>
          <div className='d-flex mt-5 justify-content-evenly'>
            <input required type='number' autoFocus className="OtpBox"></input>
            <input required type='number' className="OtpBox"></input>
            <input required type='number' className="OtpBox"></input>
            <input required type='number' className="OtpBox"></input>
          </div>
          <button className='StudentOtpButton mx-auto mt-4'>Verify</button>
        </div>
    </div>
  )
}

export default StudentOtp