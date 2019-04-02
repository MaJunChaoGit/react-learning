import React, {Component} from 'react';

export const {Provider, Consumer} = React.createContext();
class ThemeProvider extends Component {
  state = {
    theme: redTheme
  }

  switchTheme = (theme) => {
    this.setState({theme});
  }

  render() {
    return (
      <Provider value={{theme: this.state.theme, switchTheme: this.switchTheme}}>
        {this.props.children}
      </Provider>
    );
  }
}
const redTheme = {
  color: 'red'
}
const greenTheme = {
  color: 'green'
}

function Content() {
  return (
    <Consumer>
      {
        ({theme, switchTheme}) => 
        <div>
          <h1 style={theme}>Hello World</h1>
          <button onClick={() => switchTheme(redTheme)}>Red Theme</button>
          <button onClick={() => switchTheme(greenTheme)}>Green Theme</button>
        </div>
      }
    </Consumer>
  );
}
function Header() {
  return (
    <h1>我是头部{Math.random()}</h1>
  );
}

class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <div className="App">
          <Header></Header>
          <Content></Content>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;