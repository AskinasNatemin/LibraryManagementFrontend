import React from 'react'


function StudentLogin() {
  return (
    <div className='d-flex justify-content-center align-items-center ' style={{ height: "100vh" }}>
      <div className="card border" style={{ height: '400px', width: '400px' }}>
        <h1 className='head text-center'>STUDENT LOGIN</h1>
            <div className='row border border-5 h-100'>
              <div className="col-12 d-flex align-items-center border">
                <label htmlFor="username" className='w-50 text-center'>UserName:</label>
                <input type="text" autoFocus name="username" id="username" />
              </div>
              <div className="col-12 d-flex align-items-center border">
                <label htmlFor="password" className='w-50 text-center'>Password:</label>
                <input type="password" name="password" id="password" />
              </div>
              <div className=' border d-flex justify-content-center'>
              <a href="/#">forget Password</a>
              </div>
              <div className='d-flex justify-content-center'>
              <button className='w-75 LoginBtn'>Login</button>
              </div>
            </div>
      </div>
    </div>
  )
}

export default StudentLogin