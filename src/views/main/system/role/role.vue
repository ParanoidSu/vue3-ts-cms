<template>
  <div class="role">
    <page-search :searchFormConfig="searchFormConfig" />
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="role"
      @editBtnClick="handleEditData"
      @newBtnClick="handleNewData"
    />
    <page-modal
      ref="pageModalRef"
      pageName="role"
      :defaultInfo="defaultInfo"
      :modalFormConfig="modalFormConfig"
      :otherInfo="otherInfo"
    >
      <el-tree
        :data="menu"
        show-checkbox
        node-key="id"
        :props="{ children: 'children', label: 'name' }"
        @check="handleCheckChange"
      />
    </page-modal>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import pageContent from '@/components/page-content/index'
import PageSearch from '@/base-ui/page-search'
import { contentTableConfig } from './config/contentTable.config'
import { searchFormConfig } from './config/serach.config'
import PageModal from '@/components/page-modal'
import { usePageModal } from '@/hooks/use-page-modal'
import { modalFormConfig } from './config/modal.config'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'role',
  components: {
    pageContent,
    PageSearch,
    PageModal
  },
  setup() {
    const [pageModalRef, defaultInfo, handleEditData, handleNewData] =
      usePageModal()
    const store = useStore()
    const menu = computed(() => store.state.entirMenu)
    const otherInfo = ref({})
    const handleCheckChange = (allData: any, currentData: any) => {
      const checkedKeys = currentData.checkedKeys
      const halfCheckedKeys = currentData.halfCheckedKeys
      const menuList = [...checkedKeys, ...halfCheckedKeys]
      otherInfo.value = { menuList }
      console.log(menuList)
    }
    return {
      contentTableConfig,
      searchFormConfig,
      pageModalRef,
      defaultInfo,
      handleEditData,
      handleNewData,
      modalFormConfig,
      menu,
      otherInfo,
      handleCheckChange
    }
  }
})
</script>

<style scoped></style>
