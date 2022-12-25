import React from 'react'

const Navbar = () => {
  return (
    <div className = 'navbar'>
      <span className='logo'>Let's Chat</span>
      <div className='user'>
        <img src="https://images.pexels.com/photos/3413359/pexels-photo-3413359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="logo"></img>
        <span>Karan</span>
        <button>Logout</button>
      </div>
      </div>
  )
}

export default Navbar