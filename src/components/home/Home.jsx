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
    
      {/* --------------------------------------------------- */}

      <section className={styles.Begin}>

        <div className={styles.inBegin}> 
          <h2>Explore, Create, Enjoy</h2>
          <p>
            Welcome to the premier platform for independent creation. Here you will discover both independent films and creators alike. Here at FIIN we want to provide a platform for film industry professionals to both have a clear and dedicated way of introducing an idea and maintaining full control of their vision through and through. For more information about how we operate check out <a href="/info">What is FIIN?</a></p>
          <p>
            We also are encouraging users to sign-up and share what projects they are working on or have worked on. This will provide a social platform for directors, producers, and actors alike to find new talent hidden in the rough.  </p>
        </div>

      </section>

      {/* --------------------------------------------------- */}
      {/* --------------------------------------------------- */}
      <section>
        {/* --------------------------------------------------- */}
        {/* --------------------------------------------------- */}
 
        <h1><hr/>FEATURED FILMS<hr/></h1>

        <section className={styles.allSections}>
        
          <article className={styles.articleFilm}>
            <div className={styles.featImageContainer}>
              <img className={styles.featImage} src={pog}/>
            </div>
            <div className={styles.featureTextContainer}>
              <h2 className={styles.movieTitle}>PHOENIX, OREGON</h2>
              <h3>Director: Gary Lundgren</h3>
              <p className={styles.descriptionParagraph}>
              Two friends, a graphic novelist and a chef, seize an unlikely opportunity to reinvent their lives, quitting their jobs to restore an old bowling alley and serve the world's greatest pizza. 
              </p>
            </div>
          </article>

        </section>

        {/* --------------------------------------------------- */}
        <hr/>
        {/* --------------------------------------------------- */}

        <section className={styles.allSections}>

          <article className={styles.articleFilm}>
            <div className={styles.featImageContainer}>
              <img className={styles.featImage} src={hunt}/>
            </div>
            <div className={styles.featureTextContainer}>
              <h2 className={styles.movieTitle}>HUNT FOR THE WILDERPEOPLE</h2>
              <h3>Director: Taika Waititi</h3>
              <p className={styles.descriptionParagraph}>
              A national manhunt is ordered for a rebellious kid and his foster uncle who go missing in the wild New Zealand bush.
              </p>
            </div>
          </article>

        </section>

        {/* --------------------------------------------------- */}
        <hr/>
        {/* --------------------------------------------------- */}

        <section className={styles.allSections}>

          <article className={styles.articleFilm}>
            <div className={styles.featImageContainer}>
              <img className={styles.featImage} src={para}/>
            </div>
            <div className={styles.featureTextContainer}>
              <h2 className={styles.movieTitle}>PARASITE</h2>
              <h3>Director: Bong Joon Ho</h3>
              <p>Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.</p>
            </div>
          </article>

        </section>

        {/* --------------------------------------------------- */}
        {/* --------------------------------------------------- */}
      </section>
      {/* --------------------------------------------------- */}
      {/* --------------------------------------------------- */}

    </>
  );
};
export default Home;
