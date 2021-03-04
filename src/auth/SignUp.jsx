
import React from 'react';
import SignUpForm from '../components/signUpForm/SignUpForm';
import { useSignup } from '../state/AuthContext';
import AuthForm from './AuthForm';


const Signup = () => {
  const signup = useSignup();
  return (
    <>

      <AuthForm title="Signup" authFn={signup} />
      <SignUpForm />
    </>
  );
};

export default Signup;
