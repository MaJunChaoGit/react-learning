import React, { Component } from 'react';
import {Form, Row, Col, Button} from 'antd';
import TypeInput from '../Components/TypeInput';

class PurchaseForm extends Component {
  handleReset = () => {
    this.props.form.resetFields();
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        
      }
      values = {
        ...values,
        orderTime: values['orderTime'].map(i => i.format('YYYY-MM-DD'))
      }
      this.props.onSubmit(values);
    });
  }
  render() {
    let firstInputProps = [{
      id: 'order',
      type: 'base',
      label: '采购工单',
      props: {
        allowClear: true
      }
    }, {
        id: 'sales',
        type: 'base',
        label: '销售人员',
        props: {
          allowClear: true
        }
    }, {
        id: 'customer',
        type: 'base',
        label: '客户名称',
        props: {
          allowClear: true
        }
    }, {
        id: 'orderNumber',
        type: 'base',
        label: '订单号',
        props: {
          allowClear: true
        }
    }, {
        id: 'plateNumber',
        type: 'base',
        label: '车牌号',
        props: {
          allowClear: true
        }
    }];
    let secondInputProps = [{
      id: 'orderStatus',
      type: 'select',
      label: '工单状态',
      decOptions: {
        initialValue: 1
      },
      props: {
        options: [{
          value: 1,
          label: '整车采购'
        }, {
          value: 2,
          label: '零件采购'
        }, {
          value: 3,
          label: '维修保养'
        }]
      }
    }, {
      id: 'registration',
      type: 'select',
      label: '上牌分公司',
      decOptions: {
        initialValue: 1
      },
      props: {
        options: [{
          value: 1,
          label: '上海分公司'
        }, {
          value: 2,
          label: '南京分公司'
        }, {
          value: 3,
          label: '武汉分公司'
        }]
      }
    }, {
      id: 'carType',
      type: 'base',
      label: '采购车型',
      props: {
        allowClear: true
      }
    }];
    let dateProps = {
      id: 'orderTime',
      type: 'date',
      label: '采购订单日期',
      props: {
        single: false
      }
    };
    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <Row type="flex" align="middle">
          {
            firstInputProps.map(props => <Col span={4} key={props.id}><TypeInput {...props} form={this.props.form}></TypeInput></Col>)
          }
          <Col span={1} offset={3}>
            <Button block onClick={this.handleReset}>重置</Button>
          </Col>
        </Row>
        <Row type="flex" align="middle">
          {
            secondInputProps.map(props => <Col span={4} key={props.id}><TypeInput {...props} form={this.props.form}></TypeInput></Col>)
          }
          {
            <Col span={8}>
              <TypeInput key={dateProps.id} {...dateProps} form={this.props.form}></TypeInput>
            </Col>
          }
          <Col span={1} offset={3}>
            <Button block onClick={this.handleQuery} type="primary" htmlType="submit">查询</Button>
          </Col>
        </Row>
      </Form>
    );
  }
}
const WrapPurchaseForm = Form.create({ name: 'purchase' })(PurchaseForm);

export default WrapPurchaseForm;
