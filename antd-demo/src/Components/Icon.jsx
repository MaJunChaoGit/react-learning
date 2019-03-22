import React from 'react';
import {Component} from 'react';
import {Icon} from 'antd';

class MyIcon extends Component {
	render() {
		return (
			<div>
				<Icon {...this.props}>{this.props.children}</Icon>
			</div>
		);
	}
}
export default MyIcon;