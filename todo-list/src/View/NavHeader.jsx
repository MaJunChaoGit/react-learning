import React, { Component } from 'react';
import {Breadcrumb} from 'antd';

class NavHeader extends Component {

  render() {
    return (
      <Breadcrumb>
        <Breadcrumb.Item>车务管理</Breadcrumb.Item>
        <Breadcrumb.Item>新车采购管理</Breadcrumb.Item>
      </Breadcrumb>
    );
  }
}
export default NavHeader;