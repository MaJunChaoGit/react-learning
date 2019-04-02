import React, { Component } from 'react';
import {ThemeContext, themes} from './Context/theme.context.js';
import ThemeTogglerButton from './Components/theme-toggler-button.js';

class App extends Component {
  constructor() {
    super();
    
    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark
      }));
    };

    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme
    }
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        <Content></Content>
      </ThemeContext.Provider>
    );
  }
}

function Content() {
  return (
    <div>
      <ThemeTogglerButton />
    </div>
  );
}
export default App;