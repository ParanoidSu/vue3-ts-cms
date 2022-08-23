export const contentTableConfig = {
  propsList: [
    { prop: 'name', label: '商品名称', minWidth: '100px' },
    { prop: 'type', label: '类型', minWidth: '100px', slotName: 'oldPrice' },
    { prop: 'url', label: '菜单url', minWidth: '100px' },
    { prop: 'imgUrl', label: '商品图片', minWidth: '100px', slotName: 'image' },
    {
      prop: 'permission',
      label: '按钮权限',
      minWidth: '100px',
      slotName: 'status'
    },
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
  showSelectColumn: false,
  showSelectSelection: false,
  title: '菜单列表',
  childPorps: {
    rowKey: 'id',
    treeProp: {
      children: 'children'
    }
  }
}
