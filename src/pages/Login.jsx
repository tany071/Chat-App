import React, { useState } from 'react'
import { signInWithEmailAndPassword , signOut, updateProfile } from "firebase/auth";
import {auth} from "../firebase";

const Login = () => {
  const[loginEmail,setLoginEmail]=useState();
  const[loginPassword,setLoginPassword]=useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const login = async ()=>{
    try {
      const user = await signInWithEmailAndPassword(auth,loginEmail,loginPassword);
      console.log(user);
    } catch (error) {
      console.log(error.message)
    }
  }

  const logout = async()=>{
    await signOut(auth);
  }



  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <div className='title'>Login</div>
            <form onSubmit={handleSubmit}>
                <input type='email' placeholder='email' onChange={(e)=>{setLoginEmail()}}/>
                <input type='password' placeholder='password'/>
                <button onClick={login}>Sign In</button>
            </form>
            <p>Don't have an account? Register</p>
            <button onClick={logout}>Logout</button>

        </div>
    </div>
  )
}

export default Login