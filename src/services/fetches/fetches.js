import { get, put, post } from '../request';

export const getUserById = (id) => {
  return get(`user/${id}`);
};

export const getProjectById = (id) => {
  return get(`project/${id}`);
};

export const getDonationsById = (id) => {
  return get(`project/donate/${id}`);
};

export const patchDonationData = (donationInfo) => {
  return put('project/donate', donationInfo);
};
  
export const getAllUsers = () => {
  return fetch(`${process.env.API_URL}user`)
    .then(res => res.json())
  ;
};

export const getAllProjects = () => {
  return fetch(`${process.env.API_URL}project`)
    .then(res => res.json())
  ;
};

export const postProjectData = (projectInfo) => {
  return post('project', projectInfo);
};

export const patchProjectData = (projectInfo) => {
  return put('project', projectInfo);
};

export const patchUserData = (userInfo) => {
  return put('user', userInfo);
};
