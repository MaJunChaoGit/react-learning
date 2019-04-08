import React, { Component } from 'react';
import ErrorBoundary from './ErrorBoundary';
import SomeWidget from './SomeWidget';

class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <SomeWidget></SomeWidget>
      </ErrorBoundary>
    );
  }
}

export default App;