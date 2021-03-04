  
import { get, post } from './request';

export const postSignup = (email, password) => 
  post('auth/signup', { email, password });

export const postLogin = (email, password) => 
  post('auth/login', { email, password });

export const getLogout = () => get('auth/logout');

export const getVerify = () => get('auth/verify');


