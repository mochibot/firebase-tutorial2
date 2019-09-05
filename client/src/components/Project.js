import React from 'react';
import moment from 'moment';

const Project = (props) => {
  const date = props.project.createdAt.toDate().toString();  //convert timestamp to string

  return (
    <div>
      <h3>{props.project.title}</h3>
      <p>{props.project.content}</p>
      <p>Posted by {props.project.authorFirstName + ' ' + props.project.authorLastName}</p>
      <p>{moment(date).calendar()}</p>
    </div>
  )
}

export default Project;