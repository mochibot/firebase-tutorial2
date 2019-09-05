import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import ProjectList from '../components/ProjectList';
import Notification from '../components/Notification';

const Dashboard = (props) => {
  
  return (
    <div>
      <ProjectList projects={props.projects}/>
      <Notification />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    projects: state.firestore.ordered.projects
  }  
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects' }
  ])
)(Dashboard);