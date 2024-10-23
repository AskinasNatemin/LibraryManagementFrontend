import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import StudentSignUp from './Components/Students/StudentSignUp'
import StaffLogin from './Components/Staff/StaffLogin'
import StaffForgetpassword from './Components/Staff/StaffForgetpassword'
import StudentLogin from './Components/Students/StudentLogin';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminLogin from './Components/Admin/AdminLogin';
import AdminSignup from './Components/Admin/AdminSignup';
import StudentProfile from './Components/Students/StudentProfile';
import StudentForgetPassword from './Components/Students/StudentForgetPassword';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<StudentLogin />} />
          <Route path='/Student_Sign_Up' element={<StudentSignUp />} />
          <Route path='/Student_Profile' element={<StudentProfile/>} />
          <Route path='/Student_Forget_Password' element={<StudentForgetPassword/>} />

          <Route path='/staff-login' element={<StaffLogin />} />
          <Route path='/Staff-forget-password' element={<StaffForgetpassword />} />

          <Route path='/admin_signup' element={<AdminSignup />} />
          <Route path='/admin_login' element={<AdminLogin />} />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
