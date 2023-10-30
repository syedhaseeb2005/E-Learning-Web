import React, { useRef } from 'react'
import './Login.css'
import { getAuth, signInWithEmailAndPassword } from "../../firebaseConfig/firebaseConfig.js";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
function Login() {
  const [showmsg , setshowmsg] = useState('')
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate()

  const LoginHanlder = ()=>{
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email.current?.value, password.current?.value)
  .then((userCredential) => {
    const user = userCredential.user;
    if(user){
      setshowmsg('You are Login Successfully')
      setTimeout(()=>navigate('/'),1000)
    }
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
  });
  }

  return (
    <>
    <div className="LoginWrapper">
    <div className="LoginRight">
      <div className="LoginBox">
      <h1>Login</h1>
        <input 
        type='email' 
        placeholder='Enter Your Email...' 
        required  
        ref={email}
        className='LoginInput' />
        
        <input
        type='password' 
        placeholder='Enter Your Password...' 
        required 
         ref={password}
        className='LoginInput' 
        minLength='6'/>
       
        
        <p style={{textAlign:'center',color:'#0f0',fontWeight:'bold'}}>{showmsg}</p>

        <button className='Button' type='submit' onClick={LoginHanlder}>Login Up</button>
      
      </div>
    
    </div>

</div>

</>
  )
}

export default Login