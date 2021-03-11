/* eslint-disable max-len */
import React from 'react';
import styles from './Home.css';
import para from './homeAssets/parasite.jpg';
import hunt from './homeAssets/hunt.jpg';
import BackgroundVideo from '../video/Backgroundvideo';
import pog from './homeAssets/pog.png';
import gisaengchung from './homeAssets/Gisaengchung.jpg';
import topBanner from './homeAssets/topBanner.jpg';

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

        <section>
          <img className={styles.topBanner} src={topBanner}/>
        </section>

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
      <section className={styles.bottomMargin}>
        {/* --------------------------------------------------- */}
        {/* --------------------------------------------------- */}
 
        <h1><hr/>FEATURED FILM<hr/></h1>

        <section className={styles.allSections}>

          <article className={styles.articleFilm}>
            <div className={styles.featImageContainer}>
              <img className={styles.featImage} src={pog}/>
            </div>
            
            <div className={styles.featureTextContainer}>
              <h2 className={styles.movieTitle}>PHOENIX, OREGON</h2>
              <h3>Director: Gary Lundgren</h3>
              <p className={styles.descriptionParagraph}>108 min, R</p>
              <p>A funny and bittersweet story about two friends, a graphic novelist and a chef, who seize an unlikely opportunity to reinvest their lives, quitting their service industry jobs to restore an old bowling center and serve the "world's greatest pizza."</p> 
              <p>Stars James Le Gros (Drugstore Cowboy, Living in Oblivion), Lisa Edelstein (Girlfriends' Guide to Divorce, House), Jesse Borrego (Fame, Blood In Blood Out), Reynaldo Gallegos (Triple Frontier, American Sniper), Diedrich Bader (Napoleon Dynamite, Office Space, Veep), and Kevin Corrigan (The Departed, Pineapple Express, True Romance).</p>
              <p>Produced by Joma Films with Pied Piper Productions, Lui-G Films and Sunset Dynamics. </p>
            </div>
          </article>

          <section className={styles.advImageOver}>
            <div className={styles.advImageMid}>
              <img className={styles.advImageUnder} src={gisaengchung}/>
            </div>
          </section>

        </section>

        {/* --------------------------------------------------- */}
        <h1><hr/>NEW ARRIVALS<hr/></h1>
        {/* --------------------------------------------------- */}

        <section className={styles.allSections}>

          <article className={styles.articleFilm}>
            <div className={styles.featImageContainer}>
              <img className={styles.featImage} src={hunt}/>
            </div>
            <div className={styles.featureTextContainer}>
              <h2 className={styles.movieTitle}>HUNT FOR THE WILDERPEOPLE</h2>
              <h3>Director: Taika Waititi</h3>
              <p className={styles.descriptionParagraph}>101 min, R</p>
              <p>Raised on hip-hop and foster care, defiant city kid Ricky gets a fresh start in the New Zealand countryside. He quickly finds himself at home with his new foster family: the loving Aunt Bella, the cantankerous Uncle Hec, and dog Tupac. When a tragedy strikes that threatens to ship Ricky to another home, both he and Hec go on the run in the bush. As a national manhunt ensues, the newly branded outlaws must face their options: go out in a blaze of glory or overcome their differences and survive as a family.</p> 
              <p>Equal parts road comedy and coming-of-age drama, director Taika Waititi masterfully weaves lively humor with emotionally honest performances by Sam Neill and Julian Dennison. Never short on laughs, this touching story reminds us about the journey that growing up is (at any age) and those who help us along the way.</p>
              <p>Sam Neill, Julian Dennison, Rima Te Wiata . </p>
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
