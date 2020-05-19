import React from 'react';
import PrivateRoute from './components/PrivateRoute';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import Friend from './components/Friend';
import { Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route exact path='/' component={Welcome} />
        <Route path='/login' component={Login} />
        <PrivateRoute exact path='/friends' component={FriendsList} />
        <Route path='/friends/:id' component={Friend} />
      </Switch>
    </div>
  );
}

export default App;
