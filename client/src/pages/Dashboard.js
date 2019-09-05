import React from 'react';
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

export default Dashboard;