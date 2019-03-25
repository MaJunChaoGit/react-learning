import React, { Component } from 'react';
// import BaseRouter from './router/BaseRouter.jsx';
import NestedRouter from './router/NestedRouter.jsx';
import './App.css';
class App extends Component {
  render() {
    return <NestedRouter></NestedRouter>
  }
}
export default App;