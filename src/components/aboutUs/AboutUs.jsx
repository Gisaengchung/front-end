/* eslint-disable max-len */
import React from 'react';
import styles from './AboutUs.css';
import kt from './aboutAssets/kt.jpg';
import kevin from './aboutAssets/kevin.png';
import rird from './aboutAssets/rird.png';
import sydney from './aboutAssets/sydney.png';
import github from './aboutAssets/github.png';
import linkedinlogo from './aboutAssets/linkedinlogo.png';


export default function AboutUs() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.personContainer}>
        
        <div className={styles.picContainer}>
          <img className={styles.ktImage} src={rird} />
          <h2 className={styles.aboutNames}>Richard</h2>
          <span>Hi! My Name is Richard. In the future time is backwards!</span>
          <p/>
          <a href="https://github.com/Richard-Hillman">
            <img className={styles.contactImage} src={github} />
          </a>
          <a href="https://www.linkedin.com/in/richard-hillman/">
            <img className={styles.contactImage} src={linkedinlogo} />
          </a>
        </div>
      </div>

      <div className={styles.personContainer}>
        
        <div className={styles.picContainer}>
       
          <img className={styles.ktImage} src={kt} />
          <h2 className={styles.aboutNames}>Kt</h2>
          <span>Hi! My name is Katie! In my free time I create, direct, and edit fun films! </span>
          <p/>
          <a href="https://github.com/katiejonesyo">
            <img className={styles.contactImage} src={github} />
          </a>
          <a href="https://www.linkedin.com/in/katiejonesyo/">
            <img className={styles.contactImage} src={linkedinlogo} />
          </a>
        </div>
      </div>
      <div className={styles.personContainer}>
        
        <div className={styles.picContainer}>
          <img className={styles.ktImage} src={kevin} />
          <h2 className={styles.aboutNames}>Kevin</h2>
          <span>Hi! My name is Ferrari!I am Ferrari! Vroom vroom cars go fast yea yea yea</span>
          <p/>
          <a href="https://github.com/kevinfiero">
            <img className={styles.contactImage} src={github} />
          </a>
          <a href="https://www.linkedin.com/in/kevinfiero/">
            <img className={styles.contactImage} src={linkedinlogo} />
          </a>
        </div>
      </div>
      <div className={styles.personContainer}>

        <div className={styles.picContainer}>
          <img className={styles.ktImage} src={sydney} />
          <h2 className={styles.aboutNames}>Sydney</h2>
          <span>Hi! My name is Sydney! I am not tall!  I DO NOT DRINK COFFEEEEEEEEEE</span> 
          <p/>
          <a href="https://github.com/scjam">
            <img className={styles.contactImage} src={github} />
          </a>
  
          <a href="https://www.linkedin.com/in/sydjames/">
            <img className={styles.contactImage} src={linkedinlogo} />
          </a>
        </div>
      </div>
    </div>

  );
}


