import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import NameForm from './Components/NameForm.js';
import DefaultValue from './Components/DefaultValue.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <DefaultValue></DefaultValue>
    );
  }
}
export default App;