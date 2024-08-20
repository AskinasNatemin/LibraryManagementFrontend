import React from 'react'

function AdminLogin() {
  return (
    <>
     <div className='rform'>
<h2>Registration Form</h2>
<div className='name'><label htmlFor="Name">Name: <input type="text" /></label></div>
<div className='email'><label htmlFor="Email">Email: <input type="text" /></label></div>
<div className='pass'><label htmlFor="pass">Password: <input type="password" /></label></div>
<div className='phone'><label htmlFor="phone">Phone Number: <input type="number" /></label></div>
<div className='gender'><input type="checkbox"/><label htmlFor="male">male</label> <input type="checkbox" /><label htmlFor="female">female</label> <input type="checkbox" /><label htmlFor="other">other</label></div>
<button type='submit'>Create Account</button>
<h4>Already have an account or<a href="">Sign in?</a></h4>

      </div>
    </>
  )
}

export default AdminLogin