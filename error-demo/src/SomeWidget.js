import React, {Component} from 'react';

class SomeWidget extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }
  handleClick = () => {
    this.setState(pre => ({
      count: pre.count + 1
    }));
  }
  render() {
    if (this.state.count === 5) throw new Error('出错了');
    return (
      <div onClick={this.handleClick}>
        点我{this.state.count}次
      </div>
    )
  }
}
export default SomeWidget;
