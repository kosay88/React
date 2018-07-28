import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: null,
      name: null,
      location: null,
      id: null,
      url: null,
      avatar_url: null,
      followers: null,
      following: null,
      created_at: null
    }
    this.getUser = this.getUser.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getUser(username) {
    return fetch(`http://api.github.com/users/${username}`)
    .then(response => response.json())
    .then(response => {
    return response;
   })
  }

  componentDidMount() {
    this.getUser();
  }

  async handleSubmit(e) {
    e.preventDefault();
    let user = await this.getUser(this.refs.username.value);
    this.setState({username: user.login,
      name: user.name,
      location: user.location,
      id: user.id,
      url: user.url,
      avatar_url: user.avatar_url,
      followers: user.followers,
      following: user.following,
      created_at: user.created_at
    });
  }

  render() {
    let user;
    if(this.state.username) {
      user =
       <div>
         <p>username: {this.state.username}<br/></p>
         <p>name: {this.state.name}<br/></p>
         <p>location: {this.state.location}<br/></p>
         <p>id: {this.state.id}<br/></p>
         <p>url: {this.state.url}<br/></p>
         <p>followers: {this.state.followers}<br/></p>
         <p>following: {this.state.following}<br/></p>
         <p>created_at: {this.state.created_at}<br/></p>
         <img src={this.state.avatar_url}/>
       </div>
    }
    return (
      <div className="App">
        <form onSubmit={e => this.handleSubmit(e)}>
          <input ref='username' type='text' placeholder='username'/>
        </form>
        <hr/>
        {this.state.username === null ? <h1>Enter Your Username</h1> :
        <p className="App-intro">
         {user}
        </p>}
      </div>
    );
  }
}

export default App;
