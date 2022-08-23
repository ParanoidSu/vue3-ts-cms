<template>
  <div class="page-content">
    <JlTable
      v-bind="contentTableConfig"
      :listData="dataList"
      :countData="dataCount"
      v-model:page="pageInfo"
    >
      <!-- header中的插槽 -->
      <template #headerHandle>
        <el-button type="primary" @click="newBtnClick">新建用户</el-button>
      </template>

      <!-- 列中的插槽 -->
      <template #status="scope">
        <el-button
          :type="scope.row.enable ? 'success' : 'danger'"
          plain
          size="small"
          >{{ scope.row.enable ? '启用' : '禁用' }}</el-button
        >
      </template>
      <template #updateAt="scope">
        <span>{{ $filters.formatTime(scope.row.updateAt) }}</span>
      </template>
      <template #createAt="scope">
        <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
      </template>
      <template #handle="scope">
        <div class="handle_btns">
          <el-button
            type="primary"
            size="small"
            class="handle-btns-edit"
            @click="editBtnClick(scope.row)"
          >
            <el-icon><Edit /></el-icon>&nbsp; 编辑</el-button
          >
          <el-button
            type="danger"
            size="small"
            @click="handleDeleteClick(scope.row)"
          >
            <el-icon><Delete /></el-icon>&nbsp;删除</el-button
          >
        </div>
      </template>

      <template
        v-for="item in otherPropSlots"
        :key="item.prop"
        #[item.slotName]="scope"
      >
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>
    </JlTable>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from 'vue'
import { useStore } from 'vuex'
import { Delete, Edit } from '@element-plus/icons-vue'
import JlTable from '@/base-ui/table'

export default defineComponent({
  components: {
    JlTable,
    Delete,
    Edit
  },
  props: {
    contentTableConfig: {
      type: Object,
      required: true
    },
    pageName: {
      type: String,
      required: true
    }
  },
  emits: ['newBtnClick', 'editBtnClick'],
  setup(props, { emit }) {
    // const userCount = computed(() => store.state.system.userCount)
    const store = useStore()

    const pageInfo = ref({ currentPage: 1, pageSize: 10 })

    watch(pageInfo, () => getPageData())

    // // 有接口情况下应该派发发请求
    const getPageData = (queryInfo = {}) => {
      // store.dispatch('system/getPageListAction', {
      //   pageName: props.pageName,
      //   queryInfo: {
      //     offset: pageInfo.value.currentPage -1 * pageInfo.value.pageSize,
      //     size: pageInfo.value.pageSize,
      //     ...queryInfo
      //   }
      // })
    }

    getPageData()

    //从vuex获取数据

    const dataList = computed(() => {
      return store.getters[`system/pageListData`](props.pageName)
    })

    const dataCount = computed(() => {
      return store.getters[`system/pageListCount`](props.pageName)
    })

    // 动态插入插槽
    const otherPropSlots = props.contentTableConfig.propsList.filter(
      (item: any) => {
        if (item.slotName === 'status') return false
        if (item.slotName === 'createAt') return false
        if (item.slotName === 'updateAt') return false
        if (item.slotName === 'handle') return false
        return true
      }
    )

    // 删除||编辑||新建操作
    const handleDeleteClick = (item: any) => {
      store.dispatch('system/deletePageListAction', {
        pageName: props.pageName,
        id: item.id
      })
    }

    const newBtnClick = () => {
      emit('newBtnClick')
    }

    const editBtnClick = (item: any) => {
      emit('editBtnClick', item)
    }

    return {
      dataList,
      getPageData,
      dataCount,
      pageInfo,
      otherPropSlots,
      handleDeleteClick,
      newBtnClick,
      editBtnClick
    }
  }
})
</script>

<style scoped>
.page-content {
  border-top: #f3f3f3 solid 20px;
}
</style>
