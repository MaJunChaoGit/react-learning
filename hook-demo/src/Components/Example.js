import React from 'react';
import {useState, useEffect, useCallback, useRef} from 'react';

// function Example() {
//   const [count, setCount] = useState(0);
//   const handleAlertClick = useCallback(() => {
//     setTimeout(() => {
//       alert('You clicked on: ' + count);
//     }, 3000);
//   }, [count]);
//   return (
//     <div>
//       <p>You Clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         增加 count
//       </button>
//       <button onClick={handleAlertClick}>
//         显示 count
//       </button>
//     </div>
//   )
// }

// function Example() {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     setTimeout(() => {
//       alert('count: ' + count);
//     }, 3000);
//   }, [count]);

//   return (
//     <div>
//       <p>You Clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         增加 count
//       </button>
//       <button onClick={() => setCount(count - 1)}>
//         减少 count
//       </button>
//     </div>
//   )
// }

  function Example() {
    const [count, setCount] = useState(0);
    const countRef = useRef(null);

    const handleAlertClick = useCallback(
      () => {
        setTimeout(() => {
          alert("You clicked on: " + countRef.current);
        }, 3000);
      },
      [count]
    )
    
    return (
      <div>
        <p>You clicked {count} times</p>
        <button
          onClick={() => {
            countRef.current = count + 1;
            setCount(count + 1);
          }}
        >
          增加 count
        </button>
        <button onClick={handleAlertClick}>显示 count</button>
      </div>
    );
  }
export default Example;
