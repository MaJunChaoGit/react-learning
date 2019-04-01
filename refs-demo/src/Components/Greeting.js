import React, {Component} from 'react';

class Greeting extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  clickHandle = () => {
    this.myRef.current.focus();
  }
  render() {
    return (
      <div>
        <input type="text" ref={this.myRef}/>
        <h1 onClick={this.clickHandle}>Hello</h1>
      </div>
    );
  }
}

export default Greeting;