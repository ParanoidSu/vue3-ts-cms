type FormItemType = 'lable' | 'datepicker' | 'select'

export interface IFormItem {
  field: string
  type: FormItemType
  lable: string
  placeholder?: any
  rules?: any[]
  options?: any[]
  otherOptions?: any
  isHidden?: boolean
}

export interface IForm {
  formItem: IFormItem[]
  lableWidth?: string
  colLayout?: any
  formItemStyle?: any
}
