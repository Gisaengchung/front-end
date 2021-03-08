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
                  <NavLink className="link" to="/project-list">Discover Projects</NavLink>
                </span>
                <span className={styles.nav}>
                  <NavLink className="link" to="/project-form">Create a Project</NavLink>
                </span>
              </div>
            
              <div className={styles.navRight}>
                {/* <NavLink className="link" to="/user-detail">User Profile</NavLink> */}
                <span>
                  <button onClick={handleLogOut}>Log out</button>
                </span>

               
              </div>
            </section>
          </>
          // --------------------------------------------------------------------
          :
          <>       
            <div className={styles.navContainer}>
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
                  <NavLink className="link" to="/project-list">Discover Projects</NavLink>
                </span>
                <span className={styles.nav}>
                  <NavLink className="link" to="/project-form">Create a Project</NavLink>
                </span>
              </div>
              <div className={styles.navRight}>
                <span className={styles.nav}><NavLink className="link" to="/signup">Sign Up</NavLink></span>
                <span className={styles.nav}><NavLink className="link" to="/login">Login</NavLink></span>
              </div>
            </div>
          </>
      }
    </div>
  );
}

