import React from "react";
import axios from 'axios';
import './App.css';

import UserCard from "./components/UserCard";

const users = [
  'Bobby-Tav',
  'fervelgo',
  'caralocke',
  'dhef415',
  'Rodgers31',
  'Spencerp34',
]

class App extends React.Component {
  state = {
    usersImage: [],
    name: [],
    username: [],
    location: [],
    profile: []
  }

  componentDidMount() {
    console.log("App mounted")
    axios.get('https://api.github.com/users/manny-glez')
      .then(res => {
        console.log(res.data)
        this.setState({
          ...this.state,
          usersImage: res.data.avatar_url,
          name: res.data.name,
          username: res.data.login,
          location: res.data.location,
          profile: res.data.html_url
        })
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidUpdate() {
    console.log("App updated")
  }

  render() {
    console.log('Component rendered to the DOM');
    return (
      <div className="App">
        <h1>GitHub Users</h1>

        <UserCard image={this.state.usersImage}
          name={this.state.name}
          username={this.state.username}
          location={this.state.location}
          profile={this.state.profile}
        />
      </div>
    )
  }
}

export default App;
