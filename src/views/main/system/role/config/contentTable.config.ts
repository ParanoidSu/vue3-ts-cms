export const contentTableConfig = {
  propsList: [
    { prop: 'name', label: '角色名', minWidth: '100px' },
    { prop: 'intro', label: '权限介绍', minWidth: '100px' },
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
  title: '角色列表'
}
