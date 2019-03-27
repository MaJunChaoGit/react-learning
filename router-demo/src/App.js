import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
// import BaseRouter from './router/BaseRouter.jsx';
// import NestedRouter from './router/NestedRouter.jsx';
// import SimpleRouter from './router/SimpleRouter.jsx';
import WithRouter from './router/WithRouter.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <WithRouter></WithRouter>
      </Router>
        
    );
  }
}
export default App;