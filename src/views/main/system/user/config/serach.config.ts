import { IForm } from '@/base-ui/form'

export const searchFormConfig: IForm = {
  formItem: [
    {
      type: 'lable',
      lable: 'id',
      placeholder: '请输入id',
      rules: [],
      field: 'id'
    },
    {
      type: 'lable',
      lable: '用户名',
      placeholder: '请输入用户名',
      rules: [],
      field: 'name'
    },
    {
      type: 'lable',
      lable: '真实姓名',
      placeholder: '请输入真实姓名',
      rules: [],
      field: 'realname'
    },
    {
      type: 'lable',
      lable: '电话号码',
      placeholder: '请输入电话号码',
      rules: [],
      field: 'cellphone'
    },

    {
      type: 'select',
      lable: '用户状态',
      placeholder: '请选择用户状态',
      field: 'enable',
      options: [
        {
          title: '启用',
          value: 1
        },
        {
          title: '禁用',
          value: 0
        }
      ]
    },
    {
      type: 'datepicker',
      lable: '创建时间',
      field: 'creatAt',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ],
  lableWidth: '200px',
  formItemStyle: {
    padding: '5px 60px'
  },
  colLayout: {
    xl: 6,
    lg: 8,
    md: 12,
    sm: 24,
    xs: 24
  }
}
