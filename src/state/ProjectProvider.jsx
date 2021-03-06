import React, { createContext, useContext, useReducer } from 'react';
import reducer, { initialState } from '../reducers/projectReducer';

const ProjectContext = createContext(null);

// ------------------------------------------------------------

export const ProjectProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ProjectContext.Provider value={{ state, dispatch }}>
      {children}
    </ProjectContext.Provider>
  );
};

// ------------------------------------------------------------

export const useSelector = selectorFn => {
  const { state } = useContext(ProjectContext);
  return selectorFn(state);
};

// ------------------------------------------------------------

export const useDispatch = () => {
  const { dispatch } = useContext(ProjectContext);
  return dispatch;
};
