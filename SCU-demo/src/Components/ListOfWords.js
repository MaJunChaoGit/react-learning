import React, {PureComponent, Component} from 'react';

class ListOfWords extends PureComponent  {
  render() {
    return (
      <div>{this.props.words.join(',')}</div>
    );
  }
}

export default class WordAdder extends Component {
  constructor() {
    super();
    this.state = {
      words: ['marklar']
    }
  }
  handleClick = () => {
    const words = this.state.words;
    this.setState({
      words: words.concat(['ass'])
    })
  }
  render()　{
    return (
      <div>
        <button onClick={this.handleClick}>我是按钮</button>
        <ListOfWords words={this.state.words} />
      </div>
    );
  }
}