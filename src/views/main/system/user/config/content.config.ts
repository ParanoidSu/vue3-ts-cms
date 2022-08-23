export const contentTableConfig = {
  propsList: [
    { prop: 'name', label: '姓名', minWidth: '100px' },
    { prop: 'realname', label: '真实姓名', minWidth: '100px' },
    { prop: 'cellphone', label: '电话号码', minWidth: '100px' },
    { prop: 'enable', label: '状态', minWidth: '100px', slotName: 'status' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '200px',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '200px',
      slotName: 'updateAt'
    },
    {
      label: '操作',
      minWidth: '120px',
      slotName: 'handle'
    }
  ],
  showSelectColumn: true,
  showSelectSelection: true,
  title: '用户列表'
}
