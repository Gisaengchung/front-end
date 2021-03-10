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
            <div className={styles.separate}>
              <span>
                <li className={styles.snake}>
                  <NavLink className="link" to="/">Home</NavLink>
                </li>
                <li className={styles.snake}>
                  <NavLink className="link" to="/info">What Is FIIN?</NavLink>
                </li>
              </span>
            </div>

            {/* -------------------------------------------- */}

            <div className={styles.separate}>
              <span>
                <li className={styles.snake}>
                  <NavLink className="link" to="/about-us">About Us</NavLink>
                </li>
                <li className={styles.snake}>
                  <NavLink className="link" to="/users-list">Find Creators</NavLink>
                </li>
              </span>
            </div>

            {/* -------------------------------------------- */}

            <div  className={styles.separate}>
              <span>
                <li className={styles.snake}>
                  <NavLink className="link" to="/project-list">Discover Films</NavLink>
                </li>
                <li className={styles.snake}>
                  <NavLink className="link" to="/project-form">Create a Film</NavLink>
                </li>
              </span>
            </div>

          </ul>

        </nav>
      </div>

    </div>
  );
}
