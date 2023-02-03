import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../src/assets/'

const Navbar = () => {
  return (
    <nav>
    <div className='navbar'>  </div>
    <Link to='/' className='nav-item nav-btn'></Link>
    <img src={logo} alt='logo' />
    </nav>
  )
}

export default Navbar
