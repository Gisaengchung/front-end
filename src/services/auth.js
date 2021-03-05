/* eslint-disable max-len */
  
import { get, post } from './request';

export const postSignup = ({ email, password, firstName, lastName, userState, userCity }) => 
  post('auth/signup', { email, password, firstName, lastName, userState, userCity });

export const postLogin = (email, password) => 
  post('auth/login', { email, password });

export const getLogout = () => get('auth/logout');

export const getVerify = () => get('auth/verify');


