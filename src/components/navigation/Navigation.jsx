/* eslint-disable max-len */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useIsAuthenticated, useLogout } from '../../state/AuthContext';


export default function Navigation({ history }) {

  const logOut = useLogout();

  const handleLogOut = async() => {
    await logOut();
  };
    
  const authentication = useIsAuthenticated(); 

  return (
    <div>
      {
        authentication ?
          <div className="navbar">
            <NavLink className="link" to="/Home">Home</NavLink>
            <NavLink className="link" to="/aboutUs">About the Developers</NavLink>

            <div className="logged-in">
              <NavLink className="link" to="/userdetail">User Profile</NavLink>
              <span className="logout">
                <button onClick={handleLogOut}>Log out</button>
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

