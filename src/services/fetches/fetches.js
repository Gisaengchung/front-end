import { get, put, post } from '../request';

export const getUserById = (id) => {
  return get(`user/${id}`);
};

export const getProjectById = (id) => {
  return get(`project/${id}`);
};
  
export const getAllUsers = () => {
  return fetch('https://fiin-dev.herokuapp.com/api/v1/user')
    .then(res => res.json())
  ;
};

export const getAllProjects = () => {
  return fetch('https://fiin-dev.herokuapp.com/api/v1/project')
    .then(res => res.json())
  ;
};

export const postProjectData = (projectInfo) => {
  return post('project', projectInfo);
};

export const patchProjectData = (projectInfo) => {
  console.log(projectInfo);
  return put('project', projectInfo);
};

export const patchUserData = (userInfo) => {
  return put('user', userInfo);
};


