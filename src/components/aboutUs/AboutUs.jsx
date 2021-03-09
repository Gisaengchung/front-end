/* eslint-disable max-len */
import React from 'react';
import styles from './AboutUs.css';
import kt from './aboutAssets/kt.jpg'


export default function AboutUs() {
  return (
    <div className={styles.aboutContainer}>

      {/* -------------------------------------------------------- */}

      <div className={styles.personContainer}>

        <div className={styles.picContainer}>
          <img className={styles.ktImage} src={kt} />
         
          <p className={styles.textContainer}>
          <h2>Katie</h2>
          Hi! I'm a Katie. I eat berries for breakfast.             
          </p>
        </div>


      </div>

      {/* -------------------------------------------------------- */}

      <div className={styles.personContainer}>
        
        <div className={styles.picContainer}>
          <img src="https://bit.ly/3kN09pq" type="image" alt="Kevin" />
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
          <img src="https://bit.ly/3kN09pq" type="image" alt="Sydney" />
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
          <img src="https://bit.ly/3kN09pq" type="image" alt="Richard and his cat" />
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


