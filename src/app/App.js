/* eslint-disable max-len */
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Welcome from '../components/welcome/Welcome';
import SignUp from '../auth/SignUp';
import Login from '../auth/Login';
import AboutUs from '../components/aboutUs/AboutUs';
import Home from '../components/home/Home';
import Navigation from '../components/navigation/Navigation';
import HowWorks from '../components/howWorks/HowWorks';
import MovieDetail from '../components/movieDetail/MovieDetail';
import MoviePitchForm from '../components/moviePitchForm/MoviePitchForm';
import UserDetail from '../components/userDetail/UserDetail';
import { AuthProvider } from '../state/AuthContext';
// import PrivateRoute from '../auth/PrivateRoute';
// -----------------------------------------------------------------------------------

export default class App extends Component {

  // state = {
  //   username: localStorage.getItem('USERNAME') || '',
  //   token: localStorage.getItem('TOKEN') || '',
  // };

  // // -----------------------------------------------------------------------------------

  // setTokenAndName = (username, token) => {
  //   localStorage.setItem('TOKEN', token);
  //   localStorage.setItem('USERNAME', username);

  //   this.setState({
  //     username,
  //     token
  //   });
  // };

  // // -----------------------------------------------------------------------------------

  // logOut = () => {
  //   localStorage.setItem('TOKEN', '');
  //   localStorage.setItem('USERNAME', '');

  //   this.setState({
  //     username: '',
  //     token: ''
  //   });
  // };

  // -----------------------------------------------------------------------------------
  render() {
    return (
      <div>
        <Router>
          <AuthProvider>
      
            <Navigation /> 

            <Switch>

              <Route
                exact path="/"
                component = { Welcome } 
              />
            
              <Route exact path="/login" component={ Login } />
            
              <Route exact path="/signup" component={ SignUp } />

              <Route
                exact path="/aboutus"
                render={ AboutUs }
              />

              <Route
                exact path="/home"
                component = { Home } 
              />

              <Route
                exact path="/howworks"
                component = { HowWorks } 
              />

              <Route
                exact path="/moviedetail"
                component = { MovieDetail } 
              />

              <Route
                exact path="/moviepitchform"
                component = { MoviePitchForm } 
              />

              <Route
                exact path="/userdetail"
                render={ UserDetail }
              />

            </Switch>
          </AuthProvider>
        </Router>
      </div>
    );
  }
}
