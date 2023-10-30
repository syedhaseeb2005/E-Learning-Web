import React from 'react'
import './Topbar.css'
import { Link } from 'react-router-dom'


function Topbar() {

  return (
    <div className='topbar'>
        <div className="wrapper">
            <nav className='navbar'>
            <h1>E learning Web</h1>
            <ul className='list'>
                <li style={{padding:'2px 10px',width:'20%',textAlign:'center',background:'transparent',color:'#fff',border:'2px solid gold'}} className='lists'>Home</li>
                <Link to='/courses'>
                <li style={{padding:'2px 10px',width:'100%',textAlign:'center',background:'transparent',color:'#fff',border:'2px solid gold'}} className='lists'>Courses</li>
                </Link>
                <li style={{color:'#fff', width:'130%',padding:'2px 5px',textAlign:'center',background:'transparent',border:'2px solid gold'}} className='lists'>Contact Us</li>                
                <ul style={{display:'flex',alignItems:'center',gap:'40px'}}>
                  <Link to='/login'><li><button style={{padding:'5px 10px',width:'100%',background:'transparent',color:'#fff',border:'2px solid gold'}}>Login</button></li></Link>
                  <Link to='/signup'><li><button style={{padding:'5px 10px',width:'100%',background:'transparent',color:'#fff',border:'2px solid gold'}}>Signup</button></li></Link>
                </ul>
            </ul>
            </nav>
        </div>
    </div>
  )
}

export default Topbar