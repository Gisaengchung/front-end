import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useAuthError } from '../state/AuthUserProvider';
import styles from './AuthForm.css';

const AuthForm = ({ authFn }) => {
  const error = useAuthError();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    authFn(email, password);
  };

  return (
    <div className={styles.authPage}>
      {error && <p>{error.message}</p>}
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <h2 className={styles.formHeader}>Login</h2>
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
            placeholder="Password"
            onChange={({ target }) => setPassword(target.value)} 
            required />
          <label
            className={styles.floatingLabel} data-content="Password"
            htmlFor="password">
            <span className={styles.hiddenVisually}>Password</span>
          </label>
        </div>  
        <button>Login</button>
      </form>
    </div>
  );
};

AuthForm.propTypes = {
  authFn: PropTypes.func.isRequired
};

export default AuthForm;
