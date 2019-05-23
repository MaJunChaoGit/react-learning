import React, {useEffect} from 'react';

export default function Cleanup(props) {
  
  useEffect(() => {
    console.log(props.number);
    return () => {
      console.log(props.number)
    }
  });

  return <h1>{props.number}</h1>
}