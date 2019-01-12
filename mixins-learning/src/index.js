import React from 'react';
import ReactDOM from 'react-dom';

// // 直接通过chilren将子元素输出
// function FancyBorder(props) {
//   return (
//     <div className={'FancyBorder FancyBorder-' + props.color}>
//       {props.children}
//     </div>
//   );
// }

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

// 通过自己约定props的名字来进行子元素渲染
function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">{props.left}</div>
      <div className="SplitPane-right">{props.right}</div>
    </div>
  );
}
function App() {
  return (
    <SplitPane left={<h1 className="Dialog-title">Welcome</h1>} right={<p className="Dialog-message">Thank you for visiting our spacecraft!</p>}></SplitPane>
  );
}
ReactDOM.render(
  <App></App>,
  document.getElementById('root')
);
