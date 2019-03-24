import React, { Component } from 'react';
import { Layout } from 'antd';
import NavHeader from './NavHeader';
import PurchaseManager from '../Service/PurchaseManager';
import './index.css';

class PageView extends Component {
  render() {
    const {Header, Content} = Layout;
    return (
      <Layout>
        <Header className="header">
          <NavHeader></NavHeader>
        </Header>
        <Content className="content">
          <PurchaseManager></PurchaseManager>
        </Content>
      </Layout>
    );
  }
}
export default PageView;