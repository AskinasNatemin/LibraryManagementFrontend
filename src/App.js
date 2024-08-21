import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import StudentLogin from './Components/Students/StudentLogin';
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import StaffLogin from './Components/Staff/StaffLogin';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<StudentLogin/>}/>
        <Route path='/staff_Login' element={<StaffLogin/>}/>
        
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
