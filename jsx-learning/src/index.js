import React from 'react';
import ReactDOM from 'react-dom';

// 1.需要注意的第一点是，所有标签的属性都是以camelCase来编写的
//   英文JSX更贴近js而不是html
// 2.JSX中编写的字符串模板是不用但是被XSS注入的问题的，所有输入都被过滤了
const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}</h1>
  }
  return <h1>Hello, Stanger.</h1>
}
// 下面两种写法是一样的
// const element = (
//   <h1>{getGreeting(user)}</h1>
// );

const element = React.createElement(
  'h1',
  {children: getGreeting(user)}
);
ReactDOM.render(
  element,
  document.getElementById('root')
);