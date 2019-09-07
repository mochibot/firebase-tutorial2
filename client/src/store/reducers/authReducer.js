import {
  SIGN_IN_SUCCESS,  
  SIGN_IN_ERROR,
  SIGN_OUT_SUCCESS,
  SIGN_UP_SUCCESS,
  SIGN_UP_ERROR
 } from '../actions/authActions';

const initialState = {
  authError: null
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        authError: null
      };
    case SIGN_IN_ERROR:
      return {
        ...state,
        authError: action.payload
      };
    case SIGN_OUT_SUCCESS:
      return {
        ...state,
        authError: null
      }
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        authError: null
      };
    case SIGN_UP_ERROR:
      return {
        ...state,
        authError: action.payload
      };
    default:
      return state;
  }
  
}

export default authReducer;