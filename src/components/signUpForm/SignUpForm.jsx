/* eslint-disable max-len */
import React, { Component } from 'react';
import request from 'superagent';


export default class SignUpForm extends Component {

  // -----------------------------------------------------------------------------

    state = {
      firstName: '',
      lastName: '',
      email: '',
      passwordHash: '',
      paymentHandle: '',
      tagline: '',
      userRole: '',
      userCity: '',
      loading: false,
      err: null,
    }

    // ----------------------------------------------------------------------------------

    handleSubmitSignUp = async(e) => {
      e.preventDefault();

      this.setState({ loading: true });
      const user = await request
        .post('https://fiin-dev.herokuapp.com/api/v1/auth/signup')
        .send(this.state);

      this.setState({ loading: false });

      this.props.setTokenAndName(user.body.email,
        user.body.token);
      this.props.history.push('/userDetail');
    }

    // -----------------------------------------------------------------------------------

    handleSubmitLogin = async(e) => {
      e.preventDefault();
      this.setState({ loading: true });
      try {
        const user = await request
          .post('https://fiin-dev.herokuapp.com/api/v1/auth/signin')
          .send(this.state);


        this.setState({ loading: false });

        this.props.changerTN(user.body.email,
          user.body.token);
        this.props.history.push('/userdetail');
      }
      catch(err) {
        this.setState({ err: 'ERROR, Please enter a valid EMAIL' });
      }

    }

    // -------------------------------------------------------------------------------------

    render() {
      return (
        <section className="background">

          <div className="main-container">

            <div className="container center">

              <div>
                <form onSubmit={this.handleSubmitSignUp}>
                  <h2>Sign Up</h2>

                  <label>First Name:
                    <input
                      className="nameinput"
                      name="firstName"
                      maxLength="30"
                      onChange={(e) => this.setState({ firstName: e.target.value })}
                      value={this.state.firstName}
                    />
                  </label>

                  <label>Last Name:
                    <input
                      className="nameinput"
                      name="lastName"
                      maxLength="30"
                      onChange={(e) => this.setState({ lastName: e.target.value })}
                      value={this.state.lastName}
                    />
                  </label>
                  <br/>
                            Email:
                  <label>
                    <input
                      value={this.state.email}
                      type="email"
                      required
                      onChange={(e) => this.setState({ email: e.target.value })}
                    />
                  </label>
                            Password:
                  <label>
                    <input
                      type="password"

                      value={this.state.passwordHash}
                      onChange={(e) => this.setState({ passwordHash: e.target.value })}
                    />
                  </label>

                  <br/>
                  <p/>
                  <label>Venmo Username:
                    <input
                      className="venmoinput"
                      name="paymentHandle"
                      maxLength="50"
                      onChange={(e) => this.setState({  paymentHandle: e.target.value })}
                      value={this.state.paymentHandle}
                    />
                  </label>

                  <label>Tagline:
                    <input
                      className="tagline"
                      name="tagline"
                      maxLength="120"
                      onChange={(e) => this.setState({ tagline: e.target.value })}
                      value={this.state.tagline}
                    />

                  </label>
                  <label>Role:
                    <input
                      className="roleinput"
                      about="userRole"
                      maxLength="500"
                      onChange={(e) => this.setState({ userRole: e.target.value })}
                      value={this.state.userRole}
                    />
                  </label>
                  <br/>
                  <p/>
                  <label>City:
                    <input
                      className="cityinput"
                      city="userCity"
                      maxLength="30"
                      onChange={(e) => this.setState({ userCity: e.target.value })}
                      value={this.state.userCity}
                    />
                      
                  </label>
                  
                  <label>State:
                    <input
                      className="stateInput"
                      city="userState"
                      maxLength="30"
                      onChange={(e) => this.setState({ userState: e.target.value })}
                      value={this.state.userState}
                    />
                        
                  </label>
                     
                   
                  {
                    this.state.loading
                      ? 'spins'
                      : <button>Submit</button>
                  }
                </form>
              </div>
            </div>
          </div>
        </section>
      );
    }
}


