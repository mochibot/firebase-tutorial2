export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_ERROR = 'SIGN_IN_ERROR';
export const SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_ERROR = 'SIGN_UP_ERROR';

export const signIn = (credentials) => (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();
  firebase.auth().signInWithEmailAndPassword(
    credentials.email,
    credentials.password
  )
    .then(response =>{
      dispatch({
        type: SIGN_IN_SUCCESS
      })
    })
    .catch(error => {
      dispatch({
        type: SIGN_IN_ERROR,
        payload: error.message
      })
    })
  
}

export const signOut = () => (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();
  
  firebase
    .auth()
    .signOut()
    .then(response => {
      dispatch({
        type: SIGN_OUT_SUCCESS
      })
    })
}

export const signUp = (credentials) => (dispatch, getState, { getFirestore, getFirebase }) => {
  const firebase = getFirebase();
  const firestore = getFirestore();

  firebase.auth().createUserWithEmailAndPassword(
    credentials.email, 
    credentials.password
  )
    .then(response => {
      return firestore.collection('users').doc(response.user.uid).set({
        firstName: credentials.firstName,
        lastName: credentials.lastName,
        initials: credentials.firstName[0] + credentials.lastName[0]
      })
    })
    .then(() => {
      dispatch({
        type: SIGN_UP_SUCCESS
      })
    })
    .catch(error => {
      dispatch({
        type: SIGN_UP_ERROR,
        payload: error.message
      })
    })
}