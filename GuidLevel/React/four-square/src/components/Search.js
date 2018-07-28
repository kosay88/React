import React, { Component } from 'react';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    this.setState({query: this.refs.search.value}, () => {
      this.props.addQuery(this.state.query);
    });

    e.preventDefault();
  }

  render() {
    return (
      <div>
       <form onSubmit={this.handleSubmit}>
         <input
           type="text"
           placeholder="search for venue"
           ref="search"
         />
         <br/>

         <input
           type="submit"
           value="Submit"/>
       </form>
      </div>
    )
  }
}
