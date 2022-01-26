import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendForm';

function App() {
  return (
    <div className="App">
      <h2>Client Auth Project</h2>
      <Switch>
        <Route path="/friendslist" component={FriendsList} />
        <Route path="/addfriend" component={FriendForm} />
        <Route path="/login" component={Login} />
        <Route path="/" component={Login} />
      </Switch>
      
    </div>
  );
}

export default App;
