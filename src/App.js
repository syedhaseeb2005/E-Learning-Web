import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Courses from './Pages/Courses/Courses';
import Login from './Pages/Login/Login';
import Signup from './Pages/SignUp/Signup';
import {getAuth} from './firebaseConfig/firebaseConfig.js'

function App() {
  const auth = getAuth(); // Replace with your Firebase authentication context
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check Firebase Auth state and set user accordingly
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    // Unsubscribe when the component unmounts
    return () => unsubscribe();
  }, [auth]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/courses" element={user ? <Courses /> : <Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
