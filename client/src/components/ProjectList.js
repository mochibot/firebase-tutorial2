import React from 'react';
import ProjectListItem from './ProjectListItem';

const ProjectList = (props) => {
  
  return (
    <div>
      {props.projects && props.projects.map(item => <ProjectListItem project={item}/>)}
    </div>
  )
}

export default ProjectList;