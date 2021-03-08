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
            <section className={styles.navContainer}>
              <div className={styles.navLeft}>
                <li className={styles.nav}>
                  <NavLink className="link" to="/home">Home</NavLink>
                </li>
                <li className={styles.nav}>
                  <NavLink className="link" to="/info">What Is FIIN?</NavLink>
                </li>
                <li className={styles.nav}>
                  <NavLink className="link" to="/about-us">About the Developers</NavLink>
                </li>
                <li className={styles.nav}>
                  <NavLink className="link" to="/users-list">Find A Friend</NavLink>
                </li>
                <li className={styles.nav}>
                  <NavLink className="link" to="/project-form">Create a Project</NavLink>
                </li>
              </div>
            
              <div className={styles.navRight}>
                {/* <NavLink className="link" to="/user-detail">User Profile</NavLink> */}
                <li>
                  <div onClick={handleLogOut}>Log out</div>
                </li>

               
              </div>
            </section>
          </>
          // --------------------------------------------------------------------
          :
          <>       
            <div className={styles.navContainer}>
              <div className={styles.navLeft}>
                <li className={styles.nav}>
                  <NavLink className="link" to="/home">Home</NavLink>
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
                <li className={styles.nav}>
                  <NavLink className="link" to="/project-form">Create a Project</NavLink>
                </li>
              </div>
              <div className={styles.navRight}>
                <li className={styles.nav}><NavLink className="link" to="/signup">Sign Up</NavLink></li>
                <li className={styles.nav}><NavLink className="link" to="/login">Login</NavLink></li>
              </div>
            </div>
          </>
      }
    </div>
  );
}

