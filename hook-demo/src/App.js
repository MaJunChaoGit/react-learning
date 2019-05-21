import React, { Component, useState, useEffect } from 'react';
import './App.css';
import Counter from './Components/Counter.js';

class App extends Component {
  
  state = {
    count: 0
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        count: Math.random()
      })
      console.log(this.state.count)
    }, 1000);
  }
  render() {
    return (
      <Counter count={this.state.count}></Counter>
    );
  }
}

export default App;
