/* eslint-disable max-len */

import React from 'react';
import classes from './BackgroundVideo.module.css';
 
const BackgroundVideo = () => {
  const videoSource = 'https://media.giphy.com/media/6248YlVqQ7Fg9PXyzr/giphy.mp4';
  return (
    <>
      <div className={classes.VideoContainer} >
        <video autoPlay="autoplay" loop="loop" muted className={classes.Video} >
          <source src={videoSource} type="video/mp4" />
               Your browser does not support the video tag.
        </video>
      </div>

      <div className={classes.VideoContainer} >
        <div className={classes.Content}>
          <div className={classes.SubContent} >
            <h1 className={classes.Mainer}>FILM INDIE</h1>
            <h3 className={classes.Subber}>THE Independent Film Platform</h3>
            <div className={classes.Descriptor}>FUND, FILM, MARKET, and SHOWCASE your film all in one place.</div>
          </div>
        </div>
      </div>
    </>
  );
};
 
export default BackgroundVideo;

