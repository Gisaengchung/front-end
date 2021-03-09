/* eslint-disable max-len */
import React from 'react';
import styles from './AboutUs.css';
import kt from './aboutAssets/kt.jpg'
import kevin from './aboutAssets/kevin.png'
import rird from './aboutAssets/rird.png'
import sydney from './aboutAssets/sydney.png'


export default function AboutUs() {
  return (
    <div className={styles.aboutContainer}>

      {/* -------------------------------------------------------- */}

      <div className={styles.personContainer}>
        
        <div className={styles.picContainer}>
        <img className={styles.ktImage} src={kt} />
        </div>
        
        <div className={styles.textContainer}>
          <h3>Kt</h3>
          <p className="about-text">
                Hi! My name is kt!
          </p>
        </div>

      </div>

      {/* -------------------------------------------------------- */}

      <div className={styles.personContainer}>
        
        <div className={styles.picContainer}>
        <img className={styles.ktImage} src={kevin} />
        </div>
        
        <div className={styles.textContainer}>
          <h2>Kevin</h2>
          <p className="about-text">
                Hi! My name is Ferrari!
          </p>
        </div>

      </div>

      {/* -------------------------------------------------------- */}

      <div className={styles.personContainer}>

        <div className={styles.picContainer}>
        <img className={styles.ktImage} src={sydney} />
        </div>
        
        <div className={styles.textContainer}>
          <h2>Sydney</h2>
          <p className="about-text">
                Hi! My name is Sydney, I have eleven animals that sleep in my bed. None of them are cats, dogs, bunnies, ferrets, horses, rodents, reptiles or things that are cute and smell good. 
          </p>
        </div>

      </div>

      {/* -------------------------------------------------------- */}

      <div className={styles.personContainer}>
        
        <div className={styles.picContainer}>
        <img className={styles.ktImage} src={rird} />
        </div>

        <div className={styles.textContainer}>
          <h2>Richard</h2>
          <p className="about-text">
                Hi! My Name is Richard. In the future time is backwards! 
          </p>     
        </div>
 
      </div>

      {/* -------------------------------------------------------- */}
    </div>

  );
}


