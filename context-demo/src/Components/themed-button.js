import React, { Component } from 'react';
import {ThemeContext} from '../Context/theme.context.js';

function ThemedButton(props) {
  return (
    <ThemeContext.Consumer>
      {
        theme => (
          <button
            {...props}
            style={{backgroundColor: theme.background}}
          />
        )
      }
    </ThemeContext.Consumer>
  );
}
export default ThemedButton;
