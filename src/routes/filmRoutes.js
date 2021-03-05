/* eslint-disable max-len */
import request from 'superagent';

const URL = process.env.React_APP_API_URL || 'https://fiin-dev.herokuapp.com/api/v1/'; 

// =====================================================================================================

export async function fetchFilms() {

  const response = await request.get(`${URL}film`);
  
  return response.body;
  
}

// =====================================================================================================


export async function fetchFilm(filmId) {

  const response = await request.get(`${URL}film/${filmId}`);
    
  return response.body;
    
}

// ======================================================================================================

export async function createFilm(newFilm)  {
  
  await request
    .post(`${URL}film`)
    .send(newFilm);
          
  return;
  
}

// =========================================================================================

export async function updateFilm(filmId, newFilm)  {
  
  await request
    .put(`${URL}film/${filmId}`)
    .send(newFilm);
          
  return;
  
}

// ==========================================================================================

export async function deleteFilm(filmId)  {
  
  await request.delete(`${URL}film/${filmId}`);
  
  return;
  
}
