/* eslint-disable max-len */
import React, { createContext, useContext, useEffect, useReducer, useState } from 'react';
import { useHistory } from 'react-router-dom';
import reducer, { initialState } from '../reducers/projectReducer';
import { getVerify, postLogin, postSignup, getLogout } from '../services/auth';


const AuthContext = createContext(null);

export const AuthUserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const history = useHistory();
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const isAuthenticated = !!session;

  useEffect(() => {
    // check if the user is logged in
    getVerify()
      .then(user => setSession(user))
      .catch(() => console.log('user not logged in'))
      .finally(() => setLoading(false));
    // if they are store the in session
  }, []);

  // SIGNUP------------------------------------------------------------

  const signup = (email, password) => {
    // make a fetch request to signup a user
    return postSignup(email, password)
    // store the signed up user in session
      .then(user => setSession(user))
      .then(() => history.push('/'))
      .catch(err => setError(err));
  };
    
  //LOGIN ------------------------------------------------------------

  const login = (email, password) => {
    // make a fetch request to login a user
    return postLogin(email, password)
      // store the logged in user in session
      .then(user => setSession(user))
      .then(() => history.push('/'))
      .catch(err => setError(err));
  };

  //LOGOUT ------------------------------------------------------------

  const logout = () => {
    return getLogout()
      .then(() => setSession(null));
  };

  // PROVIDER-------------------------------------------------------------

  return (
    <AuthContext.Provider value={{
      session,
      loading,
      error,
      isAuthenticated,
      state,
      setSession,
      dispatch,
      signup,
      login,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  );
};

// HOOKS ------------------------------------------------------------

export const useSession = () => {
  const { session, setSession } = useContext(AuthContext);
  return { session, setSession };
};

// ------------------------------------------------------------

export const useAuthLoading = () => {
  const { loading } = useContext(AuthContext);
  return loading;
};

// ------------------------------------------------------------

export const useAuthError = () => {
  const { error } = useContext(AuthContext);
  return error;
};

// ------------------------------------------------------------

export const useIsAuthenticated = () => {
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated;
};

// ------------------------------------------------------------

export const useSignUp = () => {
  const { signup } = useContext(AuthContext);
  return signup;
};

// ------------------------------------------------------------

export const useLogin = () => {
  const { login } = useContext(AuthContext);
  return login;
};

// ------------------------------------------------------------

export const useLogout = () => {
  const { logout } = useContext(AuthContext);
  return logout;
};

// ------------------------------------------------------------
