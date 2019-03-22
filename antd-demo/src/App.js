import React, {Component} from 'react';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
// import zhCN from 'antd/lib/locale-provider/zh_CN';
// import moment from 'moment';
// import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import './index.css';
import Button from './Components/Button';
import Icon from './Components/Icon';
import { Typography } from 'antd';
import {Row, Col} from 'antd';
import {Affix} from 'antd';
import {Breadcrumb} from 'antd';
import {Menu} from 'antd';
const { Title }  = Typography;
// moment.locale('zh-cn');

class App extends Component {
  changeHandle(e) {
    
  }
  menuHandleClick = (e) => {

  }
  render() {
    return (
      <div className="container">
        <div className="component button">
          <Button type="primary">primary</Button>
          <Button>default</Button>
          <Button type="dashed">dashed</Button>
          <Button type="dashed" ghost>dashed</Button>
          <Button type="danger">danger</Button>
          <Button type="danger" disabled={true}>danger</Button>
          <Button type="primary" shape="circle" icon="search" ></Button>
          <Button type="primary" shape="circle" icon="search" size="large"></Button>
        </div>
        <div className="component icon">
          <Icon type="skype"></Icon>
          <Icon type="skype" theme="filled"></Icon>
          <Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" />
          <Icon type="download" style={{fontSize: "18px", color: "red"}}></Icon>
        </div>
        <div className="component typography">
          <Title level={4} disabled>我是标题</Title>
          <Title level={4} editable={
            {
              editable: true,
              onChange: (e) => this.editHandle(e)
            }
          }>我是标题</Title>
          <Title level={4} ellipsis={
            {
              rows: 1,
              expandable: true
            }
          }>我是标题</Title>
        </div>
        <div className="grid">
          <Row gutter={16}>
            <Col span={12}>col-12</Col>
            <Col span={12}>col-12</Col>
          </Row>
        </div>
        <div className="component affix">
          <Affix offsetTop={100}>Affix top</Affix>
        </div>
        <div className="component breadcrumb">
          <Breadcrumb>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item><a href="">Application Center</a></Breadcrumb.Item>
            <Breadcrumb.Item><a href="">Application List</a></Breadcrumb.Item>
            <Breadcrumb.Item>An Application</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="menu">
          <Menu
            onClick={this.menuHandleClick}
            mode="horizontal"
            selectedKeys={["mail"]}
          >
            <Menu.Item key="mail">
              <Icon type="mail" />Navigation One
            </Menu.Item>
            <Menu.Item key="app" disabled>
              <Icon type="download" />Navigation Two
            </Menu.Item>
            <Menu.SubMenu title={<span className="submenu-title-wrapper"><Icon type="setting" />Navigation Three - Submenu</span>}>
              <Menu.ItemGroup title="Item 1">
                <Menu.Item key="setting:1">Option 1</Menu.Item>
                <Menu.Item key="setting:2">Option 2</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup title="Item 2">
                <Menu.Item key="setting:3">Option 3</Menu.Item>
                <Menu.Item key="setting:4">Option 4</Menu.Item>
              </Menu.ItemGroup>
            </Menu.SubMenu>
            <Menu.Item key="alipay">
              <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
            </Menu.Item>
          </Menu>
        </div>
      </div>
    )
  }
}

export default App;