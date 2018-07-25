import React, { Component } from 'react';
import Projects from './Components/Projects';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [
        {
          title: 'Business',
          category: 'web design'
        },
        {
          title: 'Social app',
          category: 'Mobile development'
        },
        {
          title: 'Media',
          category: 'Social media and music'
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <h1>project</h1>
        <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
