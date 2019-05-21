import React, { Component, useState } from 'react';
import useInterval from './useInterval';

// export default class Counter extends React.Component {
//   state = {
//     count: 0,
//     delay: 1000
//   }

//   componentDidMount() {
//     this.interval = setInterval(this.tick, this.state.delay);
//   }
//   componentDidUpdate(preProps, preState) {
//     if (preState.delay !== this.state.delay) {
//       clearInterval(this.interval);
//       this.interval = setInterval(this.tick, this.state.delay);
//     }
//   }
//   componentWillUnmount() {
//     clearInterval(this.interval);
//   }

//   tick = () => {
//     this.setState({
//       count: this.state.count + 1
//     })
//   }
//   handleDelayChange = (e) => {
//     this.setState({ delay: Number(e.target.value) })
//   }

//   render() {
//     return (
//       <>
//         <h1>{this.state.count}</h1>
//         <input type="text" value={this.state.delay} onChange={this.handleDelayChange}/>
//       </>
//     )
//   }
// }

export default function Counter() {
  let [count, setCount] = useState(0);
  let [delay, setDelay] = useState(1000);

  useInterval(() => {
    setCount(count + 1);
  }, delay);

  function handleDelayChange(e) {
    setDelay(Number(e.target.value));
  }
  return (
    <>
      <h1>{count}</h1>
      <input type="text" value={delay} onChange={handleDelayChange}/>
    </>
  )
}