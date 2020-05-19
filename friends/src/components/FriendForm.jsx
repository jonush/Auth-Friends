import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';

const FriendForm = ({ getFriends }) => {
  const history = useHistory();

  const [ newFriend, setNewFriend ] = useState({
    name: '',
    age: '',
    email: ''
  })

  const handleInput = e => {
    setNewFriend({
      ...newFriend,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('http://localhost:5000/api/friends', newFriend)
      .then(res => {
        history.push('/friends');
      })
      .catch(err => {
        console.log(err);
        alert('Failed to add a new friend')
      });

    setNewFriend({
      name: '',
      age: '',
      email: ''
    })

    getFriends();
  }

  return (
    <div>
      <form className='friend-form' onSubmit={handleSubmit}>
        <h1>Add a Friend</h1>
        <label>
          <input 
            type='text'
            name='name'
            value={newFriend.name}
            onChange={handleInput}
            placeholder='Name'
          />
        </label>

        <label>
          <input 
            type='number'
            name='age'
            value={newFriend.age}
            onChange={handleInput}
            placeholder='Age'
          />
        </label>

        <label>
          <input 
            type='text'
            name='email'
            value={newFriend.email}
            onChange={handleInput}
            placeholder='Email'
          />
        </label>

        <button onSubmit={handleSubmit}>Add Friend</button>
      </form>
    </div>
  )
}

export default FriendForm;