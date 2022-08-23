import { IForm } from '@/base-ui/form'

export const modalFormConfig: IForm = {
  formItem: [
    {
      type: 'lable',
      lable: '角色名',
      placeholder: '请输入角色名',
      rules: [],
      field: 'name'
    },
    {
      type: 'lable',
      lable: '权限介绍',
      placeholder: '角色权限介绍',
      rules: [],
      field: 'intro',
      isHidden: false
    }
  ],
  colLayout: {
    xs: 24
  }
}
