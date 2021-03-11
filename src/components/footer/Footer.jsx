/* eslint-disable max-len */
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Footer.css';

// -----------------------------------------

export default function Footer() {

  // ---------------------------------------

  return (
    <div>
      <div>
        <nav className={styles.footerContainer}>
          <ul className={styles.footerList}>
            <li className={styles.footerItem}>
              <NavLink className="link" to="/">Home</NavLink>
            </li>
            <li className={styles.footerItem}>
              <NavLink className="link" to="/about-us">About Us</NavLink>
            </li>
            <li className={styles.footerItem}>
              <NavLink className="link" to="/info">What Is FIIN?</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
