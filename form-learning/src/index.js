import React from 'react';
import ReactDOM from 'react-dom';

// 使用受控组件来创建表单类input组件
// class NameForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: ''};
//   }

//   handleChange = (event) => {
//     this.setState({value: event.target.value.toUpperCase()});
//   }
//   handleSubmit = (event) => {
//     alert('A name was submitted: ' + this.state.value);
//     event.preventDefault();
//   }
//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name:
//           <input type="text" value={this.state.value} onChange={this.handleChange}/>
//         </label>
//         <input type="submit" value="Submit"/>
//       </form>
//     );
//   }
// }
// ReactDOM.render(
//   <NameForm></NameForm>,
//   document.getElementById('root')
// );

// textarea组件
// class EssayForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: 'Please write an essay about your favorite DOM element.'
//     };
//   }

//   handleChange = (event) => {
//     this.setState({value: event.target.value});
//     event.preventDefault();
//   }
//   handleSubmit = (event) => {
//     alert('An essay was submitted: ' + this.state.value);
//     event.preventDefault();
//   }
//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name:
//           <textarea type="" value={this.state.value} onChange={this.handleChange}/>
//         </label>
//         <input type="submit" value="Submit"/>
//       </form>
//     );
//   }
// }

// ReactDOM.render(
//   <EssayForm></EssayForm>,
//   document.getElementById('root')
// );

// select组件
// class FlavorForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: 'coconut'};
//   }
//   handleChange = (event) => {
//     this.setState({value: event.target.value});
//   }
//   handleSubmit = (event) => {
//     alert('Your favorite flavor is: ' + this.state.value);
//     event.preventDefault();
//   }
//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//         Pick your favorite La Croix flavor;
//           <select value={this.state.value} onChange={this.handleChange}>
//             <option value="grapefruit">Grapefruit</option>
//             <option value="lime">Lime</option>
//             <option value="coconut">Coconut</option>
//             <option value="mango">Mango</option>
//           </select>
//         </label>
//         <input type="submit" value="Submit"/>
//       </form>
//     );
//   }
// }
// ReactDOM.render(
//   <FlavorForm></FlavorForm>,
//   document.getElementById('root')
// );

// 当你有处理多个受控的input元素时,你可以通过给每个元素添加一个name属性,来根据event.target.name来决定到底要处理什么
class Resevation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };
  }
  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    })
  }
   render() {
    return (
      <form>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}
ReactDOM.render(
  <Resevation></Resevation>,
  document.getElementById('root')
);