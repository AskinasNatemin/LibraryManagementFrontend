import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import StudentLogin from './Components/Students/StudentLogin';
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import AdminLogin from './Components/Admin/AdminLogin';
import StudentSignUp from './Components/Students/StudentSignUp';
import StudentForgetPassword from './Components/Students/StudentForgetPassword';
import StaffForgetpassword from './Components/Staff/StaffForgetpassword'
import StaffLogin from './Components/Staff/StaffLogin';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<StudentLogin/>}/>
        <Route path='/Student_Sign_Up' element={<StudentSignUp/>}/>
        <Route path='/Student_Forget_Password' element={<StudentForgetPassword/>}/>
        <Route path='/admin_login' element={<AdminLogin/>}/>
        <Route path='/staff-login' element={<StaffLogin/>}/>
        <Route path='/Staff-forget-password' element={<StaffForgetpassword/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
