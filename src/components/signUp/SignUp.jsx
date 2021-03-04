/* eslint-disable max-len */
import React, { Component } from 'react';
import request from 'superagent';
import Navigation from '../navigation/Navigation';

export default class SignUp extends Component {

  // -----------------------------------------------------------------------------

    state = {
      email: '',
      password: '',
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

          <Navigation /> 

          {/* ----------------------------------------------------------------------- */}

          <div className="main-container">

            <div className="container center">

              <div>
                <form onSubmit={this.handleSubmitSignUp}>
                  <h2>Sign Up</h2>
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

                      value={this.state.password}
                      onChange={(e) => this.setState({ password: e.target.value })}
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

            {/* ---------------------------------------------------------------------------------- */}

          </div>
        </section>
      );
    }
}
