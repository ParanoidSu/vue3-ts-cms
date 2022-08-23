<template>
  <div class="page-modal">
    <div class="dialog">
      <el-dialog
        v-model="centerDialogVisible"
        title="新建用户"
        width="20%"
        center
        destroy-on-close
      >
        <JlForm v-bind="modalFormConfig" v-model="formData" />
        <slot></slot>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="centerDialogVisible = false">取消</el-button>
            <el-button type="primary" @click="handleConfirmClick"
              >确定</el-button
            >
          </span>
        </template>
      </el-dialog>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import JlForm from '@/base-ui/form'
import { useStore } from 'vuex'

export default defineComponent({
  components: {
    JlForm
  },
  props: {
    modalFormConfig: {
      type: Object,
      required: true
    },
    defaultInfo: {
      type: Object,
      default: () => ({})
    },
    pageName: {
      type: String,
      required: true
    },
    otherInfo: {
      type: Object,
      default: () => ({})
    }
  },

  setup(props) {
    const centerDialogVisible = ref(false)
    const formData = ref<any>({})
    const store = useStore()

    // 监听defaultInfo 点击了编辑按钮后值改变将值赋值给formData
    watch(
      () => props.defaultInfo,
      (newValue) => {
        for (const item of props.modalFormConfig.formItem) {
          formData.value[`${item.field}`] = newValue[`${item.field}`]
        }
      }
    )

    const handleConfirmClick = () => {
      centerDialogVisible.value = false
      if (Object.keys(props.defaultInfo).length) {
        console.log('编辑用户')
        store.dispatch('system/editPageDataAction', {
          pageName: props.pageName,
          editData: { ...formData.value, ...props.otherInfo.value },
          id: props.defaultInfo.id
        })
      } else {
        console.log('新建用户')
        store.dispatch('system/newPageDataAction', {
          pageName: props.pageName,
          newData: { ...formData.value, ...props.otherInfo.value }
        })
      }
    }
    return {
      centerDialogVisible,
      formData,
      handleConfirmClick
    }
  }
})
</script>

<style scoped></style>
