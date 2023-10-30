import React, { useRef, useState } from 'react'
import './Signup.css'
import { useNavigate } from 'react-router-dom'
import {getAuth , createUserWithEmailAndPassword , setDoc , doc ,db} from '../../firebaseConfig/firebaseConfig.js'

function Signup() {
  const [showmsg , setshowmsg] = useState('')
  const navigate = useNavigate()
  const gotoLoginpage = () =>{
    navigate('/login')
  }
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const confirmPassword = useRef();
    if(confirmPassword.current?.value !== password.current?.value){
      password.current.setCustomValidity('Password Not Match!')
    }
    const SignUpHanlder = async () =>{

      const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email.current?.value, password.current?.value,username.current?.value , confirmPassword.current?.value)
      .then((userCredential) => { 
        const user = userCredential.user;
        if(user){
          adduserhanlder(user?.uid)
          setshowmsg('You are Signup Successfully')
          setTimeout(()=>navigate('/login'),1000)
        }
    
  })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ..
      });
    }
   async function adduserhanlder(uid){
      try {
         await setDoc(doc(db, "user" ,uid),{
           username : username.current.value,
           email : email.current.value,
           uid
          })

      } catch (error) {
        console.log(error);
      }
    }
      return (
        <>
             <div className="registerWrapper">
            <div className="registerRight">
              <div className="registerBox">
                <h1>Signup</h1>
                <input
                placeholder='Enter Your UserName...' 
                 required
                 ref={username}
                className='registerInput' />
                
                <input 
                type='email' 
                placeholder='Enter Your Email...' 
                required
                ref={email}
                className='registerInput' />
                
                <input
                type='password' 
                placeholder='Enter Your Password...' 
                required
                ref={password}
                className='registerInput' 
                minLength='6'/>
                
                <input 
                type='password'
                placeholder='Enter Your Password Again...' 
                required
                ref={confirmPassword}
                className='registerInput' />
                
                <p style={{textAlign:'center',color:'#0f0',fontWeight:'bold'}}>{showmsg}</p>

                <button className='Button' type='submit' onClick={SignUpHanlder}>Sign Up</button>
                <button onClick={gotoLoginpage} className='Button'>Login into your account</button>
              
              </div>
            
            </div>
        
        </div>
    
        </>
  )
}

export default Signup