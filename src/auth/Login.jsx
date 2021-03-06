  
import React from 'react';
import { useLogin } from '../state/AuthUserProvider';
import AuthForm from './AuthFormLogin';

const Login = () => {
  const login = useLogin();
  return <AuthForm title="Login" authFn={login} />;
};

export default Login;
