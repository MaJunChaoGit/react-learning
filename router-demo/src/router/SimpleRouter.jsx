import React from 'react';
import {BrowserRouter, Route, Link, HashRouter} from 'react-router-dom';

function App(props) {
  return (
    <div>
      <h1>App</h1>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/inbox">Inbox</Link>
        </li>
      </ul>
      {props.children}
    </div>
  )
}

function About() {
  return <h3>About</h3>
}

function Inbox(props) {
  return (
    <div>
      <h2>Inbox</h2>
      {props.children || 'Welcome to your Inbox'}
    </div>
  );
}

function Message({ match }) {
  return (
    <h3>Message {match.params.id}</h3>
  );
}

function SimpleRouter() {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" component={App}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/inbox" component={Inbox}></Route>
        <Route path="/messages/:id" component={Message}></Route>
      </div>
    </BrowserRouter>
  );
}
export default SimpleRouter;
