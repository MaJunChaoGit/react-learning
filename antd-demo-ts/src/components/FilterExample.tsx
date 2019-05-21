import React, {useEffect, useState} from 'react';
import Filter from './Filter';


export default (props: any) => {
  const data = {
    config: [
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
        col: 8,
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
      },
    ],
    labelCol: {span: 8},
    wrapperCol: {span: 12},
    success: (values: any) => { console.log(values);},
    error: (err: any) => { console.log(err);},
    reset: () => {},
  }

  return (
    <Filter {...data}></Filter>
  )
}