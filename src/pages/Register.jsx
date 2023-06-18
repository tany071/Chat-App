import React from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Register = () => {

    const handleSubmit = (e)=>{
        e.preventDefault()
        const displayname = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
    }


    
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });


  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <div className='title'>Register</div>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='display name'/>
                <input type='email' placeholder='email'/>
                <input type='password' placeholder='password'/>
                <button>Sign Up</button>
            </form>
            <p>Already have an account? Login</p>

        </div>
    </div>
  )
}

export default Register;