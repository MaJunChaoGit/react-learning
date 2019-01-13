import React from 'react';
import ReactDOM from 'react-dom';

// // 直接通过chilren将子元素输出
function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}

// function WelcomeDialog() {
//   return (
//     <FancyBorder color="blue">
//       <h1 className="Dialog-title">Welcome</h1>
//       <p className="Dialog-message">Thank you for visiting our spacecraft!</p>
//     </FancyBorder>
//   );
// }

// ReactDOM.render(
//   <WelcomeDialog></WelcomeDialog>,
//   document.getElementById('root')
// );

// // 通过自己约定props的名字来进行子元素渲染
// function SplitPane(props) {
//   return (
//     <div className="SplitPane">
//       <div className="SplitPane-left">{props.left}</div>
//       <div className="SplitPane-right">{props.right}</div>
//     </div>
//   );
// }
// function App() {
//   return (
//     <SplitPane left={<h1 className="Dialog-title">Welcome</h1>} right={<p className="Dialog-message">Thank you for visiting our spacecraft!</p>}></SplitPane>
//   );
// }
// ReactDOM.render(
//   <App></App>,
//   document.getElementById('root')
// );

// function Dialog(props) {
//   return (
//     <FancyBorder color="blue">
//       <h1 className="Dialog-title">{props.title}</h1>
//       <p className="Dialog-message">{props.message}</p>
//     </FancyBorder>
//   );
// }

// function WelcomeDialog() {
//   return (
//     <Dialog title="Welcome" message="Thank you for visiting our spacecrapt"></Dialog>
//   );
// }

// ReactDOM.render(
//   <WelcomeDialog></WelcomeDialog>,
//   document.getElementById('root')
// );

// 使用类的方式来编写组合组件
function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">{props.title}</h1>
      <p className="Dialog-message">{props.message}</p>
      {props.children}
    </FancyBorder>
  );
}

class SignUpDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {login: ''};
  }

  render() {
    return (
      <Dialog title="Mars Exploration Program"
              message="How should we refer to you?">
        <input type="text"
               value={this.state.login}
               onChange={this.handleChange}/>
        <button onClick={this.handleSignUp}>
          Sign Me Up!
        </button>
      </Dialog>
    );
  }
  handleChange = (e) => {
    this.setState({login: e.target.value});
  }
  handleSignUp = () => {
    alert(`Welcom aboard, ${this.state.login}!`);
  }
}

ReactDOM.render(
  <SignUpDialog></SignUpDialog>,
  document.getElementById('root')
);