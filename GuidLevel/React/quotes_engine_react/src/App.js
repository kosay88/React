import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: null,
      color: ""
    }
    this.randomQuote = this.randomQuote.bind(this);
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor() {
    var colors = ['red', 'green', 'blue', 'black', 'silver']
    var randomNum = Math.floor(Math.random() * 4);
    var color = colors[randomNum];
    this.setState({color}: color)
  }

  randomQuote() {
    this.changeColor();
    axios.get('https://talaikis.com/api/quotes/random/')
    .then((res) => {
      this.setState({
        quote: res.data
      });
    })
  }

  ComponentDidMount = () => {
    this.randomQuote();
  }

  render() {
    return (
      <div className="container" style={{color: this.state.color}} >
      <button className="button" onClick={this.randomQuote}>Get New Quote</button>
        <p>{this.state.quote !== null && this.state.quote.quote}</p>
        <p>{this.state.quote !== null && this.state.quote.author}</p>
      </div>
    );
  }
}
