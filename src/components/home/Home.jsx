/* eslint-disable max-len */
import React, { Component } from 'react';
import styles from './Home.css';
import para from './homeAssets/parasite.jpg';
import hunt from './homeAssets/hunt.jpg';
import BackgroundVideo from '../video/Backgroundvideo';
import pog from './homeAssets/pog.png';
 
const Home = () => {
  return (
    <>
      <section>   
        <div>
          <BackgroundVideo/>
        </div>
      </section>
    
      <section className={styles.featureSection}>
        <h1> <hr/>FEATURED FILMS<hr/></h1>

        <div className={styles.featImageContainer}>
          <img className={styles.featImage} src={pog}/>
        </div>

        <div className={styles.featureTextContainer}>
          <h2 className={styles.movieTitle}>PHOENIX, OREGON</h2>
          <h3>Gary Lundgren</h3>
       
          <p className={styles.descriptionParagraph}>
        Two friends, a graphic novelist and a chef, seize an unlikely opportunity to reinvent their lives, quitting their jobs to restore an old bowling alley and serve the “world's greatest pizza. 
          </p>

        </div>
      </section>
      <hr/>
      <section>
        <div className={styles.featImageContainer}>
          <img className={styles.featImage2} src={hunt}/>
        </div>

        <div className={styles.featureTextContainer}>
          <h2 className={styles.movieTitle}>HUNT FOR THE WILDERPEOPLE</h2>
          <h3>Taika Waititi</h3>
       
          <p className={styles.descriptionParagraph}>
        A national manhunt is ordered for a rebellious kid and his foster uncle who go missing in the wild New Zealand bush.
          </p>
 
        </div>
      </section>
    <hr/>
      <section className={styles.subFeatArticles}>
        <article>
          <img className={styles.subFeatImage3} src={para}/>
          <h2 className={styles.movieTitle}>PARASITE</h2>
          <h3>Bong Joon Ho</h3>
          <p>Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.</p>
        </article>
      </section>
    </>
  );
};
export default Home;
