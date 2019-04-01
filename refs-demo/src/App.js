import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import AutoFocusGreeting from './Components/AutoFocusGreeting.js';
import './App.css';

// 在函数式内部使用ref
function CustomTextInput(props) {
  let textInput = null;
  function handleClick() {
    textInput.focus();
  }
  return (
    <div>
      <input type="text" ref={(input) => {textInput = input; }}/>
      <input type="text" type="button" value="focus" onClick={handleClick}/>
    </div>
  );
}
class App extends Component {
  render() {
    return (
      <CustomTextInput></CustomTextInput>
    );
  }
}
export default App;