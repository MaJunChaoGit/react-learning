import React from 'react';
import ReactDOM from 'react-dom';

// 基础组件渲染
// function NumberList(props) {
//   const numbers = props.numbers;
//   const listItems = numbers.map((number) => {
//     return <li key={number.toString()}>{number}</li> // 这里需要加上key
//   });
//   return (
//     <ul>{listItems}</ul>
//   );
// }
// const numbers = [1, 2, 3, 4, 5];
// ReactDOM.render(
//   <NumberList numbers={numbers}></NumberList>,
//   document.getElementById('root')
// );


// 在使用列表渲染时,元素的key应该与他的兄弟元素唯一,而不用保持全局唯一
function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) => 
        <li key={post.id}>{post.title}</li>
      )}
    </ul>
  );
  const content = props.posts.map((post) => 
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
  return (
    <div>
      {sidebar}
      <hr/>
      {content}
    </div>
  );
}

const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];
ReactDOM.render(
  <Blog posts={posts} />,
  document.getElementById('root')
);