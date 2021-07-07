import React from "react";
import axios from 'axios';
import './App.css';

import UserCard from "./components/UserCard";

const usersArray = [
  'manny-glez',
  'Bobby-Tav',
  'fervelgo',
  'caralocke',
  'dhef415',
  'Rodgers31',
  'Spencerp34'
]

class App extends React.Component {
  state = {
    users: []
  }

  fetchUser(userID) {
    axios
      .get(`https://api.github.com/users/${userID}`)
      .then(res => {

        const newUser = {
          userImage: res.data.avatar_url,
          name: res.data.name,
          username: res.data.login,
          location: res.data.location,
          profile: res.data.html_url
        }

        this.setState({
          ...this.state,
          users: this.state.users.concat(newUser)
        })
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidMount() {
    console.log("App mounted")

    usersArray.map(userID => {
      return this.fetchUser(userID)
    })
  }

  componentDidUpdate() {
    console.log("App updated")
  }

  render() {
    console.log('Component rendered to the DOM');
    return (
      <div className="App">
        <h1>GitHub Users</h1>

        {
          this.state.users.map(user => {
            return(
              <UserCard
                key={user.username}
                image={user.userImage}
                name={user.name}
                username={user.username}
                location={user.location}
                profile={user.profile}
              />
            )
          })
        }
    
      </div>
    )
  }
}

export default App;
