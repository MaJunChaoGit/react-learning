import React from 'react';
import TypeInput from './TypeInput';
import { Form, Row, Button } from 'antd';

export default Form.create()((props: any) => {
  const data = [
    {
      id: 'plateNo',
      type: 'base',
      col: 4,
      label: '车牌号',
      props: {
        allowClear: true
      }
    }, 
    {
      id: 'modelName',
      type: 'base',
      col: 4,
      label: '车型',
      props: {
        allowClear: true
      }
    },
    {
      id: 'plateDate',
      type: 'date',
      col: 6,
      label: '上牌时间',
      props: {
        allowClear: true
      }
    }, 
    {
      id: 'branchId',
      type: 'select',
      col: 4,
      label: '占用分公司',
      props: {
        options: [
          {
            key: 'city',
            value: '1',
            label: '南京'
          }
        ]
      }
    }
  ];

  const handleSubmit = (e: any) => {
    e.preventDefault();
    props.form.validateFields((err: any, values: any) => {
      if (!err) {
        console.log(values)
      }
    });
  }
  return (
    <Form onSubmit={handleSubmit} labelCol={{span: 6}} wrapperCol={{span: 18}}>
      <Row>
        {
          data.map((item:any) => {
            return <TypeInput key={item.id} {...item} form={props.form}/>
          })
        }
      </Row>
    </Form>
  )
})
