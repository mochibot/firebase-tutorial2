import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import ProjectList from '../components/ProjectList';
import Notification from '../components/Notification';

const Dashboard = (props) => {

  if (!props.auth.uid) {
    return <Redirect to='/signin' />
  }

  return (
    <div>
      <ProjectList projects={props.projects}/>
      <Notification />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth
  }  
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects' }
  ])
)(Dashboard);