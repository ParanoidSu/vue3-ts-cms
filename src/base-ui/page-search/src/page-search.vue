<template>
  <div class="page-search">
    <JlForm v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h2 class="header">高级检索</h2>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button @click="handleResetClick">
            <el-icon><Refresh /></el-icon>
            重置
          </el-button>

          <el-button type="primary" @click="handleSearchClick">
            <el-icon><Search /></el-icon>
            搜索</el-button
          >
        </div>
      </template>
    </JlForm>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import JlForm from '@/base-ui/form'
import { Search, Refresh } from '@element-plus/icons-vue'

export default defineComponent({
  props: {
    searchFormConfig: {
      type: Object,
      required: true
    }
  },
  components: {
    JlForm,
    Search,
    Refresh
  },
  emits: ['restBtnClick', 'queryBtnClick'],
  setup(props, { emit }) {
    // 动态设定formData
    const formItems = props.searchFormConfig.formItem

    const formOriginData: any = []
    for (const item of formItems) {
      formOriginData[item.field] = ''
    }
    const formData = ref(formOriginData)

    // if (formData.value.enable === '启用') {
    //   console.log(formData.value.enable);

    // }

    const handleResetClick = () => {
      // for (const key in formOriginData) {
      // formData.value[`${key}`] = formOriginData[key]
      formData.value = formOriginData
      emit('restBtnClick')
      // }
    }

    const handleSearchClick = () => {
      emit('queryBtnClick', formData.value)
    }

    return {
      formData,
      handleResetClick,
      handleSearchClick
    }
  }
})
</script>

<style scoped>
.header {
  color: skyblue;
  text-align: center;
}
.handle-btns {
  text-align: right;
  padding: 0 60px 20px 0;
}
</style>
