import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useHistory, useParams } from 'react-router-dom';

const Friend = () => {
  const [ friend, setFriend ] = useState([]);
  const { id } = useParams();
  const history = useHistory();

  const getFriend = id => {
    axiosWithAuth()
      .get(`http://localhost:5000/api/friends/${id}`)
      .then(res => {
        setFriend(res.data)
      })
      .catch(err => console.log(err))
  }

  const removeFriend = e => {
    axiosWithAuth()
      .delete(`http://localhost:5000/api/friends/${id}`)
      .then(res => {
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
    <div className='friend'>
      <div className='card'>
        <h1>{friend.name}</h1>
        <h2>{friend.age}</h2>
        <h3>AGE</h3>
        <h2>{friend.email}</h2>
        <h3>EMAIL</h3>
      </div>

      <button onClick={previous}>Back</button>
      <button style={{backgroundColor: 'rgb(181, 51, 51)'}}onClick={removeFriend}>Delete</button>
    </div>
  )
}

export default Friend;