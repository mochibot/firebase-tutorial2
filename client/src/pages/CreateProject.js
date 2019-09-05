import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import ProjectForm from '../components/ProjectForm';

const CreateProject = (props) => {
  if (!props.auth.uid) {
    return <Redirect to='/signin'/>
  }

  return (
    <div>
      <h3>Create a new project</h3>
      <ProjectForm />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(CreateProject);