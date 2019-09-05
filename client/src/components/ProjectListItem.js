import React from 'react';

const ProjectListItem = (props) => {
  return (
    <div>
      <h3>{props.project.title}</h3>
      <p>Posted by {props.project.author}</p>
      <p>{props.project.date}</p>
    </div>
  )
}

export default ProjectListItem;