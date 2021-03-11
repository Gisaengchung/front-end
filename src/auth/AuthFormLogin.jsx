import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/form.css';
import FormInput from '../components/formInput/FormInput';

const AuthForm = ({ authFn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    authFn(email, password);
  };

  return (
    <div className={styles.displayPage}>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <h2 className={styles.formHeader}>Login</h2>
        <FormInput 
          id={'email'}
          type={'email'}
          value={email}
          placeholder={'Email'}
          onChangeFn={setEmail}
        />
        <FormInput 
          id={'password'}
          type={'password'}
          value={password}
          minLength={'8'}
          placeholder={'Password'}
          onChangeFn={setPassword}
        />
        <button>Login</button>
      </form>
    </div>
  );
};

AuthForm.propTypes = {
  authFn: PropTypes.func.isRequired
};

export default AuthForm;
