import React from 'react';
import { Link } from 'react-router-dom';
import ProjectListItem from './ProjectListItem';

const ProjectList = (props) => {
  
  return (
    <div>
      {props.projects && props.projects.map(item => (
        <Link to={`/projects/${item.id}`}>
          <ProjectListItem key={item.id} project={item}/>
        </Link>
      ))}
    </div>
  )
}

export default ProjectList;