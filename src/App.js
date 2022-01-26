import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import FriendList from './components/FriendList';
import FriendForm from './components/FriendForm';
import FriendHeader from './components/FriendHeader';

function App() {
  return (
    <div className="App">
      <FriendHeader />
      <Switch>
        <PrivateRoute path="/friends" component={FriendList} />
        <PrivateRoute path="/addfriend" component={FriendForm} />
        <Route path="/login" component={Login} />
        <Route path="/" component={Login} />
      </Switch>
      
    </div>
  );
}

export default App;
