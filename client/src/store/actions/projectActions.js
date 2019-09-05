export const CREATE_PROJECT = 'CREATE_PROJECT';

export const createProject = (project) => (dispatch) => {
  dispatch({
    type: CREATE_PROJECT,
    payload: project
  })
} 