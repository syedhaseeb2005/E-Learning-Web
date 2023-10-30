import React from 'react'
import './Topbar.css'
import { Link } from 'react-router-dom'
import {getAuth , signOut} from '../../firebaseConfig/firebaseConfig.js'
import { useNavigate } from 'react-router-dom'
function Topbar() {
  const navigate = useNavigate()
  const logoutHandler = () =>{
    const auth = getAuth();
    try {
      signOut(auth).then(() => {
      // Sign-out successful.
        navigate('/login')
      }) 
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='topbar'>
        <div className="wrapper">
            <nav className='navbar'>
            <h1>E learning Web</h1>
            <ul className='list'>
                <Link to='/'>
                <li style={{padding:'2px 10px',width:'100%',textAlign:'center',background:'transparent',color:'#fff',border:'2px solid gold'}} className='lists'>Home</li>
                </Link>
                <Link to='/courses'>
                <li style={{padding:'2px 10px',width:'100%',textAlign:'center',background:'transparent',color:'#fff',border:'2px solid gold'}} className='lists'>Courses</li>
                </Link>
                <li style={{color:'#fff', width:'100%',padding:'2px 5px',textAlign:'center',background:'transparent',border:'2px solid gold'}} className='lists'>Contact Us</li>                
                <ul style={{display:'flex',alignItems:'center',gap:'40px'}}>
                  <Link to='/login'><li><button style={{padding:'5px 10px',width:'100%',background:'transparent',color:'#fff',border:'2px solid gold',cursor:'pointer'}}>Login</button></li></Link>
                  <Link to='/signup'><li><button style={{padding:'5px 10px',width:'100%',background:'transparent',color:'#fff',border:'2px solid gold',cursor:'pointer'}}>Signup</button></li></Link>
                  <li><button style={{padding:'5px 10px',width:'100%',background:'transparent',color:'#fff',border:'2px solid gold',cursor:'pointer'}} onClick={logoutHandler}>Logout</button></li>
                </ul>
            </ul>
            </nav>
        </div>
    </div>
  )
}

export default Topbar