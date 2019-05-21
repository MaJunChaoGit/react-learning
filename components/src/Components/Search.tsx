import React, { useEffect } from 'react';
import {
  Form, Input, DatePicker, Select
} from 'antd';

export default (props: any) => {

  const { getFieldDecorator } = props.form;
  // decOptions主要是getFieldDecorator方法的参数
  // label为左边文字介绍
  // type是需要渲染的组件类型
  const { id, decOptions, label, type } = props;

  /**
   * 一个工厂方法用于生成所对应的组件
   * @Author   majunchao
   * @DateTime 2019-04-09
   * @version  1.0.0
   * @param    {String}   type ['select', 'date', 'default', 'area']
   * @return   {Component}     返回antd的组件
   */
  
  const getResultByType = () => {
    switch(type) {
      case 'select':
        if (props.props.options) {
          const Option = Select.Option;
          return <Select {...props.props}>
                    {
                      props.props.options.map((item: any) => 
                        <Option 
                          key={item.key} 
                          value={item.value}
                          >
                          {item.label}
                        </Option>)
                    }
                 </Select>
        }
        return null;
      case 'date':
        if (props.props.single) {
          return <DatePicker {...props.props} />
        } else {
          const {RangePicker} = DatePicker;
          return <RangePicker {...props.props} />
        }
      case 'area':
        return <Input.TextArea {...props.props} />
      default:
        return <Input {...props.props} />
    }
  }

  return (
    <Form.Item label={label}> 
      {getFieldDecorator(id, decOptions)(
        getResultByType()
      )}
    </Form.Item>
  );
}
