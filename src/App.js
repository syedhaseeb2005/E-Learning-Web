import './App.css';
import Signup from './Pages/SignUp/Signup';
import Login from './Pages/Login/Login';
import {BrowserRouter , Route , Routes} from 'react-router-dom'
import Home from './Pages/Home/Home';
import Courses from './Pages/Courses/Courses';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>} />
      <Route path='/courses' element={<Courses/>}/>
      </Routes>
    </BrowserRouter>
      // <Login/>
  );
}

export default App;
