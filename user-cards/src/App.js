import React from "react";
import axios from 'axios';
import './App.css';
import Card from "./components/Card";

class App extends React.Component {
  state = {
    avatar_url:[],
    name: [],
    username: [],
    location: [],
    bio: [],
    followers: []
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/manny-glez`)
      .then(res => {
        // console.log(res)
        this.setState({
          ...this.state,
          avatar_url: res.data.avatar_url,
          name: res.data.name,
          username: res.data.login,
          location: res.data.location,
          bio: res.data.bio,
          followers: res.data.followers
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div className="App">
        <h1>GitHub User Cards</h1>
        <Card 
          avatar_url={this.state.avatar_url}
          name={this.state.name}
          username={this.state.username}
          location={this.state.location}
          bio={this.state.bio}
          followers={this.state.followers}
        />
      </div>
    );
  }

}


export default App;
