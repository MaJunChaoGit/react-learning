import React, {Component} from 'react';
import Columns from './Columns';
class App  extends Component {
  render() {
    return (
      <table>
        <tbody>
          <tr>
            <Columns></Columns>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default App;