/* eslint-disable max-len */
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import '../styles/styles.css';
import SignUp from '../auth/SignUp';
import Login from '../auth/Login';
import AboutUs from '../components/aboutUs/AboutUs';
import Home from '../components/home/Home';
import Navigation from '../components/navigation/Navigation';
import HowWorks from '../components/howWorks/HowWorks';
import ProjectList from '../components/projectListPage/ProjectListPage';
import ProjectForm from '../components/projectForm/ProjectForm';
import UserDetail from '../components/userDetail/UserDetail';
import UserForm from '../components/userForm/UserForm';
import { AuthUserProvider } from '../state/AuthUserProvider';
import { ProjectProvider } from '../state/ProjectProvider';
import PrivateRoute from '../auth/PrivateRoute';
import UsersList from '../components/allUsersList/UsersList';
import ProjectEditForm from '../components/projectForm/ProjectEditForm';
import Footer from '../components/footer/Footer';
import ProjectDetail from '../components/projectDetail/ProjectDetail';

export default class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <AuthUserProvider>
            <ProjectProvider>
              <Navigation /> 
              <Switch>
                <Route exact path="/login" component={ Login } />
                <Route exact path="/signup" component={ SignUp } />
                <Route exact path="/about-us" render={ AboutUs } />
                <Route exact path="/" component = { Home } />
                <Route exact path="/info" component = { HowWorks } />
                <Route exact path="/users-list" component = { UsersList } />
                <Route exact path="/user-detail/:id" component={ UserDetail } />
                <Route exact path="/project-list" component = { ProjectList } />
                <Route exact path="/project-detail/:id" component = { ProjectDetail } />
                <PrivateRoute exact path="/user-form" component={ UserForm } />
                <PrivateRoute exact path="/project-form" component = { ProjectForm } />
                <PrivateRoute exact path="/project-edit/:id" component = { ProjectEditForm } />
              </Switch>
              <Footer />
            </ProjectProvider>
          </AuthUserProvider>
        </Router>
      </div>
    );
  }
}
