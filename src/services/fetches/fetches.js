import { get, put } from '../request';

export const getUserById = (id) => {
  return get(`user/${id}`);
};

export const getAllUsers = () => {
  return get('user');
};

export const patchUserData = (userInfo) => {
  return put('user', userInfo);
};
