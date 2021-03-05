/* eslint-disable max-len */
import request from 'superagent';

const URL = process.env.React_APP_API_URL || 'https://fiin-dev.herokuapp.com/api/v1/'; 

// GET ALL USERS =====================================================================================================

export async function fetchUsers() {

  const response = await request.get(`${URL}user`);

  return response.body;

}

//GET A USER ======================================================================================================

export async function fetchUser(userId) {

  const response = await request.get(`${URL}user/${userId}`);

  return response.body;

}

// UPDATE USER ======================================================================================================


export async function updateUser({ userId, email, password, firstName, lastName, userState, userCity }) {

  const response = await request.put(`${URL}user`, { userId, email, password, firstName, lastName, userState, userCity });
  
  return response.body;
  
}

//DELETE USER ======================================================================================================

  
export async function deleteUser(userId)  {
  
  await request.delete(`${URL}user/${userId}`);
  
  return;
  
}
