/* eslint-disable max-len */
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Welcome from '../components/welcome/Welcome';
import SignUp from '../components/signUp/SignUp';

// -----------------------------------------------------------------------------------

export default class App extends Component {


  state = {
    username: localStorage.getItem('USERNAME') || '',
    token: localStorage.getItem('TOKEN') || '',
  };

  // -----------------------------------------------------------------------------------

  setTokenAndName = (username, token) => {
    localStorage.setItem('TOKEN', token);
    localStorage.setItem('USERNAME', username);

    this.setState({
      username,
      token
    });
  };

  // -----------------------------------------------------------------------------------

  logOut = () => {
    localStorage.setItem('TOKEN', '');
    localStorage.setItem('USERNAME', '');

    this.setState({
      username: '',
      token: ''
    });
  };

  // -----------------------------------------------------------------------------------
  render() {
    return (
      <div>
        <Router>

          <Switch>

            <Route
              path="/"
              exact
              component = { Welcome } 
            />
            
            <Route
              path="/signup"
              exact
              component = { SignUp } 
            />

          </Switch>

        </Router>
      </div>
    );
  }
}
