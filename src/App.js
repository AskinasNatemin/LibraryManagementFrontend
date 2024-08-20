import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './Assets/Styles/StudentLogin.css'
import StudentLogin from './Components/Students/StudentLogin';
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import AdminLogin from './Components/Admin/AdminLogin';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<StudentLogin/>}/>
        <Route path='/admin_login' element={<AdminLogin/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
