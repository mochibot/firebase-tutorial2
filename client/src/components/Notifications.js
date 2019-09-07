import React from 'react';
import moment from 'moment';

const Notifications = (props) => {
  return (
    <div>
      <h2>Notifications</h2>
      {props.notifications && props.notifications.map(item => {
        return (
          <li key={item.id}>
            <p>{item.user} {item.content}</p>
            <p>{moment(item.time.toDate().toString()).fromNow()}</p>
          </li>
        )
      })}
    </div>
  )
}

export default Notifications;