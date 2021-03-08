import React from 'react';
import classes from './BackgroundVideo.module.css';

const BackgroundVideo = () => {
  const videoSource = 'https://media.giphy.com/media/YWjV3C6KNmrSH3snmy/giphy.mp4';
  return (
    <div className={classes.Container} >
      <video autoPlay="autoplay" loop="loop" muted className={classes.Video} >
        <source src={videoSource} type="video/mp4" />
                Your browser does not support the video tag.
      </video>

      <div className={classes.Content}>
        <div className={classes.SubContent} >
          <h1>FILM 
            <br/>
                    INDEPENDENT
          </h1>
          <h2>CREATE AND CONNECT</h2>
        </div>
      </div>
    </div>
  );
};

export default BackgroundVideo;

