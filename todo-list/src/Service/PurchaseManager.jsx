import React, { Component } from 'react';
import {Row, Col, Divider, Affix, Button} from 'antd';
import PurchaseForm from './PurchaseForm';
import PurchaseTable from './PurchaseTable';
class PurchaseManager extends Component {
  constructor() {
    super();
    this.state = {
      dataSource: []
    }
  }
  handleAction = (text, record, e) => {
    if (e.target.textContent === '删除') {
      let number = record.number;
      let dataSource = [];
      this.state.dataSource.forEach(ds => {
        if (ds.number !== number) {
          dataSource.push(ds);
        }
      });
      this.setState({
        dataSource: dataSource
      });
    }
  }
  handleSubmit = (values) => {
    // toDo
    // 发送请求
    let data = {
      key: '',
      number: 'xxxx',
      workOrder: 'xxxx',
      orderNumber: 'xxxx',
      PONumber: 'xxxx',
      orderStatus: 'xxxx',
      carType: 'xxxx',
      carColor: 'xxxx',
      customer: 'xxxx',
      registration: 'xxxx',
      plateNumber: 'xxxx',
      orderTime: 'xxxx',
      action: ['操作', '查询', '删除'],
    }
    let dataSource = [];
    for (let i = 0; i < 80; i++) {
      let d = Object.assign({}, data);
      d.key = i;
      d.number = i;
      dataSource.push(d);
    }
    this.setState({
      dataSource: dataSource
    });
  }
  render() {
    const columns = [{
      title: '序号',
      dataIndex: 'number',
      key: 'number'
    }, {
      title: '采购工单',
      dataIndex: 'workOrder',
      key: 'workOrder'
    }, {
      title: '订单号',
      dataIndex: 'orderNumber',
      key: 'orderNumber'
    }, {
      title: '采购PO号',
      dataIndex: 'PONumber',
      key: 'PONumber'
    }, {
      title: '订单状态',
      dataIndex: 'orderStatus',
      key: 'orderStatus'
    }, {
      title: '采购车型',
      dataIndex: 'carType',
      key: 'carType'
    }, {
      title: '车身颜色',
      dataIndex: 'carColor',
      key: 'carColor'
    }, {
      title: '客户名称',
      dataIndex: 'customer',
      key: 'customer'
    }, {
      title: '上牌分公司',
      dataIndex: 'registration',
      key: 'registration'
    }, {
      title: '车牌号',
      dataIndex: 'plateNumber',
      key: 'plateNumber'
    }, {
      title: '采购创建时间',
      dataIndex: 'orderTime',
      key: 'orderTime'
    }, {
      title: '操作',
      dataIndex: 'action',
      key: 'action',
      render: (text, record) => {
        return (
          <span>
            {
              text.map((value) => {
                return (
                  <a href="#" key={value} onClick={(e) => {
                    this.handleAction(text, record, e);
                  }}>{value}<Divider type="vertical"/></a>
                )
              })
            }
          </span>
        )
      }
    }];

    return (
      <div>
        <div className="orderButton">
          <Button>新车采购申请</Button>
        </div>
        <PurchaseForm onSubmit={(values) => this.handleSubmit(values)}></PurchaseForm>
        <PurchaseTable columns={columns} dataSource={this.state.dataSource}></PurchaseTable>  
      </div>
    );
  }
}

export default PurchaseManager;
