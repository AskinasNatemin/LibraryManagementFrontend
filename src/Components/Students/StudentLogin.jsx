import { Link } from 'react-router-dom'
import '../../Assets/Styles/StudentLogin.css'
import { useState } from 'react'

function StudentLogin() {

  const[data,setData]=useState({});

  const handleInput=(e)=>{
    const{name,value}=e.target
    setData((prev)=>{
      return {...prev,[name]:value}
    })
  }
  
  return (
    <div className='d-flex justify-content-center align-items-center' style={{ height: "100vh" }}>
      <div className="card border" style={{ height: '400px', width: '400px' }}>
        <h1 className='head text-center py-4'>STUDENT LOGIN</h1>
        <div className='row h-100'>
          <div className="col-12 d-flex align-items-center ">
            <input onChange={handleInput} className='StudentInput mx-4' placeholder='UserName' type="text"  name="username" id="username" />
          </div>
          <div className="col-12 d-flex align-items-center ">
            <input onChange={handleInput} className='StudentInput mx-4' placeholder='Password' type="password" name="password" id="password" />
          </div>
          <div className=' d-flex justify-content-end'>
            <Link to={'/Student_Forget_Password'} className='me-4'>forget Password ?</Link>
          </div>
          <div className='d-flex justify-content-center'>
            <button  className='w-75 LoginBtn'>Login</button>
          </div>
          <div className='ms-4'>
            <p>Create new? <Link to={'/Student_Sign_Up'}>Signup</Link></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentLogin