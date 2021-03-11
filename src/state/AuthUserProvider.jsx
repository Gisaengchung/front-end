/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React, { createContext, useContext, useEffect, useReducer, useState } from 'react';
import { useHistory } from 'react-router-dom';
import reducer, { initialState } from '../reducers/projectReducer';
import { getVerify, postLogin, postSignup, getLogout } from '../services/auth';
import { getAllUsers } from '../services/fetches/fetches';

const AuthContext = createContext(null);

export const AuthUserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const history = useHistory();
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const isAuthenticated = !!session;

  useEffect(() => {
    getVerify()
      .then(user => setSession(user))
      .catch(() => console.log('user not logged in'))
      .finally(() => setLoading(false));
  }, []);

  const useUserList = () => {
    const [users, setUsers]  = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
      getAllUsers()
        .then((users) => { setUsers(users);
          setLoading(false);
        });
    }, []);

    return {
      users, 
      loading
    };
  };

  const signup = (email, password) => {
    return postSignup(email, password)
      .then(user => setSession(user))
      .then(() => history.push('/'))
      .catch(err => setError(err));
  };
    
  const login = (email, password) => {
    return postLogin(email, password)
      .then(user => setSession(user))
      .then(() => history.push('/'))
      .catch(err => setError(err));
  };

  const logout = () => {
    return getLogout()
      .then(() => setSession(null));
  };

  return (
    <AuthContext.Provider value={{
      session,
      loading,
      error,
      isAuthenticated,
      state,
      users,
      useUserList,
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

export const useSession = () => {
  const { session, setSession } = useContext(AuthContext);
  return { session, setSession };
};

export const useAuthLoading = () => {
  const { loading } = useContext(AuthContext);
  return loading;
};

export const useAuthError = () => {
  const { error } = useContext(AuthContext);
  return error;
};

export const useIsAuthenticated = () => {
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated;
};

export const useSignUp = () => {
  const { signup } = useContext(AuthContext);
  return signup;
};

export const useLogin = () => {
  const { login } = useContext(AuthContext);
  return login;
};

export const useLogout = () => {
  const { logout } = useContext(AuthContext);
  return logout;
};

export const useSelector = selectorFn => {
  const { state } = useContext(AuthContext);
  return selectorFn(state);
};

export const users = () => {
  const { users } = useContext(AuthContext);
  return users;
};
