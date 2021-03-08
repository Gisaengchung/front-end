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
      .then(() => history.push('/'));
  };
    
  // ---------------------------------------

  return (
    <div className={styles.site}>
      {
        authentication 
        // CONDITIONAL----------------------------------------------------------
          ?
          <>
            <nav className={styles.navContainer}>
              <div className={styles.logo}>FIIN</div>
              <ul className={styles.navList}>
                <li className={styles.navItem}>
                  <NavLink className="link" to="/">Home</NavLink>
                </li>
                <li className={styles.navItem}>
                  <NavLink className="link" to="/info">What Is FIIN?</NavLink>
                </li>
                <li className={styles.navItem}>
                  <NavLink className="link" to="/about-us">About the Developers</NavLink>
                </li>
                <li className={styles.navItem}>
                  <NavLink className="link" to="/users-list">Find A Friend</NavLink>
                </li>
                <li className={styles.navItem}>
                  <NavLink className="link" to="/project-list">Discover Projects</NavLink>
                </li>
                <li className={styles.navItem}>
                  <NavLink className="link" to="/project-form">Create a Project</NavLink>
                </li>
                <li className={styles.navItem}>
                  <span className="link" onClick={handleLogOut}>Log out</span>
                </li>
              </ul>
            </nav>
          </>
          // --------------------------------------------------------------------
          :
          <>       
            <nav className={styles.navContainer}>
              <div className={styles.navLeft}>
                <li className={styles.nav}>
                  <NavLink className="link" to="/">Home</NavLink>
                </li>
                <li className={styles.nav}>
                  <NavLink className="link" to="/info">What is FIIN?</NavLink>
                </li>
                <li className={styles.nav}>
                  <NavLink className="link" to="/about-us">About the Developers</NavLink>
                </li>
                <li className={styles.nav}>
                  <NavLink className="link" to="/users-list">Find A Friend</NavLink>
                </li>
                <li className={styles.navItem}>
                  <NavLink className="link" to="/project-list">Discover Projects</NavLink>
                </li>
                <li className={styles.navItem}>
                  <NavLink className="link" to="/project-form">Create a Project</NavLink>
                </li>
              </div>
              <div className={styles.navRight}>
                <li className={styles.nav}><NavLink className="link" to="/signup">Sign Up</NavLink></li>
                <li className={styles.nav}><NavLink className="link" to="/login">Login</NavLink></li>
              </div>
            </nav>
          </>
      }
    </div>
  );
}
