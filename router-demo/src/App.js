import React, { Component } from 'react';
// import BaseRouter from './router/BaseRouter.jsx';
// import NestedRouter from './router/NestedRouter.jsx';
import SimpleRouter from './router/SimpleRouter.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <SimpleRouter></SimpleRouter>
    );
  }
}
export default App;