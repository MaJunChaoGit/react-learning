import React, {Component} from 'react';
import {ThemeContext} from '../Context/theme.context.js';

function ThemeTogglerButton() {
  return (
    <ThemeContext.Consumer>
      {
        ({theme, toggleTheme}) => (
          <button
            onClick={toggleTheme}
            style={{backgroundColor: theme.background}}
          >
          Toggle Theme
          </button>
        )
      }
    </ThemeContext.Consumer>
  );
}
export default ThemeTogglerButton;
