import React, {useEffect, useState} from 'react';
import {Form, Row, Button, Col} from 'antd';
import TypeInput, {ITypeInput} from './TypeInput';

interface IFilters {
  config: Array<ITypeInput>,
  labelCol?: object,
  wrapperCol?: object,
  queryParams?: object,
  success?: Function,
  error?: Function,
  reset?: Function,
  buttonGroup?: any,
  list?: any,
  [propName: string]: any
}

export default Form.create()((props: any) => {
  let colCount = 0;
  const [condition, setCondition] = useState({});
  const {config, labelCol, wrapperCol, reset, success, error, queryParams} = props;

  const handleSubmit = (e: any) => {
    e.preventDefault();
    props.form.validateFields((err: any, values: any) => {
      if (!err) {
        success && success(values);
        // toDo 请求queryParams中的path接口, 接口调用成功后setCondition保存条件
      } else {
        error && error(err, values);
      }
    });
  }

  const handleReset = () => {
    props.form.resetFields();
    props.reset();
  }
  useEffect(() => {
    
  })
  return (
    <Form 
      onSubmit={handleSubmit} 
      labelCol={labelCol ? labelCol : {span: 4}}
      wrapperCol={wrapperCol ? wrapperCol : {span: 16}}
    >
      <Row>
        <Col span={20}>
          {
            config.map((config:any) => {
              return <TypeInput key={config.id} {...config} form={props.form}/>
            })
          }
        </Col>
        <Col span={4}>
          <Row>
            <Button onClick={handleReset}>重置</Button>
            <Button type="primary" onClick={handleSubmit}>查询</Button>
          </Row>
          {
            props.buttonGroup && <Row>
              {props.buttonGroup}
            </Row>
          }
        </Col>
      </Row>
      {
        props.list && <Row>
          {props.list}
        </Row>
      }
    </Form>
  )
})
