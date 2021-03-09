/* eslint-disable max-len */
import React from 'react';
import styles from './AboutUs.css';
import kt from './aboutAssets/kt.jpg'
import kevin from './aboutAssets/kevin.png'
import rird from './aboutAssets/rird.png'
import sydney from './aboutAssets/sydney.png'
import github from './aboutAssets/github.png'


export default function AboutUs() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.personContainer}>
        
        <div className={styles.picContainer}>
        <img className={styles.ktImage} src={rird} />
        <h2>Richard</h2>
        <span>Hi! My Name is Richard. In the future time is backwards!</span>
        </div>
      </div>

      <div className={styles.personContainer}>
        
        <div className={styles.picContainer}>
       
        <img className={styles.ktImage} src={kt} />
        <h2>Kt</h2>
        <span>Hi! My name is kt!I am tall!!!!!!WOOOOO!!!</span>
        </div>
      </div>
      <div className={styles.personContainer}>
        
        <div className={styles.picContainer}>
        <img className={styles.ktImage} src={kevin} />
        <h2>Kevin</h2>
        <span>Hi! My name is Ferrari!I am Ferrari!</span>
        </div>
      </div>
      <div className={styles.personContainer}>

        <div className={styles.picContainer}>
        <img className={styles.ktImage} src={sydney} />
        <h2>Sydney</h2>
        <span>Hi! My name is Sydney! I am not tall!</span> 
        </div>
      </div>
    </div>

  );
}


