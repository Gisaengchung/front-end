/* eslint-disable max-len */
import React, { Component } from 'react';
import request from 'superagent';
import { NavLink } from 'react-router-dom';

export default class Login extends Component {
    state = {
      email: '',
      password: '',
      loading: false,
      err: null,
    }

    // ----------------------------------------------------------------------------------------

    handleSubmit = async(e) => {
      e.preventDefault();
      this.setState({ loading: true });
      try {
        const user = await request
          .post('https://fiin-dev.herokuapp.com/api/v1/auth/signin')
          .send(this.state);
        
        this.setState({ loading: false });
        this.props.setTokenAndName(user.body.email,
          user.body.token);
        this.props.history.push('/userProfile');
      }
      catch(err) {
        this.setState({ err: 'ERROR, Please enter a valid EMAIL' });
        this.setState({ loading: false });
      }

    }

    // ----------------------------------------------------------------------------------------

    render() {
      return (
        <div>

          {/* ----------------------------------------------------------------------- */}

          <div>
            <div>

              <div><NavLink to="/signup">SignUp</NavLink></div>
              <div><NavLink to="/login">Login</NavLink></div>

              <div>
                <form onSubmit={this.handleSubmit}>
                  <h2>Login</h2>
                            Email:
                  <label>
                    {this.state.err && <div>
                      {this.state.err}
                    </div>}
                    <input
                      value={this.state.email}
                      onChange={(e) => this.setState({ email: e.target.value })}
                    />
                  </label>
                            Password
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
                      : <button className="button-sign">Submit</button>
                  }
                </form>
              </div>
            </div>
          </div>
          {/* -------------------------------------------------------------------------------------- */}

        </div>

      );
    }
}
