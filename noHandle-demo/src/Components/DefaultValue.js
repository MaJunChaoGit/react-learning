import React, {Component} from 'react';

class DefaultValue extends Component {
  render() {
    return (
      <div>
        <input type="text" defaultValue={123}/>
        <input type="radio" defaultChecked />
        <input type="checkbox" defaultChecked />
      </div>
    );
  }
}
export default DefaultValue;
