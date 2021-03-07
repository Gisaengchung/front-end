import { get, put } from '../request';

export const getUserById = (id) => {
  return get(`user/${id}`);
};
  
export const getAllUsers = () => {
  return fetch('https://fiin-dev.herokuapp.com/api/v1/user')
    .then(res => res.json())
  ;
};

export const patchUserData = (userInfo) => {
  return put('user', userInfo);
};


