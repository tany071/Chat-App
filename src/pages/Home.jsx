import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Home = () => {
  return (
    <div className='home'>
        <div className='container'>
            {/* <Navbar/> */}
            <Sidebar />
        </div>
    </div>
  )
}

export default Home