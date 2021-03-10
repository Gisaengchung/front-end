/* eslint-disable max-len */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useIsAuthenticated, useLogout, useSession } from '../../state/AuthUserProvider';
import { useHistory } from 'react-router-dom';
import styles from './Navigation.css';

export default function Navigation() {
  const history = useHistory();
  const logOut = useLogout();
  const authentication = useIsAuthenticated();
  const { session }  = useSession() || {};

  const handleLogOut = () => {
    logOut()
      .then(() => history.push('/'));
  };

  const handleUserEdit = () => {
    const userId = session.userId; 
    history.push(`/user-detail/${userId}`);
  };
    
  return (
    <div>
      {
        authentication 
          ?
          <div>
            <nav className={styles.navContainer}>
              <div className={styles.logo}>
                <NavLink className="link" to="/">FIIN</NavLink>
              </div>
              <ul className={styles.navList}>
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
                  <div className="link" onClick={handleUserEdit}>
                    <img alt="" src="https://res.cloudinary.com/gisaengchung/image/upload/v1615315671/default/sa5rhldqbnnpubcjt6d7.png" />
                  </div>
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
              <div className={styles.logo}>
                <NavLink className="link" to="/">FIIN</NavLink>
              </div>
              <ul className={styles.navList}>
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
