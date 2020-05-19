import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Welcome = () => {
  return (
    <div className='welcome'>
      <h1>The <span style={{color: 'royalblue'}}>Friends</span> List</h1>
      <Link to='/login'><button>Log In</button></Link>
    </div>
  )
}

export default Welcome;