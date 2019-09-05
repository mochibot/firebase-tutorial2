import React from 'react';

const ProjectListItem = (props) => {
  return (
    <div>
      <h3>{props.project.title}</h3>
      <p>Posted by {props.project.authorFirstName}</p>
      <p>{props.project.created}</p>
    </div>
  )
}

export default ProjectListItem;