export const CREATE_PROJECT_SUCCESS = 'CREATE_PROJECT_SUCCESS';
export const CREATE_PROJECT_ERROR = 'CREATE_PROJECT_ERROR';

export const createProject = (project) => (dispatch, getState, { getFirebase, getFirestore }) => {
  const firestore = getFirestore(); 
  firestore.collection('projects').add({
    ...project,
    authorFirstName: 'Penny',
    authorLastName: 'Lee',
    authorId: 1234,
    createdAt: new Date()
  })
  .then(response => {
    dispatch({
      type: CREATE_PROJECT_SUCCESS,
      payload: project
    })
  }).catch(error => {
    dispatch({
      type: CREATE_PROJECT_ERROR,
      payload: error
    })
  })
} 