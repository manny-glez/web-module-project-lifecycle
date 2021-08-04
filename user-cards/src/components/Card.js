import React from 'react';

function Card(props) {
  const { name, avatar_url } = props;
  return (
    <div className="card">
      <div>
        <img src={avatar_url} alt=''></img>
      </div>

      <div className="card-info">
        <p><b>Name:</b> &nbsp;{name}</p>
        <p><b>Username:</b> &nbsp;{props.username}</p>
        <p><b>location:</b> &nbsp;{props.location}</p>
        <p><b>Bio:</b> &nbsp;{props.bio}</p>
        <p><b>Followers:</b> &nbsp;{props.followers}</p>
      </div>
    </div>
  )
}

export default Card;