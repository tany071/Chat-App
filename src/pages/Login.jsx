import React from 'react'

const login = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <div className='title'>Login</div>
            <form>
                <input type='email' placeholder='email'/>
                <input type='password' placeholder='password'/>
                <button>Sign In</button>
            </form>
            <p>Don't have an account? Register</p>

        </div>
    </div>
  )
}

export default login