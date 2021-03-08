/* eslint-disable max-len */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useIsAuthenticated, useLogout } from '../../state/AuthUserProvider';
import { useHistory } from 'react-router-dom';
import styles from './Navigation.css';

// -----------------------------------------

export default function Navigation() {

  const history = useHistory();
  const logOut = useLogout();
  const authentication = useIsAuthenticated(); 

  // HANDLE---------------------------------

  const handleLogOut = () => {
    logOut()
      .then(() => history.push('/Home'));
  };
    
  // ---------------------------------------

  return (
    <div>
      {
        authentication 
        // CONDITIONAL----------------------------------------------------------
          ?
          <>
            <nav className="page-menu menu">
              <ul className="menu-list r-list">
                <li className="menu-group">
                  <NavLink className="link" to="/">Home</NavLink>
                </li>
                <li className="menu-group">
                  <NavLink className="link" to="/how-works">How It All Works</NavLink>
                </li>
                <li className="menu-group">
                  <NavLink className="link" to="/about-us">About the Developers</NavLink>
                </li>
                <li className="menu-group">
                  <NavLink className="link" to="/users-list">Find A Friend</NavLink>
                </li>
                <li className="menu-group">
                  <NavLink className="link" to="/project-form">Create a Project</NavLink>
                </li>
            
                <div className={styles.navRight}>
                  {/* <NavLink className="link" to="/user-detail">User Profile</NavLink> */}
                  <li>
                    <button onClick={handleLogOut}>Log out</button>
                  </li>

               
                </div>
              </ul>
            </nav>
          </>
          // --------------------------------------------------------------------
          :
          <>       
            <nav className={styles.navContainer}>
              <div className={styles.navLeft}>
                <span className={styles.nav}>
                  <NavLink className="link" to="/home">Home</NavLink>
                </span>
                <span className={styles.nav}>
                  <NavLink className="link" to="/how-works">How It All Works</NavLink>
                </span>
                <span className={styles.nav}>
                  <NavLink className="link" to="/about-us">About the Developers</NavLink>
                </span>
                <span className={styles.nav}>
                  <NavLink className="link" to="/users-list">Find A Friend</NavLink>
                </span>
                <span className={styles.nav}>
                  <NavLink className="link" to="/project-form">Create a Project</NavLink>
                </span>
              </div>
              <div className={styles.navRight}>
                <span className={styles.nav}><NavLink className="link" to="/signup">Sign Up</NavLink></span>
                <span className={styles.nav}><NavLink className="link" to="/login">Login</NavLink></span>
              </div>
            </nav>
          </>
      }
    </div>
  );
}
