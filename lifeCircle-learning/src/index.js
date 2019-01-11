import React from 'react';
import ReactDOM from 'react-dom';

// 重新分抓封装之前Clock组件
// function Clock(props) {
// return (
//   <div>
//     <h1>Hello, world</h1>
//     <h2>It is {props.date.toLocaleTimeString()}.</h2>
//   </div>
//   );
// }

// function tick() {
//   ReactDOM.render(
//     <Clock date={new Date()}></Clock>,
//     document.getElementById('root')
//   );
// }

// setInterval(tick, 1000);

// 然而这么写的话，这个组件仍然需要我们自己调用尽心更新
// 我们需要给其添加状态

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    }
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componenWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date()
    })
  }
  render() {
    return (
      <div>
        <h1>Hello, world</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);

// 如何正确的使用状态
// 1.不要直接更新状态 bad this.state.comment = "Hello"
// 2.状态更新可能是异步的，不要使用对象的方式取出之前的状态来修改未来的状态
// 比如：
// this.setState({
//   counter: this.state.count + this.props.increment
// })
// 应该使用方法的形式，它的第一个参数为之前的状态, 第二个为当前被应用的props
// this.setState((preState, props) => {
//   counter: preState.counter + props.increment
// })

