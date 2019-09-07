import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import ProjectList from '../components/ProjectList';
import Notifications from '../components/Notifications';

const Dashboard = (props) => {

  if (!props.auth.uid) {
    return <Redirect to='/signin' />
  }

  return (
    <div>
      <ProjectList projects={props.projects}/>
      <Notifications notifications={props.notifications}/>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  }  
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { 
      collection: 'projects',  
      orderBy: ['createdAt', 'desc']       //order by time
    }, 
    { collection: 'notifications', 
      limit: 3,                       //limit to 3 docs
      orderBy: ['time', 'desc'] 
    }  
  ])
)(Dashboard);