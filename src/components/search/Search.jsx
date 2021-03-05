import React, { Component } from 'react';

class AboutUs extends Component {

  handleSubmit = {

  }

  handleChange = {

  }

  render() {
    return (
      <div>

        <form onSubmit={handleSubmit}>
          <label>FIND A USER: </label>
          <input type="text" onChange={handleChange}/> 
          <button>submit</button>
        </form>

      </div>
    );
  }
}

export default AboutUs;
