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
        <nav className={styles.navFooter}>

          <div className={styles.logo}>FIIN</div>

          <ul className={styles.navList}>

            {/* -------------------------------------------- */}
      
            <span>
              <li className={styles.snake}>
                <NavLink className="link" to="/">Home</NavLink>
              </li>
            </span>
    
            {/* -------------------------------------------- */}

            <span>
              <li className={styles.snake}>
                <NavLink className="link" to="/about-us">About Us</NavLink>
              </li>
            </span>

            {/* -------------------------------------------- */}

            <span>
              <li className={styles.snake}>
                <NavLink className="link" to="/info">What Is FIIN?</NavLink>
              </li>
            </span>

          </ul>

        </nav>
      </div>

    </div>
  );
}
