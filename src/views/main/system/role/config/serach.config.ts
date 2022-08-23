import { IForm } from '@/base-ui/form'

export const searchFormConfig: IForm = {
  formItem: [
    {
      type: 'lable',
      lable: '角色名',
      placeholder: '请输入角色名',
      rules: [],
      field: 'role'
    },
    {
      type: 'lable',
      lable: '权限介绍',
      placeholder: '请输入权限介绍',
      rules: [],
      field: 'handle'
    },
    {
      type: 'datepicker',
      lable: '创建时间',
      field: 'creatTime',
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
  }
}
