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
        <h2>Kt</h2>
        Hi! My name is kt!
        </div>
      </div>
      <div className={styles.personContainer}>
        
        <div className={styles.picContainer}>
        <img className={styles.ktImage} src={kevin} />
        <h2>Kevin</h2>
                Hi! My name is Ferrari!
        </div>
      </div>
      <div className={styles.personContainer}>

        <div className={styles.picContainer}>
        <img className={styles.ktImage} src={sydney} />
        <h2>Sydney</h2>
        Hi! My name is Sydney, I have eleven animals that sleep in my bed. None of them are cats, dogs, bunnies, ferrets, horses, rodents, reptiles or things that are cute and smell good. 
        </div>
      </div>

      <div className={styles.personContainer}>
        
        <div className={styles.picContainer}>
        <img className={styles.ktImage} src={rird} />
        <h2>Richard</h2>
        Hi! My Name is Richard. In the future time is backwards! 
        </div>
      </div>
    </div>

  );
}


