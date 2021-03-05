/* eslint-disable max-len */
import React, { Component } from 'react';
import Kevin from './images/andrew_b.png';
import Katie from './images/';
import Sydney from './images/';
import Richard from './images/';

export default class AboutUs extends Component {
  render() {
    return (
      <div className="about-us-content">

        {/* -------------------------------------------------------- */}

        <div>
          <img className="profile-pic" src={Katie} type="image" alt="Katie" />
          <div >

            <h2>Katie</h2>
            <p className="about-text">
                  Hi! I'm Katie. I eat berries for breakfast.             
            </p>
          </div>
        </div>

        {/* -------------------------------------------------------- */}

        <div>
          <img className="profile-pic" src={Kevin} type="image" alt="Kevin" />
          <div>

            <h2>Kevin</h2>
            <p className="about-text">
                Hi! My name is Ferrari!
            </p>
          </div>
        </div>

        {/* -------------------------------------------------------- */}

        <div>
          <img className="profile-pic" src={Sydney} type="image" alt="Sydney" />
          <div>

            <h2>Sydney</h2>
            <p className="about-text">
                Hi! My name is Sydney, I have eleven animals that sleep in my bed. None of them are cats, dogs, bunnies, ferrets, horses, rodents, reptiles or things that are cute and smell good. 
            </p>
          </div>
        </div>

        {/* -------------------------------------------------------- */}

        <div>
          <img className="profile-pic" src={Richard} type="image" alt="Richard and his cat" />
          <div>

            <h2>Richard</h2>
            <p className="about-text">
                Hi! My Name is Richard. In the future time is backwards! 
            </p>
          </div>
        </div>

        {/* -------------------------------------------------------- */}
      </div>

    );
  }
}
