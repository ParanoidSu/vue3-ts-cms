import { IForm } from '@/base-ui/form'

export const modalFormConfig: IForm = {
  formItem: [
    {
      type: 'lable',
      lable: '用户名',
      placeholder: '请输入用户名',
      rules: [],
      field: 'name'
    },
    {
      type: 'lable',
      lable: '用户密码',
      placeholder: '请输入用户密码',
      rules: [],
      field: 'password',
      isHidden: false
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
      lable: '选择部门',
      placeholder: '请选择部门',
      field: 'department',
      options: []
    },
    {
      type: 'select',
      lable: '选择角色',
      placeholder: '请选择角色',
      field: 'role',
      options: []
    }
  ],
  colLayout: {
    xs: 24
  }
}
