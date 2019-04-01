import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import ListOfWords from './Components/ListOfWords.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
       <ListOfWords></ListOfWords>
      </div>
    );
  }
}
export default App;