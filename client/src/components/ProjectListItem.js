import React from 'react';
import moment from 'moment';

const ProjectListItem = (props) => {
  const date = props.project.createdAt.toDate().toString();

  return (
    <div>
      <h3>{props.project.title}</h3>
      <p>Posted by {props.project.authorFirstName}</p>
      <p>{moment(date).calendar()}</p>
    </div>
  )
}

export default ProjectListItem;