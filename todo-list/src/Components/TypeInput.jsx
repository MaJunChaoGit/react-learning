import React, { Component } from 'react';
import {Input, Select, DatePicker, Form} from 'antd';

class TypeInput extends Component {

  getInputTypeof(type) {
    const props = this.props.props;
    switch(type) {
      case 'select':
        if (props.options) {
          const Option = Select.Option;
          return <Select {...props}>
                    {
                      props.options.map(item => <Option key= {item.value} value={item.value}>{item.label}</Option>)
                    }
                 </Select>
        }
        return null;
      case 'date':
        if (props.single) {
          return <DatePicker {...props} />
        } else {
          const {RangePicker} = DatePicker;
          return <RangePicker {...props} />
        }
      default:
        return <Input {...props} />
    }
  }
  render() {
    const {getFieldDecorator} = this.props.form;
    const {id, decOptions, type, label} = this.props;
    let input = this.getInputTypeof(type);

    return (
      <Form.Item label={label}> 
        {getFieldDecorator(id, decOptions)(
          input
        )}
      </Form.Item>
    );
  }
}

export default TypeInput;
