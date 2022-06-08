import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'


const Navbar = () => {
  return (
    <>
      <div className='nav-styles nav'>
            <Link to='/' style={{textDecoration: 'none'}}> <h3>Home</h3></Link>
            <Link to='/about' style={{textDecoration: 'none'}}> <h3>About </h3></Link>
            <Link to='/contact' style={{textDecoration: 'none'}}><h3>Contact</h3></Link>
      </div>
    </>
  )
}

export default Navbar