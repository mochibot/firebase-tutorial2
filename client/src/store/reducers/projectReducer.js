import {
  CREATE_PROJECT_SUCCESS, 
  CREATE_PROJECT_ERROR
} from '../actions/projectActions';

const initialState = {

}

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PROJECT_SUCCESS: 
      console.log('create project', action.project);
      return state;
    case CREATE_PROJECT_ERROR:
      return state;
    default:
      return state;  
  }
}

export default projectReducer;