/* eslint-disable max-len */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navigation extends Component {

    handleLogOut = async() => {

      await this.props.logOut();
      this.props.history.push('/');
    }

    render() {
      return (
        <div>
          {
            this.props.token
              ?
              <div className="navbar">
                <NavLink className="link" to="/Home">Home</NavLink>
                <NavLink className="link" to="/aboutUs">About the Developers</NavLink>

                <div className="logged-in">
                  <NavLink className="link" to="/userdetail">User Profile</NavLink>
                  <span className="logout">
                    <button className="logger-out" onClick={this.handleLogOut}>Log out</button>
                  </span>
                </div>

              </div>
              :
              <div>
                <NavLink className="link" to="/Home">Home</NavLink>
                <NavLink className="link" to="/aboutUs">About the Developers</NavLink>

                <div>
                  <NavLink className="link" to="/signup">Sign Up</NavLink>
                  <NavLink className="link" to="/login">Login</NavLink>
                </div>
              </div>

          }

        </div>
      );
    }
}

