import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const history = useHistory();

  const [ login, setLogin ] = useState({
    username: '',
    password: ''
  })

  const handleInput = e => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/api/login', login)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        history.push('/friends');
      })
      .catch(err => {
        console.log(err.response);
        alert('Login Failed')
      });

    setLogin({
      username: '',
      password: ''
    })
  }

  return (
    <div>
      <form className='login' onSubmit={handleSubmit}>
        <h1>LOGIN</h1>

        <label>
          <input 
            type='text'
            name='username'
            value={login.username}
            onChange={handleInput}
            placeholder='Username'
          />
        </label>

        <label>
          <input 
            type='password'
            name='password'
            value={login.password}
            onChange={handleInput}
            placeholder='Password'
          />
        </label>

        <button onSubmit={handleSubmit}>Log In</button>
      </form>
    </div>
  )
}

export default Login;