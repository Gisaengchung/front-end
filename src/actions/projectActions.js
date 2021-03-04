export const CREATE_PROJECT = 'CREATE_PROJECT';
export const createProject = project => ({
  type: CREATE_PROJECT,
  payload: project
});

export const DELETE_PROJECT = 'DELETE_PROJECT';
export const deleteProject = title => ({
  type: DELETE_PROJECT,
  payload: title
});
