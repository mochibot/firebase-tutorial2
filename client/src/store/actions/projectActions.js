export const CREATE_PROJECT_SUCCESS = 'CREATE_PROJECT_SUCCESS';
export const CREATE_PROJECT_ERROR = 'CREATE_PROJECT_ERROR';

export const createProject = (project) => (dispatch, getState, { getFirebase, getFirestore }) => {
  const firestore = getFirestore(); 
  const profile = getState().firebase.profile;
  const authorId = getState().firebase.auth.uid;

  firestore.collection('projects').add({
    ...project,
    authorFirstName: profile.firstName,
    authorLastName: profile.lastName,
    authorId: authorId,
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
      payload: 'Login error'
    })
  })
} 