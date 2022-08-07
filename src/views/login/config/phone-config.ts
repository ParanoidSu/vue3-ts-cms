export const rules = {
  phone: [
    {
      required: true,
      message: '手机号不能为空!',
      trigger: 'blur'
    },
    {
      pattern: /^0{0,1}(13[0-9]|15[7-9]|153|156|18[7-9])[0-9]{8}$/,
      message: '请输入正确的手机号',
      trigger: 'blur'
    }
  ],
  verifyCode: [
    {
      required: true,
      message: '验证码不能为空!',
      trigger: 'blur'
    },
    {
      pattern: /^[0-9]{5}$/,
      message: '请输入正确的验证码',
      trigger: 'blur'
    }
  ]
}
