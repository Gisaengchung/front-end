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
        <img className={styles.ktImage} src={rird} />
        <h2 className={styles.aboutNames}>Richard</h2>
        <span>Hi! I am a software engineer born in South Korea and raised in Vermont. I used to live in a tiny house school bus and would watch loads of movies with my wife who built the bus. I also served in the military and on deployment watched hundreds of movies. Right now my favorite movie is ‘The King’.</span>
        <br/>
        <a href="https://github.com/Richard-Hillman">
          <img className={styles.contactImage} src={github} />
        </a>
        <a href="https://www.linkedin.com/in/richard-hillman/">
          <img className={styles.contactImage} src={linkedinlogo} />
        </a>
      </div>
      <div className={styles.personContainer}>
        <img className={styles.ktImage} src={kt} />
        <h2 className={styles.aboutNames}>Katie</h2>
        <span>Hi! My name is Katie and I&apos;m a Fullstack Software Engineer. In my free time I create and produce small films!</span>
        <br/>
        <a href="https://github.com/katiejonesyo">
          <img className={styles.contactImage} src={github} />
        </a>
        <a href="https://www.linkedin.com/in/katiejonesyo/">
          <img className={styles.contactImage} src={linkedinlogo} />
        </a>
      </div>
      <div className={styles.personContainer}>
        <img className={styles.ktImage} src={kevin} />
        <h2 className={styles.aboutNames}>Kevin</h2>
        <span>My name is Kevin and I am a full stack software engineer. I recently moved to Portland and have previously lived in New York, Texas, and Michigan. My hobbies include rock climbing, 3D printing, and board games.</span>
        <br/>
        <a href="https://github.com/kevinfiero">
          <img className={styles.contactImage} src={github} />
        </a>
        <a href="https://www.linkedin.com/in/kevinfiero/">
          <img className={styles.contactImage} src={linkedinlogo} />
        </a>
      </div>
      <div className={styles.personContainer}>
        <img className={styles.ktImage} src={sydney} />
        <h2 className={styles.aboutNames}>Sydney</h2>
        <span className={styles.sydneySpan}>My name is Sydney and I&apos;m a HUGE film nerd. I love watching films and award shows. I regularly get lost in Wikipedia rabbit holes about directors and actors. My favorite nonprofit is the <a href="https://hollywoodtheatre.org/">Hollywood Theatre</a>, which also happens to be one of the best independent theatres in the world! I&apos;m also a fullstack software engineer with a passion for clean code and design-driven development.</span> 
        <br/>
        <a href="https://github.com/scjam">
          <img className={styles.contactImage} src={github} />
        </a>
        <a href="https://www.linkedin.com/in/sydjames/">
          <img className={styles.contactImage} src={linkedinlogo} />
        </a>
      </div>
    </div>
  );
}
