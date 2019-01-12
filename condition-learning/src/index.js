import React from 'react';
import ReactDOM from 'react-dom';

// 使用if根据props传入的数据来渲染不同的问候语
function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up</h1>
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting></UserGreeting>
  } else {
    return <GuestGreeting></GuestGreeting>
  }
}

// ReactDOM.render(
//   <Greeting isLoggedIn={false}></Greeting>,
//   document.getElementById('root')
// );

// 元素变量来帮助条件渲染组件
// function LoginButton(props) {
//   return (
//     <button onClick={props.onClick}>Login</button>
//   );
// }

// function LogoutButton(props) {
//   return (
//     <button onClick={props.onClick}>Logout</button>
//   );
// }

// class LoginControl extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {isLoggedIn: false};
//   }

//   handleLoginClick = () => {
//     this.setState({isLoggedIn: true});
//   }
//   handleLogoutClick = () => {
//     this.setState({isLoggedIn: false});
//   }

//   render() {
//     const isLoggedIn = this.state.isLoggedIn;

//     let button = null;

//     if (isLoggedIn) {
//       button = <LogoutButton onClick={this.handleLogoutClick}></LogoutButton>
//     } else {
//       button = <LoginButton onClick={this.handleLoginClick}></LoginButton>
//     }

//     return (
//       <div>
//         <Greeting isLoggedIn={isLoggedIn} />
//         {button}
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//   <LoginControl></LoginControl>,
//   document.getElementById('root')
// );

// 通过与运算符&&进行条件渲染
// function Mailbox(props) {
//   const unreadMessages = props.unreadMessages;
//   return (
//     <div>
//       <h1>Hello</h1>
//       {unreadMessages.length > 0 && <h2>you have {unreadMessages.length} unread message</h2>}
//     </div>
//   );
// }
// const messages = ['React', 'Re: React', 'Re:Re: React'];
// ReactDOM.render(
//   <Mailbox unreadMessages={messages} />,
//   document.getElementById('root')
// );

// 使用三目运算符
// render() {
//   const isLoggedIn = this.state.isLoggedIn;
//   return (
//     <div>
//       The user is <b>isLoggedIn ? 'currently' : 'not'}</b> logged in.
//     </div>
//   );
// }

// render() {
//   const isLoggedIn = this.state.isLoggedIn;
//   return (
//     <div>
//       {isLoggedIn ? (
//         <LogoutButton onClick={this.handleLogoutClick}></LogoutButton>
//       ) : (
//         <LoginButton onClick={this.handleLogoutClick}></LoginButton>
//       )}
//     </div>
//   );
// }

// 阻止组件渲染
function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }
  return (
    <div className="warning">Warning</div>
  );
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true};
  }
  handleToggleClick = () => {
    this.setState(preState => ({
      showWarning: !preState.showWarning
    }));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning}></WarningBanner>
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    );
  }
}
ReactDOM.render(
  <Page></Page>,
  document.getElementById('root')
);