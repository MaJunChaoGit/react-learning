import React from 'react';
import ReactDOM from 'react-dom';

// root根节点是必须要创建的，并且在此div中的所有内容都将由React DOM来管理
// 一般我们开发只需要定义一个根节点，但如果你是在已有的项目中引入React的话
// 可能会需要在不同的部分单独定义React根节点
function tick() {
  const element = (
    <div>
      <h1>Hello, World</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  )
  ReactDOM.render(
    element,
    document.getElementById('root')
  );
}
// React DOM 首先会比较元素内容先后的不同，而在渲染过程中只会更新改变了的部分。
setInterval(tick, 1000);