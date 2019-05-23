import React, { Component, useState, useEffect } from 'react';
import './App.css';
import Cleanup from './Components/Cleanup.js';

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
      <Cleanup number={this.state.count}></Cleanup>
    );
  }
}

export default App;
