import React from 'react';
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
      return {
        value: squares[a],
        lines: lines[i].slice()
      };
    }
  }
  return null;
}


class Square extends React.Component {
  render() {
    return (
      <button className={'square ' + this.props.highlight} onClick={this.props.onClick}>
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square highlight={this.props.lines.indexOf(i) > -1 ? 'highlight' : ''} key={'square-' + i} value={this.props.value[i]} onClick={() => this.props.onClick(i)}/>;
  }

  render() {
    var rows = [0, 1, 2];
    var squares = [0, 1, 2];

    return (
      <div>
        {
          rows.map(row => {
            return <div className="board-row" key={'board-row-' + row}>
                      {
                        squares.map(square => {
                          return this.renderSquare(row * 3 + square)
                        })
                      }
                   </div>
          })
        }
      </div>
    );
  }
}

class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      history: [{
        squares: Array(9).fill(null),
        pos: null
      }],
      xIsNext: true,
      stepNumber: 0,
      position: []
    }
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) return;
    squares[i] = this.state.xIsNext ? 'X' : 'O';

    this.setState({
      history: history.concat([{
        squares: squares,
        pos: i
      }]),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) ? false : true
    });
  }

  isBold(step) {
    return this.state.stepNumber === (step) ? 'is-bold' : '';
  }

  calculatePosition(pos) {
    if (typeof pos !== 'number') return null;
    const position = [
      [1, 1], [1, 2], [1, 3],
      [2, 1], [2, 2], [2, 3],
      [3, 1], [3, 2], [3, 3]
    ];
    return position[pos].slice();
  }
  sort() {
    const history = this.state.history.slice().reverse();
    this.setState({
      history: history,
      stepNumber: (history.length) - this.state.stepNumber -1
    });
  }
  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    const moves = history.map((step, move) => {
      let position = this.calculatePosition(step.pos);
      const desc = position ? 'Move to #(' + position + ')' : 'Game is Started';
      return (
        <li key={move}>
          <a href="#" className={this.isBold(move)} onClick={() => this.jumpTo(move)}>{desc}</a>
        </li>
      );
    });
    let status;
    if (winner) {
      status = 'Winner is ' + winner.value;
    } else {
      status = 'Next is ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board 
            value={current.squares}
            lines={winner ? winner.lines : []}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{ status }</div>
          <button onClick={() => this.sort()}>sort</button>
          <ol>{ moves }</ol>
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
