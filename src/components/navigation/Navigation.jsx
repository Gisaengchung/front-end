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
    <div>
      {
        authentication 
        // CONDITIONAL----------------------------------------------------------
          ?
          <div>
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
                  <NavLink className="link" to="/about-us">About Us</NavLink>
                </li>
                <li className={styles.navItem}>
                  <NavLink className="link" to="/users-list">Find Creators</NavLink>
                </li>
                <li className={styles.navItem}>
                  <NavLink className="link" to="/project-list">Discover Films</NavLink>
                </li>
                <li className={styles.navItem}>
                  <NavLink className="link" to="/project-form">Create a Film</NavLink>
                </li>
                <li className={styles.navItem}>
                  <div className="link" onClick={handleLogOut}>Log out</div>
                </li>
              </ul>
            </nav>
          </div>
          // --------------------------------------------------------------------
          :
          <div>       
            <nav className={styles.navContainer}>
              <div className={styles.logo}>FIIN</div>
              <ul className={styles.navList}>
                <li className={styles.navItem}>
                  <NavLink className="link" to="/">Home</NavLink>
                </li>
                <li className={styles.navItem}>
                  <NavLink className="link" to="/info">What is FIIN?</NavLink>
                </li>
                <li className={styles.navItem}>
                  <NavLink className="link" to="/about-us">About Us</NavLink>
                </li>
                <li className={styles.navItem}>
                  <NavLink className="link" to="/users-list">Find Creators</NavLink>
                </li>
                <li className={styles.navItem}>
                  <NavLink className="link" to="/project-list">Discover Films</NavLink>
                </li>
                <li className={styles.navItem}>
                  <NavLink className="link" to="/signup">Sign Up</NavLink>
                </li>
                <li className={styles.navItem}>
                  <NavLink className="link" to="/login">Login</NavLink>
                </li>
              </ul>
            </nav>
          </div>
      }
    </div>
  );
}
