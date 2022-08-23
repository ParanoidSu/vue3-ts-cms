export const contentTableConfig = {
  propsList: [
    { prop: 'name', label: '商品名称', minWidth: '100px' },
    {
      prop: 'oldPrice',
      label: '原价格',
      minWidth: '100px',
      slotName: 'oldPrice'
    },
    { prop: 'newPrice', label: '现价格', minWidth: '100px' },
    { prop: 'imgUrl', label: '商品图片', minWidth: '100px', slotName: 'image' },
    { prop: 'status', label: '状态', minWidth: '100px', slotName: 'status' },
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
