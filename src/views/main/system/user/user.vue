<template>
  <div class="user">
    <page-search
      :searchFormConfig="searchFormConfig"
      @restBtnClick="restBtnClick"
      @queryBtnClick="queryBtnClick"
    />
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="user"
      ref="pageContentRef"
      @editBtnClick="handleEditData"
      @newBtnClick="handleNewData"
    />
    <page-modal
      :modalFormConfig="modalFormConfigRef"
      ref="pageModalRef"
      :defaultInfo="defaultInfo"
      pageName="user"
    ></page-modal>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

import { searchFormConfig } from './config/serach.config'
import { contentTableConfig } from './config/content.config'
import { modalFormConfig } from './config/modal.config'

import PageSearch from '@/base-ui/page-search'
import PageContent from '@/components/page-content/src/page-content.vue'
import PageModal from '@/components/page-modal'

import { usePageSearch } from '@/hooks/use-page-search'
import { usePageModal } from '@/hooks/use-page-modal'

import { useStore } from 'vuex'

export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    PageContent,
    PageModal
  },
  setup() {
    //    const pageContentRef = ref<InstanceType<typeof PageContent>>()

    // const restBtnClick = () => {
    //   pageContentRef.value?.getPageData()
    // }
    // const queryBtnClick = (queryInfo: any) => {
    //   pageContentRef.value?.getPageData(queryInfo)
    // }
    const newBtncallBack = () => {
      const passwordItem = modalFormConfig.formItem.find(
        (item) => item.field === 'password'
      )
      if (passwordItem) {
        passwordItem.isHidden = false
      }
    }
    const editBtncallBack = () => {
      const passwordItem = modalFormConfig.formItem.find(
        (item) => item.field === 'password'
      )
      if (passwordItem) {
        passwordItem.isHidden = true
      }
    }

    // 动态添加部门
    const store = useStore()

    // 添加一个响应式computed副作用函数 把执行过程开在响应式函数里 modalFormConfig更新了就会重新渲染页面
    //
    const modalFormConfigRef = computed(() => {
      const departmentItem = modalFormConfig.formItem.find((item) => {
        return item.field === 'department'
      })
      departmentItem!.options = store.state.entireDepartment.map(
        (item: any) => {
          return { title: item.name, value: item.id }
        }
      )

      const role = modalFormConfig.formItem.find((item) => {
        return item.field === 'role'
      })

      role!.options = store.state.entirRole.map((item: any) => {
        return { title: item.name, value: item.id }
      })

      return modalFormConfig
    })

    const [pageContentRef, restBtnClick, queryBtnClick] = usePageSearch()
    const [pageModalRef, defaultInfo, handleEditData, handleNewData] =
      usePageModal(newBtncallBack, editBtncallBack)

    return {
      searchFormConfig,
      contentTableConfig,
      modalFormConfigRef,
      pageContentRef,
      restBtnClick,
      queryBtnClick,
      handleEditData,
      handleNewData,
      pageModalRef,
      defaultInfo
    }
  }
})
</script>

<style scoped></style>
