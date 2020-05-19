import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import FriendForm from './FriendForm';

import { Link } from 'react-router-dom';

const FriendsList = () => {
  const [ friends, setFriends ] = useState([]);
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    setLoading(true);
    getFriends();
  }, [])

  const getFriends = () => {
    axiosWithAuth()
    .get('http://localhost:5000/api/friends')
    .then(res => {
      setFriends(res.data);
      setLoading(false);
    })
    .catch(err => console.log(err))
  }

  return (
    <div>
      <div className='friends-container'>
        <div className="form">
          <FriendForm getFriends={getFriends} />
        </div>

        <div className='list'>
          <h1 className='friends-title'>My Friends List</h1>

          {loading && <h2>Loading Friends...</h2>}

          {
            friends.map((friend, index) => (
              <div className='list-item' key={index}>
                <Link to={`/friends/${friend.id}`} key={friend.id}>
                  <h2>{friend.name}</h2>
                </Link>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default FriendsList;