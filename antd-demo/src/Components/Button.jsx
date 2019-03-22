import React from 'react';
import {Component} from 'react';
import {Button} from 'antd';

class MyButton extends Component {
	render() {
		return (
			<div>
				<Button {...this.props}>{this.props.children}</Button>
			</div>
		);
	}
}
export default MyButton;