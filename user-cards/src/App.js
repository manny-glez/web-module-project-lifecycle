import React from "react";
import axios from 'axios';
import './App.css';
import Card from "./components/Card";

const usernames = [
  "manny-glez",
  "Spencerp34",
  "Bobby-Tav",
  "fervelgo"
]

class App extends React.Component {

  state = {
    users: []
  }

  componentDidMount() {
    usernames.forEach(username => {
      axios
        .get(`https://api.github.com/users/${username}`)
        .then(res => {

          this.setState({
            ...this.state,
            users: [...this.state.users, {avatar_url: res.data.avatar_url,
              name: res.data.name,
              username: res.data.login,
              location: res.data.location,
              bio: res.data.bio,
              followers: res.data.followers,
              link: res.data.html_url}]
          })
        })
    })
  }

  render() {
    return (
      <div className="App">
        <h1>GitHub User Cards</h1>
        {
          this.state.users.map(user => {
            return (
              <Card
                username={user.username}
                location={user.location}
                bio={user.bio}
                followers={user.followers}
                name={user.name}
                avatar_url={user.avatar_url}
                link={user.link}
            />
            )
          })
        }
      </div>
    );
  }

}


export default App;
