
import React from 'react';
import { useSignUp } from '../state/AuthUserProvider';
import AuthForm from './AuthFormSignup';


const Signup = () => {
  const signUp = useSignUp();
  return (
    <>
      <AuthForm title="Signup" authFn={signUp} />
    </>
  );
};

export default Signup;
