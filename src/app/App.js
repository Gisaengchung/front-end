/* eslint-disable max-len */
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Welcome from '../components/welcome/Welcome';
import SignUp from '../components/signUp/SignUp';
import Login from '../components/login/Login';
import AboutUs from '../components/aboutUs/AboutUs';
import Home from '../components/home/Home';
import HowWorks from '../components/howWorks/HowWorks';
import MovieDetail from '../components/movieDetail/MovieDetail';
import MoviePitchForm from '../components/moviePitchForm/MoviePitchForm';
import UserDetail from '../components/userDetail/UserDetail';
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
              render={
                (routerProps) =>
                  <SignUp
                    {...routerProps}
                    setTokenAndName={this.setTokenAndName}
                  />
              }
            />

            <Route exact path="/login" render={(routerProps) =>
              <Login {...routerProps}
                setTokenAndName={this.setTokenAndName}
              />}
            />

            <Route
              path="/aboutus"
              exact
              component = { AboutUs } 
            />

            <Route
              path="/home"
              exact
              component = { Home } 
            />

            <Route
              path="/howworks"
              exact
              component = { HowWorks } 
            />

            <Route
              path="/moviedetail"
              exact
              component = { MovieDetail } 
            />

            <Route
              path="/moviepitchform"
              exact
              component = { MoviePitchForm } 
            />

            <Route
              path="/userdetail"
              exact
              render={(routerProps) => <UserDetail {...routerProps} token={this.state.token} username={this.state.username} logOut={this.logOut} />}
            />

          </Switch>

        </Router>
      </div>
    );
  }
}
