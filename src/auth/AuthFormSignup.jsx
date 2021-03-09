import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useAuthError } from '../state/AuthUserProvider';
import { useHistory } from 'react-router-dom';
import styles from '../styles/form.css';

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
    authFn({ email, password, firstName, lastName, userState, userCity })
      .then(() => {
        history.push('/');
      });
      
  };

  return (
    <div className={styles.displayPage}>
      {error && <p>{error.message}</p>}
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <h2 className={styles.formHeader}>Sign Up</h2>
        <div className={styles.field}>
          <input
            id="email"
            className={styles.floatingInput}
            type="email"
            value={email}
            placeholder="Email"
            onChange={({ target }) => setEmail(target.value)}
            required />
          <label 
            className={styles.floatingLabel} data-content="Email"
            htmlFor="email">
            <span className={styles.hiddenVisually}>Email</span>
          </label>
        </div>
        <div className={styles.field}>
          <input
            id="password"
            className={styles.floatingInput}
            type="password"
            value={password}
            minLength="8"
            placeholder="Password"
            onChange={({ target }) => setPassword(target.value)} 
            required />
          <label
            className={styles.floatingLabel} data-content="Password"
            htmlFor="password">
            <span className={styles.hiddenVisually}>Password</span>
          </label>
        </div>
        <div className={styles.field}>
          <input
            id="firstName"
            className={styles.floatingInput}
            type="text"
            value={firstName}
            placeholder="First Name"
            onChange={({ target }) => setFName(target.value)} 
            required />
          <label
            className={styles.floatingLabel} data-content="First Name"
            htmlFor="firstName">
            <span className={styles.hiddenVisually}>First Name</span>
          </label>        
        </div>
        <div className={styles.field}>
          <input
            id="lastName"
            className={styles.floatingInput}
            type="text"
            value={lastName}
            placeholder="Last Name"
            onChange={({ target }) => setLName(target.value)} 
            required />
          <label
            className={styles.floatingLabel} data-content="Last Name"
            htmlFor="lastName">
            <span className={styles.hiddenVisually}>Last Name</span>
          </label>        
        </div>
        <div className={styles.field}>
          <input
            id="cityInput"
            className={styles.floatingInput}
            type="text"
            maxLength="30"
            placeholder="City"
            onChange={({ target }) => setCity(target.value)}
            value={userCity} 
            required />
          <label
            className={styles.floatingLabel} data-content="City"
            htmlFor="cityInput">
            <span className={styles.hiddenVisually}>City</span>
          </label>        
        </div>
        <div className={styles.field}>
          <input
            id="stateInput"
            className={styles.floatingInput}
            state="userState"
            placeholder="State"
            maxLength="30"
            onChange={({ target }) => setUserState(target.value)}
            value={userState} 
            required/>     
          <label
            className={styles.floatingLabel} data-content="State"
            htmlFor="stateInput">
            <span className={styles.hiddenVisually}>State</span>
          </label> 
        </div>
        <button>Sign Up</button>
      </form>
    </div>
  );
};

AuthForm.propTypes = {
  authFn: PropTypes.func.isRequired
};

export default AuthForm;
