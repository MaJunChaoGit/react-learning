import React from 'react';
import ReactDOM from 'react-dom';
// Props只读不可以修改！！！！！！！！！！！！！！！！
// 定义组件有以下两种方式，并且定义组件时首字母必须大写
// 1.function方式
function Welcome(props) {
  return (
    <h1>Hello, {props.name}</h1>
  );
}

// 2.ES6的Class方式
// class Welcome extends React.Component {
//   render() {
//     return (
//       <h1>Hello, {this.props.name}</h1>
//     );
//   }
// }

// 当然我们也可以创建一个App组件，多次调用上面的Welcome组件
// function App() {
//   // 同样的，组件只能有一个根元素
//   return (
//     <div> 
//       <Welcome name="香菇" />
//       <Welcome name="妞妞" />
//       <Welcome name="英英" />
//     </div>
//   );
// }


// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

// 提取组件案例
// function Comment(props) {
// return (
//   <div className="Comment">
//     <UserInfo user={props.author}></UserInfo>
//     <div className="Comment-text">
//       {props.text}
//     </div>
//     <div className="Comment-data">
//       {formatData(props.data)}
//     </div>
//   </div>
//   );
// }

// 上面这个组件接受author, text, date多种类型作为props
// 由于这个组件各种嵌套，变得难以修改，可复用的部分也难以被复用
// 所以我们开始提取小组件
// 
// Avatar做为Comment的内部组件，不需要知道是否被渲染
// 因此改名author为user
// 我们建议从组件自身的角度来命名props,而不是根据上下文
// 下面是提取的两个组件
// function Avatar(props) {
// return (
//   <img 
//     src={props.user.avatarUrl} 
//     alt={props.user.name}
//     className="Avatar"
//   />
//   )
// }

// function UserInfo(props) {
// return (
//   <div className="UserInfo">
//     <Avatar user={props.user} />
//     <div className="UserInfo-name">
//       {props.user.name}
//     </div>
//   </div>
//   )
// }