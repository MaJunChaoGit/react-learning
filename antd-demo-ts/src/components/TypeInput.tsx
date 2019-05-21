import React, {useEffect} from 'react';
import {
  Form, Input, DatePicker, Select, Col
} from 'antd';
import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';
/**
 * select中的Option选项
 */
interface IOption {
  key: string | number,
  value: string | number,
  label: string
}

export declare interface ITypeInput {
  id: string | number,
  type: 'select' | 'date' | 'area' | 'base', // type是需要渲染的组件类型
  form: any,
  label?: string | undefined,  // label为左边文字介绍
  col?: string | number,
  decOptions?: any,           // decOptions主要是getFieldDecorator方法的参数
  props?: {
    options?: Array<IOption>, // 如果type为select的话需要
    single?: boolean,         // 如果type为date的话需要
    [propName: string]: any
  }
}

export default (props: ITypeInput) => {

  const { getFieldDecorator } = props.form;

  const { id, decOptions, label, type, col } = props;

  /**
   * 一个工厂方法用于生成所对应的组件
   * @Author   majunchao
   * @DateTime 2019-04-09
   * @version  1.0.0
   * @param    {String}   type ['select', 'date', 'default', 'area']
   * @return   {Component}     返回antd的组件
   */
  const getResultByType = () => {
    const config: any = props.props;

    switch(type) {
      case 'select':
        if (config.options) {
          const Option = Select.Option;
          return <Select {...config}>
                    {
                      config.options.map((item: IOption) => 
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
        if (config.single) {
          return <DatePicker {...config} />
        } else {
          return <DatePicker.RangePicker {...config} />
        }
      case 'area':
        return <Input.TextArea {...config} />
      case 'base':
        return <Input {...config} />
    }
  }

  useEffect(() => {
    if (!props['props']) props['props'] = {};

    if (props.type === 'select') {
      // toDo 通过字典读取选项
    }
  })

  return (
    <Col span={col ? col : 4}>
      <Form.Item label={label}> 
        {getFieldDecorator(id, decOptions)(
          getResultByType()
        )}
      </Form.Item>
    </Col>
  );
}
