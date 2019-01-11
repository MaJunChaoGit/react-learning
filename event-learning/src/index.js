import React from 'react';
import ReactDOM from 'react-dom';

// 在React中不能使用返回false的方式阻止默认行为
// 应该这样来写：
// function ActionLink() {
//   function handleClick(e) {
//     e.preventDefault();
//     console.log('The link was clicked');
//   }

//   return (
//     <a href="#" onClick="{handleClick}">Click me</a>
//   );
// }

// class Toggle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isToggleOn: true
//     }
//     // 须手动绑定 或者 使用箭头函数包裹 或者用proposal-class-properties语法
//     // 如果使用箭头函数的话，作为一个属性值传递到子组件时，这些组件可能会造成额外的渲染
//     // this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick = () => {
//     this.setState(preState => ({
//       isToggleOn: !preState.isToggleOn
//     }));
//   }

//   render() {
//     return (
//       <button onClick={this.handleClick}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button>
//     )
//   }
// }

// ReactDOM.render(
//   <Toggle />,
//   document.getElementById('root')
// );

// 如果和向事件处理程序传递参数,有两种写法
// <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
// <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>

// 如果使用箭头函数时，必须进行显示的传递事件对象，并且事件对象作为最后一个参数传递最好
// 使用bind的话，事件对象会被隐式的传递，并在参数最后一个
class Popper extends React.Component {
  constructor() {
    super();
      this.state = {name: 'Hello world'};
  }
  preventPop(name, e) {
    e.preventDefault();
    alert(name);
  }

  render() {
    return (
      <div>
        <p>hello</p>
        <a href="https://reactjs.org" onClick={this.preventPop.bind(this, this.state.name)}>Click</a>
      </div>
    )
  }
}
ReactDOM.render(
  <Popper />,
  document.getElementById('root')
);