import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
// import BaseRouter from './router/BaseRouter.jsx';
// import NestedRouter from './router/NestedRouter.jsx';
// import SimpleRouter from './router/SimpleRouter.jsx';
import Test from './Components/Test.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <Test customArrayProp={[123]} requiredProps={() => {}}></Test>
    );
  }
}
export default App;