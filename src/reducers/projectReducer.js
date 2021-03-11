/* eslint-disable max-len */
import { CREATE_PROJECT, DELETE_PROJECT } from '../actions/projectActions';
import { post } from '../services/request';

export const initialState = {
  projects: []
};

export default function reducer(state, action) {
  switch(action.type) {

    case CREATE_PROJECT:
      post('project', action.payload);
      return {
        ...state,
        projects: [...state.projects, action.payload]
      };

    case DELETE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter(project => project.name !== action.payload)
      };
    default:
      return state;
  }
}
