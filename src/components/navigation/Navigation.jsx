/* eslint-disable max-len */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useIsAuthenticated, useLogout } from '../../state/AuthUserProvider';
import { useHistory } from 'react-router-dom';

export default function Navigation() {

  const history = useHistory();
  const logOut = useLogout();

  const handleLogOut = () => {
    logOut()
      .then(() => history.push('/Home'));
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
              {/* <NavLink className="link" to="/user-detail">User Profile</NavLink> */}
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

