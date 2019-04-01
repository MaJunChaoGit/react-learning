import PropTypes from 'prop-types';
import React, {Component} from 'react';

class Test extends Component {
  render() {
    return (
      <div>{this.props.name}</div>
    );
  }
}

Test.propTypes = {
  // 以下都是JS原生类型
  // name: PropTypes.array,
  // name: PropTypes.bool,
  // name: PropTypes.func,
  // name: PropTypes.number,
  // name: PropTypes.object,
  // name: PropTypes.string,
  // name: PropTypes.symbol,
  // 任何可以被渲染的元素 (包括数字、字符串、子元素或数组)
  // name: PropTypes.node,
  // 一个React元素
  // name: PropTypes.element,
  // 限制只能是某种类型
  // name: PropTypes.instanceOf(Test),
  // 限制属性值是某个特定值之一
  // name: PropTypes.oneOf(['News', 'Photos'])
  // 限制它为列举类型之一的对象
  // name: PropTypes.oneOfType([
  //   PropTypes.string,
  //   PropTypes.number
  // ]),
  // requiredProps: PropTypes.func.isRequired,
  // // 任意类型的数据
  // requiredAny: PropTypes.any.isRequired,
  // 自定义类型验证器, 在oneOfType中不起作用
  // name: function(props, propName, componentName) {
  //   if (!/\d/.test(props[propName])) {
  //     throw new Error('出错啦')
  //   }
  // }
  // 自定义数组类型检测器，挨个检测数组内容
  customArrayProp: PropTypes.arrayOf(function(propValue, key, componentName, location, propFullName) {
    if (!/\d/.test(propValue[key])) {
      return new Error(
        'Invalid prop `' + propFullName + '` supplied to' +
        ' `' + componentName + '`. Validation failed.'
      );
    }
  })
}
Test.defaultProps = {
  name: 'Strange'
}
export default Test;