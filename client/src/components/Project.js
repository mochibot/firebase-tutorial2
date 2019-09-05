import React from 'react';

const Project = (props) => {
  return (
    <div>
      <h3>{props.project.title}</h3>
      <p>{props.project.content}</p>
      <p>Posted by {props.project.authorFirstName + ' ' + props.project.authorLastName}</p>
      <p>{props.project.createdAt}</p>
    </div>
  )
}

export default Project;