import React from 'react'

function StudentOtpSuccess() {
  return (
    <div className='border border-2 p-5  d-flex justify-content-center align-items-center'>
        <div className='w-25 p-5 card'>
            <div className='mx-auto card rounded rounded-circle p-3' style={{borderColor:'green'}}>☑️</div>
            <p className='mx-auto fw-5 text-success fs-5'>Success</p>
        </div>
    </div>
  )
}

export default StudentOtpSuccess