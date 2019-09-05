import {
  CREATE_PROJECT
} from '../actions/projectActions';

const initialState = {

}

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT': 
      console.log('create project', action.project);
    default:
      return state;  
  }
}

export default projectReducer;