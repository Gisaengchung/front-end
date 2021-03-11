/* eslint-disable max-len */
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Footer.css';

// -----------------------------------------

export default function Footer() {

  // ---------------------------------------

  return (
    <div>
      <nav className={styles.navFooter}>

        <ul className={styles.navList}>

          {/* -------------------------------------------- */}
      
          <li className={styles.snake}>
            <NavLink className="link" to="/">Home</NavLink>
          </li>

    
          {/* -------------------------------------------- */}

          <li className={styles.snake}>
            <NavLink className="link" to="/about-us">About Us</NavLink>
          </li>


          {/* -------------------------------------------- */}

          <li className={styles.snake}>
            <NavLink className="link" to="/info">What Is FIIN?</NavLink>
          </li>

        </ul>

      </nav>


    </div>
  );
}
