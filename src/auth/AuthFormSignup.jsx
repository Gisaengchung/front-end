import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useAuthError } from '../state/AuthUserProvider';
import { useHistory } from 'react-router-dom';
import styles from '../styles/form.css';
import FormInput from '../components/formInput/FormInput';

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
        <FormInput 
          id={'firstName'}
          type={'text'}
          value={firstName}
          placeholder={'First Name'}
          onChangeFn={setFName}
        />
        <FormInput 
          id={'lastName'}
          type={'text'}
          value={lastName}
          placeholder={'Last Name'}
          onChangeFn={setLName}
        /> 
        <FormInput 
          id={'cityInput'}
          type={'text'}
          value={userCity}
          maxLength={'40'}
          placeholder={'City'}
          onChangeFn={setCity}
        />
        <FormInput 
          id={'stateInput'}
          type={'text'}
          value={userState}
          maxLength={'40'}
          placeholder={'State'}
          onChangeFn={setUserState}
        />
        <button>Sign Up</button>
      </form>
    </div>
  );
};

AuthForm.propTypes = {
  authFn: PropTypes.func.isRequired
};

export default AuthForm;
