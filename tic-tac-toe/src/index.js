import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], lines: [a, b, c]};
    }
  }
  return null;
}
class Square extends Component {
  render() {
    return (
      <button className={'square' + ' ' + (this.props.isHighlight ? 'highlight' : '')} onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}

class Board extends Component {
  renderSquare(i) {
    let isHighlight = this.props.lines.indexOf(i) > -1;
    return <Square isHighlight={isHighlight} key={i} value={this.props.squares[i]} onClick={() => this.props.onClick(i)}/>;
  }

  render() {
    var rows = [];
    for (var i = 0; i < 3; i++) {
      var row = [];
      for (var j = 3 * i; j < 3 * i + 3; j++) {
        row.push(this.renderSquare(j));
      }
      rows.push(<div className="board-row" key={i}>{row}</div>);
    }
    return (
      <div>{rows}</div>
    );
  }
}

class Game extends Component {
  constructor() {
    super();
    this.state = {
      history: [{
        squares: Array(9).fill(null),
        info: ''
      }],
      stepNumber: 0,
      xIsNext: true,
      isReverse: false
    };
  }
  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) return;
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    let row = parseInt(i / 3) + 1;

    let col = (i + 1) % 3 === 0 ? 3 : (i + 1) % 3;
    this.setState({
      history: history.concat([{
        squares: squares,
        info: '(' + row + ', ' + col + ')'
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    })
  }
  jumpTo(stepNumber) {
    this.setState({
      stepNumber: stepNumber,
      xIsNext: (stepNumber % 2) ? false : true,
    })
  }
  sortHistory() {
    this.setState({
      isReverse: !this.state.isReverse
    });
  }
  render() {
    let history = this.state.history.slice();
    const current = history[this.state.stepNumber];
    const squares = current.squares.slice();
    const winner = calculateWinner(squares);
    let lines = [];
    if (this.state.isReverse) {
      history.reverse();
    }
    const moves = history.map((step, move) => {
      let info = step.info === "" ? 'Game started' : 
        (move % 2 ? 'X ' : 'O ') + 'moveTo ' + step.info;
      return (
        <li key={move} className={this.state.stepNumber === move ? 'block' : ''}>
          <a href="#" onClick={() => this.jumpTo(move)}>{info}</a>
        </li>
      );
    });
    let status;
    if (winner) {
      status = 'Winner is ' + winner.winner;
      lines = winner.lines;
    } else {
      status = 'Next Player is ' + (this.state.xIsNext ? 'X' : 'O');
    }
  
    return (
      <div className="game">
        <div className="game-board">
          <Board 
            squares={squares}
            onClick={(i) => this.handleClick(i)}
            lines={lines}
          />
        </div>
        <div className="game-info">
          <button onClick={() => this.sortHistory()}>Sort</button>
          <div className="status">{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
