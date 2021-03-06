/* eslint-disable max-len */
import React, { Component } from 'react';
import styles from './Home.css';
import para from './homeAssets/parasite.jpg';
import hunt from './homeAssets/hunt.jpg';

const Home = () => {
  return (
    <>
      <section>    
        <div className={styles.homeTitle}>
          <h1> WELCOME TO THE FILM INDEPENDENT </h1>
        </div>
        <p>skd djkushfslaj dbadjf hlkdash fkasdhjksa asjas;dkf ;adas dfs  sd h;asd lk jl;kf;SDHf;sd;idfn;oad; ;ofnf; dso fasd; fa;ousd  adhs;oudsgado</p>
      </section>
  
      <section className={styles.featureSection}>
        <div className={styles.featImageContainer}>
          <img className={styles.featImage} src={hunt}/>
        </div>

        <div className={styles.featureTextContainer}>
          <h1>NAME OF FEAT FILM</h1>
          <h2>SUBTITLE</h2>
          
          <p className={styles.descriptionParagraph}>
            Description
          </p>

        </div>
      </section>

      <section className={styles.subFeatArticles}>
        <article>
          <img className={styles.subFeatImage} src={para}/>
          <h2>Title of first sub feat film</h2>
          <h3>Subtitle</h3>
          <p>description</p>
        </article>
      </section>
    </>
  );
};
export default Home;
