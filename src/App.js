import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './components/Login';
import FriendList from './components/FriendList';
import FriendForm from './components/FriendForm';
import FriendHeader from './components/FriendHeader';

function App() {
  return (
    <div className="App">
      <FriendHeader />
      <Switch>
        <Route path="/friendlist" component={FriendList} />
        <Route path="/addfriend" component={FriendForm} />
        <Route path="/login" component={Login} />
        <Route path="/" component={Login} />
      </Switch>
      
    </div>
  );
}

export default App;
