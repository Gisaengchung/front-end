import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useAuthError } from '../state/AuthUserProvider';
import { useHistory } from 'react-router-dom';

const AuthForm = ({ authFn }) => {
  const history = useHistory();
  const error = useAuthError();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFName] = useState('');
  const [lastName, setLName] = useState('');
  const [userCity, setCity] = useState('');
  const [userState, setUserState] = useState('');



  const handleSubmit = event => {
    event.preventDefault();

    // dispatching to backend
    authFn({ email, password, firstName, lastName, userState, userCity })
      // returns user
      .then((user) =>  {
        // dispatching to global state using reducer
 
        history.push('/user-detail');
      }); 
  };

  return (
    <>
      <h2>Sign Up</h2>
      {error && <p>{error.message}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={({ target }) => setEmail(target.value)} />

        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={({ target }) => setPassword(target.value)} />

        <input
          type="firstName"
          value={firstName}
          placeholder="FirstName"
          onChange={({ target }) => setFName(target.value)} />

        <input
          type="lastName"
          value={lastName}
          placeholder="LastName"
          onChange={({ target }) => setLName(target.value)} />

        <input
          className="cityInput"
          city="userCity"
          maxLength="30"
          placeholder="City you from foo..."
          onChange={({ target }) => setCity(target.value)}
          value={userCity} />

        <input
          className="userState"
          city="userState"
          placeholder="State you noodle..."
          maxLength="30"
          onChange={({ target }) => setUserState(target.value)}
          value={userState} />     

        <button>Sign Up</button>
      </form>
    </>
  );
};

AuthForm.propTypes = {
  authFn: PropTypes.func.isRequired
};

export default AuthForm;
