import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useAuthError } from '../state/AuthUserProvider';
import { useHistory } from 'react-router-dom';
import styles from './AuthForm.css';

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
      .then(() => {
        history.push('/');
      });
      
  };

  return (
    <div className={styles.signUpPage}>
      <h2>Sign Up</h2>
      {error && <p>{error.message}</p>}
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={({ target }) => setEmail(target.value)}
          required />
        <input
          type="password"
          value={password}
          minLength="8"
          placeholder="Password"
          onChange={({ target }) => setPassword(target.value)} 
          required />
        <input
          type="firstName"
          value={firstName}
          placeholder="First Name"
          onChange={({ target }) => setFName(target.value)} 
          required />
        <input
          type="lastName"
          value={lastName}
          placeholder="Last Name"
          onChange={({ target }) => setLName(target.value)} 
          required />
        <input
          className="cityInput"
          city="userCity"
          maxLength="30"
          placeholder="City"
          onChange={({ target }) => setCity(target.value)}
          value={userCity} 
          required />
        <input
          className="userState"
          city="userState"
          placeholder="State"
          maxLength="30"
          onChange={({ target }) => setUserState(target.value)}
          value={userState} 
          required/>     
        <button>Sign Up</button>
      </form>
    </div>
  );
};

AuthForm.propTypes = {
  authFn: PropTypes.func.isRequired
};

export default AuthForm;
