import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './root.css';



class Modal extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  } 
  componentDidMount() {
    const modalRoot = document.querySelector('#modal-root');
    modalRoot.appendChild(this.el);
  }
  componentWillUnmount() {
    const modalRoot = document.querySelector('#modal-root');
    modalRoot.removeChild(this.el);
  }
  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el
    )
  }
}

class Root extends Component {
  constructor() {
    super();
    this.state = {
      showModel: false,
      clickCount: 0
    }
  }

  handleShow = () => {
    this.setState({
      showModel: true
    });
  }

  handleHide = () => {
    this.setState({
      showModel: false
    });
  }
  handleClick = () => {
    this.setState(pre => ({
      clickCount: pre.clickCount + 1
    }))
  }
  render() {
    const modal = this.state.showModel ? 
      <Modal>
        <div className="modal">
          <button>Click</button>
          <button onClick={this.handleHide}>Hide</button>
        </div>
      </Modal>
      : null;
    return(
      <div onClick={this.handleClick}>
        <div>{this.state.clickCount}</div>
        <div id="modal-root"></div>
        <div className="root">
          This div has overflow: hidden.
          <button onClick={this.handleShow}>Show Modal</button>
        </div>
        {modal}
      </div>
    );
  }
}
export default Root;
