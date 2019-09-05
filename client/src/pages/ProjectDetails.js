import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import Project from '../components/Project';

const ProjectDetails = (props) => {
  if (!props.auth.uid) {
    return <Redirect to='/signin' />;
  }

  return (
    <div>
      {props.project ? <Project project={props.project}/> : <div>No project found with this id</div>}    
    </div>
  )
}

const mapStateToProps = (state, props) => {
  const id = props.match.params.id;
  const projects = state.firestore.data.projects; //gives projects array
  const project = projects ? projects[id] : null;
  
  return {
    project: project,
    auth: state.firebase.auth
  }
}


export default compose(
  connect(mapStateToProps),
  firestoreConnect(props => {
    return [{ 
      collection: 'projects',
      doc: props.match.params.id,
    }]
  })
)(ProjectDetails);