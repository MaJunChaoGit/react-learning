import React, { Component } from 'react';
import './App.css';

import zhCN from 'antd/lib/locale-provider/zh_CN';
import {LocaleProvider} from 'antd';
import PageView from './View/index';
class App extends Component {

  render() {
    return (
      <LocaleProvider locale={zhCN}>
        <PageView></PageView>
      </LocaleProvider>  
    );
  }
}


export default App;
