import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: null,
      color: "",
      lightcolor: ""
    }
    this.randomQuote = this.randomQuote.bind(this);
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor() {
    var colors = ['red', 'green', 'blue', 'black', 'purpule']
    var lightcolors = ['yellow', 'gold', 'pink', 'silver']
    var randomNum = Math.floor(Math.random() * 5);
    var randomNum2 = Math.floor(Math.random() * 4);
    console.log(randomNum, randomNum2);
    var color = colors[randomNum];
    var lightcolor = lightcolors[randomNum2];
    this.setState({color}: color)
    this.setState({lightcolor}: lightcolor)

  }

  randomQuote() {
    this.changeColor();
    axios.get('https://talaikis.com/api/quotes/random/')
    .then((res) => {
      this.setState({
        quote: res.data /* ???? */
      });
      console.log(res);
    })
  }

  componentDidMount() {
    this.randomQuote();
  }

  render() {
    return (
      <div className="container" style={{color: this.state.color}} >
        <button className="button" onClick={this.randomQuote}>Get New Quote</button>
        <p style={{background: this.state.lightcolor}}>
          {this.state.quote !== null && this.state.quote.quote}</p>
        <p style={{background: this.state.lightcolor}}>
          {this.state.quote !== null && this.state.quote.author}</p>
      </div>
    );
  }
}
