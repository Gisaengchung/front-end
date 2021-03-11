/* eslint-disable max-len */
import React from 'react';
import styles from './Home.css';
import para from './homeAssets/parasite.jpg';
import hunt from './homeAssets/hunt.jpg';
import pog from './homeAssets/pog.png';
import gisaengchung from './homeAssets/Gisaengchung.jpg';
import topBanner from './homeAssets/topBanner.jpg';
import meetPic from './homeAssets/meetPic.jpg';
import discoverPic from './homeAssets/discoverPic.jpg';
import createPic from './homeAssets/createPic.jpg';
import topFilm from './homeAssets/topFilm.mp4';


const Home = () => {
  return (
    <div className={styles.displayPage}>
      <section className={styles.VideoContainer}>   
        <div>
          <video autoPlay="autoplay" loop="loop" muted className={styles.Video}>
            <source src={topFilm} type="video/mp4" />
               Your browser does not support the video tag.
          </video>

          <hr/>

          <div className={styles.VideoText} >
            <div className={styles.Content}>
              <div className={styles.SubContent} >
                <h1 className={styles.Mainer}>FILM INDIE</h1>
                <h3 className={styles.Subber}>THE Independent Film Platform</h3>
                <div className={styles.Descriptor}>FUND, FILM, MARKET, and SHOWCASE your film all in one place.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
      {/* --------------------------------------------------- */}

      <section className={styles.Begin}>

        <section>
          <img className={styles.topBanner} src={topBanner}/>
        </section>

        {/* --------------------------------------------------- */}

        <div className={styles.inBegin}> 

          <section className={styles.ThreeThings}>
      
            <a href="/users-list"><div className={styles.smallerBox}><h2>MEET</h2>
              <p>Meet new people in the industry to work with.</p>
              <img className={styles.meetdiscovercreate} src={meetPic}/>
            </div></a>

            <a href="/project-form"><div className={styles.smallerBox}><h2>CREATE</h2>
              <p>Click here to create a film!</p>
              <img className={styles.meetdiscovercreate} src={createPic}/>
            </div></a>

            <a href="/project-list"><div className={styles.smallerBox}><h2>DISCOVER</h2>
              <p>Find films underway and support their project!</p> 
              <img className={styles.meetdiscovercreate} src={discoverPic}/>
            </div></a>

          </section>
          
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

    </div>
  );
};
export default Home;
