/* eslint-disable max-len */
import React, { Component } from 'react';
import styles from './Home.css';
import para from './homeAssets/parasite.jpg';
import hunt from './homeAssets/hunt.jpg';
import BackgroundVideo from '../video/Backgroundvideo'

const Home = () => {
  return (
    <>
      <section>    
        <div>
        <h1>
        <BackgroundVideo/>
        </h1>
        </div>
      </section>
      
      <section className={styles.featureSection}>
        <h1> FEATURED FILMS</h1>
        <div className={styles.featImageContainer}>
          <img className={styles.featImage} src={hunt}/>
        </div>

        <div className={styles.featureTextContainer}>
          <h1>HUNT FOR THE WILDERPEOPLE</h1>
          <h2>Taika Waititi</h2>
          
          <p className={styles.descriptionParagraph}>
          A national manhunt is ordered for a rebellious kid and his foster uncle who go missing in the wild New Zealand bush.
          </p>

        </div>
      </section>

      <section className={styles.subFeatArticles}>
        <article>
          <img className={styles.subFeatImage} src={para}/>
          <h1>PARASITE</h1>
          <h2>Bong Joon Ho</h2>
          <p>Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.</p>
        </article>
      </section>
    </>
  );
};
export default Home;
