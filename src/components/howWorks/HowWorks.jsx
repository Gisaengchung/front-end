/* eslint-disable max-len */
import React, { Component } from 'react';
import styles from './HowWorks.css';
import filmPerfect from './howWorksAssets/filmPerfect.jpg';

class AboutUs extends Component {
  render() {
    return (
      <div className={styles.howItWorks} >
        <div className={styles.filmPerfect}>
          <img className={styles.filmPerfect} src={filmPerfect}/>
        </div>
        <h1> How it all works!</h1>
        <section>
          <p>
            Film Indie is a place for film industry professionals to network as well as find and support projects they may wish to be a part of. Additionally we want to bring about a platform that keeps a film crews vision and control in their own hands. We want to do this by providing a place for Independent film groups to crowd fund, market, sell and stream their movies. This gives film makers the opportunity to present and interact with their audience in a whole new format. Film makers can share director lead discussions, share their scripts,and actively recruit actors and cinematographers. This is a place to allow for more accessibility and opportunity for independent film makers to succeed.      
          </p>
        </section>
        <div className={styles.ThreeContainers} >
          <div className={styles.pgraph}> 
            <h2>Step 1:</h2>
            <p>Click sign up in the top right corner of the site to fill out your profile information. If you are a director or just a simple movie goer be sure to add your role to our community then follow the prompts for each section.
            </p> 
          </div>
          <div className={styles.pgraph}>
            <h2>Step 2:</h2>
            <p>If you are a director or a creator click on create a new project also located in the upper right hand corner. This will take you to a page where you can fill out a series of descriptors and provide media to your personal project that will be posted to your profile and in our searchable index of active campaigns.
            </p>
          </div>
          <div className={styles.pgraph}>
            <h2>Step 3:</h2>
            <p>After you have created your campaign, it&#39;s time to get to work. Continue to build your campaign by keeping your media up to date, search other users who might be able to help you carry out your film, or plan and host live or recorded meetings to promote your film and your idea. Use your custom project URL as an active virtual business card to pass out to anyone you see fit. The possibilities are endless and we here at FiIn want to make sure you get the most out of your project and our platform.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
