import React, {Component, PureComponent} from 'react';

export default class CounterButton extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: 1
    }
  }
  render() {
    console.log(this.props.color)
    return (
      <button onClick={() => this.setState(state => ({count: state.count + 1}))}>
        {'总数是: ' + this.state.count}
        {'颜色是:' + this.props.color}
      </button>
    );
  }
}