import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
  return (
    <nav>
      <NavLink className='logo' to='/'>T<span style={{color: 'royalblue'}}>F</span>L</NavLink>

      <div>
        <NavLink to='/login'>Login</NavLink>
        <NavLink to='/friends'>Friends List</NavLink>
      </div>
    </nav>
  )
}

export default Navbar;