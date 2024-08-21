import React from 'react'

function StudentLogin() {
  return (
    <div className='d-flex justify-content-center align-items-center ' style={{ height: "100vh" }}>
      <div className="card border" style={{ height: '400px', width: '400px' }}>
        <h1 className='head text-center'>LOGIN</h1>
            <div className='row'>
              <div className="col-12 d-flex align-items-center p-5">
                <label htmlFor="username" className='w-50 text-center'>UserName:</label>
                <input type="text" name="username" id="username" />
              </div>
              <div className="col-12 d-flex align-items-center p-5">
                <label htmlFor="password" className='w-50 text-center'>Password:</label>
                <input type="password" name="password" id="password" />
              </div>
            </div>
            <div className="card-body">
              <button>Login</button>
            </div>
      </div>
    </div>
  )
}

export default StudentLogin