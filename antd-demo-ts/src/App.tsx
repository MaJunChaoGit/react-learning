import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
// import Example from './components/TypeInputExample';
import Example from './components/FilterExample';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Example></Example>
      </div>
    );
  }
}

export default App;
