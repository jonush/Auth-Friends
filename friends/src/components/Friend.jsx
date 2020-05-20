import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useHistory, useParams } from 'react-router-dom';

const Friend = () => {
  const [ friend, setFriend ] = useState([]);
  const { id } = useParams();
  const history = useHistory();

  const [ edit, setEdit ] = useState(friend);
  const [ editing, setEditing ] = useState(false);

  const getFriend = id => {
    axiosWithAuth()
      .get(`http://localhost:5000/api/friends/${id}`)
      .then(res => {
        console.log('GET request for friend', res);
        setFriend(res.data)
      })
      .catch(err => console.log(err))
  }

  const updateFriend = e => {
    e.preventDefault();
    axiosWithAuth()
      .put(`http://localhost:5000/api/friends/${id}`, friend)
      .then(res => {
        console.log('PUT request for friend', res);
      })
      .catch(err => console.log(err))
    setEditing(false);
  }

  const editFriend = e => {
    setEditing(true);
  }

  const handleInput = e => {
    setFriend({
      ...friend,
      [e.target.name]: e.target.value
    })
  }

  const removeFriend = e => {
    axiosWithAuth()
      .delete(`http://localhost:5000/api/friends/${id}`)
      .then(res => {
        console.log('DELETE request for friend', res);
        history.push('/friends')
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getFriend(id)
  }, [id])

  const previous = () => {
    history.push('/friends');
  }

  return (
    !editing ?
    (<div className='friend'>
      <div className='card'>
        <h1>{friend.name}</h1>
        <h2>{friend.age}</h2>
        <h3>AGE</h3>
        <h2>{friend.email}</h2>
        <h3>EMAIL</h3>
      </div>

      <button onClick={previous}>Back</button>
      <button onClick={editFriend}>Edit</button>
      <button style={{backgroundColor: 'rgb(181, 51, 51)'}}onClick={removeFriend}>Delete</button>
    </div>) : 
    (<div>
      <form className='friend-form' onSubmit={updateFriend}>
        <h1>Edit Friend</h1>

        <label>
          <input 
            type='text'
            name='name'
            value={friend.name}
            onChange={handleInput}
            placeholder='Name'
          />
        </label>

        <label>
          <input 
            type='number'
            name='age'
            value={friend.age}
            onChange={handleInput}
            placeholder='Age'
          />
        </label>

        <label>
          <input 
            type='text'
            name='email'
            value={friend.email}
            onChange={handleInput}
            placeholder='Email'
          />
        </label>

        <button onSubmit={updateFriend}>Save</button>
        <button onClick={previous}>Back</button>
        <button style={{backgroundColor: 'rgb(181, 51, 51)'}}onClick={removeFriend}>Delete</button>
      </form>
    </div>)
  )
}

export default Friend;