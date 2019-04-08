import React from 'react';
import {useState, useEffect} from 'react';

function Example() {
  const [count, setCount] = useState(0);
  const [otherCount, setOtherCount] = useState(10);

  useEffect(() => {
    document.title = `You clicked ${otherCount + count} times`;
  }, [count]);

  return (
    <div>
      <p>You Clicked {count +　otherCount} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button onClick={() => setOtherCount(otherCount - 1)}>
        Click Other me
      </button>
    </div>
  )
}
export default Example;
