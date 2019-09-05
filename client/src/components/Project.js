import React from 'react';

const Project = (props) => {
  return (
    <div>
      <h3>{props.project.title}</h3>
      <p>{props.project.content}</p>
      <p>Posted by {props.project.author}</p>
      <p>{props.project.date}</p>
    </div>
  )
}

export default Project;