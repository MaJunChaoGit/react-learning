import React, {Component} from 'react';
import Greeting from './Greeting.js';

class AutoFocusGreeting extends Component {
  constructor(props) {
    super(props);
    this.greetingRef = React.createRef();
  }
  componentDidMount() {
    this.greetingRef.current.myRef.current.focus();
  }
  render() {
    return (
      <Greeting ref={this.greetingRef}></Greeting>
    );
  }
}

export default AutoFocusGreeting;