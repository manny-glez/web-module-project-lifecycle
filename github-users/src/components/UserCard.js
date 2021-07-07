import React from 'react'

class UserCard extends React.Component {
  render() {
    return (
      <>
        <div className="user-card">
          <img src={this.props.image} alt=''></img>
          <h2>{this.props.name}</h2>
          <p>username:&nbsp;{this.props.username}</p>
          <p>location:&nbsp; {this.props.location}</p>
          <p>Profile:&nbsp; 
            <a href={this.props.profile}>GitHub</a>
          </p>
        </div>
      </>
    )
  }
}

export default UserCard;