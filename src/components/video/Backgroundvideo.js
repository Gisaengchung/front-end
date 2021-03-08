import React from 'react';
import classes from './BackgroundVideo.module.css';

const BackgroundVideo = () => {
    const videoSource = "https://cdn.filmriot.com/wp-content/uploads/2020/07/film_riot_homepage2_converted2k.mp4"
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
    )
}

export default BackgroundVideo

