import React, { Component } from 'react';
import {Table} from 'antd';

class PurchaseTable extends Component {
  render() {
    return (
      <Table style={{marginTop: '20px'}} {...this.props} bordered pagination={{pageSize: 13, showQuickJumper: true, showSizeChanger: true, showTotal: (total, range) => {
        return `共 ${total} 条`;
      }}}>
      </Table>
    );
  }
}

export default PurchaseTable;
