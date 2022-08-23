import { ref } from 'vue'
import PageModal from '@/components/page-modal'

type CallbackType = () => void

export function usePageModal(newCB?: CallbackType, editCB?: CallbackType) {
  const pageModalRef = ref<InstanceType<typeof PageModal>>()

  const defaultInfo = ref({})

  // @editBtnClick="handleEditData" editBtnClick

  const handleEditData = (item: any) => {
    if (pageModalRef.value) {
      pageModalRef.value.centerDialogVisible = true
      defaultInfo.value = { ...item }
    }
    editCB && editCB()
  }

  //@newBtnClick="handleNewData" newBtnClick是emit传来的固定名字
  const handleNewData = () => {
    defaultInfo.value = ''
    if (pageModalRef.value) {
      pageModalRef.value.centerDialogVisible = true
    }
    newCB && newCB()
  }
  return [pageModalRef, defaultInfo, handleEditData, handleNewData]
}
