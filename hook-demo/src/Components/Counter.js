import React, { Component, useState, useEffect, useRef } from 'react';
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

// export default function Counter() {
//   const [count, setCount] = useState(0);
//   const [delay, setDelay] = useState(1000);
//   const [isRunning, setIsRunning] = useState(true);

//   useInterval(() => {
//     setCount(count + 1);
//   }, isRunning ? delay : null);

//   function handleDelayChange(e) {
//     setDelay(Number(e.target.value));
//   }
//   return (
//     <>
//       <h1>{count}</h1>
//       <input type="text" value={delay} onChange={handleDelayChange}/>
//     </>
//   )
// }

// export default function Counter(props) {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     let id = setInterval(() => {
//       console.log(props.count);
//       setCount(count + 1); 
//     }, 1000);
//     return () => clearInterval(id);
//   }, []);
  
//   return <h1>{count}</h1>
// }

export default function Counter(props) {
  const [count, setCount] = useState(0);
  const savedCallback = useRef();

  function callback() {
    setCount(count + 1);
  }
  
  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() =>{
    function tick() {
      savedCallback.current();
    }
    let id = setInterval(() => {
      tick();
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return <h1>{count}</h1>
}