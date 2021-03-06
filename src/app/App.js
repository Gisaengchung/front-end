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
import ProjectForm from '../components/projectForm/ProjectForm';
import UserDetail from '../components/userDetail/UserDetail';
import UserForm from '../components/userForm/UserForm';
import { AuthUserProvider } from '../state/AuthUserProvider';
import { ProjectProvider } from '../state/ProjectProvider';
import PrivateRoute from '../auth/PrivateRoute';
import UsersList from '../components/allUsersList/UsersList';
// -----------------------------------------------------------------------------------

export default class App extends Component {


  // -----------------------------------------------------------------------------------
  render() {
    return (
      <div>
        <Router>
          <AuthUserProvider>
            <ProjectProvider>
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
                  exact path="/how-works"
                  component = { HowWorks } 
                />

                <Route
                  exact path="/movie-detail"
                  component = { MovieDetail } 
                />

                <Route
                  exact path="/project-form"
                  component = { ProjectForm } 
                />

                <Route
                  exact path="/user"
                  component = { UsersList } 
                />

  
                <PrivateRoute
                  exact path="/user-detail"
                  component={ UserDetail }
                />

                <PrivateRoute
                  exact path="/user-form"
                  component={ UserForm }
                />

              </Switch>
            </ProjectProvider>
          </AuthUserProvider>
        </Router>
      </div>
    );
  }
}
