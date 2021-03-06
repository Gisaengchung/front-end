import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useAuthError } from '../state/AuthUserProvider';


const AuthForm = ({ authFn }) => {
  const error = useAuthError();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    authFn(email, password);
  };

  return (
    <>
      <h2>Login</h2>
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

        

        <button>Login</button>
      </form>
    </>
  );
};

AuthForm.propTypes = {
  authFn: PropTypes.func.isRequired
};

export default AuthForm;
