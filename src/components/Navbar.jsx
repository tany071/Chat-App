import React from 'react'
// import {} from '../context/Authcontext'


const Navbar = () => {
  return (
    <div className='navbar'>
        <span className='logo'>chat.</span>
        <div className='user'>
            <span>Name</span>
            <button>Logout</button>
        </div>
    </div>
  )
}

export default Navbar