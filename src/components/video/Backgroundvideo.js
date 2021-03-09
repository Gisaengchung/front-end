
import React from 'react';
import classes from './BackgroundVideo.module.css';
 
const BackgroundVideo = () => {
 const videoSource = 'https://media.giphy.com/media/6248YlVqQ7Fg9PXyzr/giphy.mp4';
 return (
   <div className={classes.Container} >
     <video autoPlay="autoplay" loop="loop" muted className={classes.Video} >
       <source src={videoSource} type="video/mp4" />
               Your browser does not support the video tag.
     </video>
 
     <div className={classes.Content}>
       <div className={classes.SubContent} >
         <h1>FILM INDEPENDENT</h1>
         <h3>CREATE AND CONNECT</h3>
       </div>
     </div>
   </div>
 );
};
 
export default BackgroundVideo;

