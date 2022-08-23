<template>
  <div class="table">
    <div class="header">
      <slot name="header">
        <div class="title">{{ title }}</div>
        <div class="handle">
          <slot name="headerHandle"></slot>
        </div>
      </slot>
    </div>
    <el-table :data="listData" border style="width: 100%" v-bind="childPorps">
      <el-table-column
        align="center"
        type="selection"
        v-if="showSelectSelection"
        width="80"
      ></el-table-column>
      <el-table-column
        label="序号"
        align="center"
        type="index"
        v-if="showSelectColumn"
        width="80"
      ></el-table-column>
      <template v-for="listItem in propsList" :key="listItem.prop">
        <el-table-column v-bind="listItem" align="center" show-overflow-tooltip>
          <template #default="scope">
            <slot :name="listItem.slotName" :row="scope.row">
              {{ scope.row[listItem.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer">
      <slot name="footer">
        <el-pagination
          v-model:currentPage="page.currentPage"
          v-model:page-size="page.pageSize"
          :page-sizes="[10, 20, 30]"
          layout="total, sizes, prev, pager, next, jumper"
          :total="countData"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { PropsList } from './type'

export default defineComponent({
  props: {
    title: {
      type: String,
      default: ''
    },
    listData: {
      type: Array,
      required: true
    },
    countData: {
      type: Number,
      required: true
    },
    propsList: {
      type: Array as unknown as PropType<[PropsList]>,
      required: true
    },
    showSelectColumn: {
      type: Boolean,
      default: false
    },
    showSelectSelection: {
      type: Boolean,
      default: false
    },
    page: {
      type: Object,
      default: () => ({ pageSize: 10, currentPage: 1 })
    },
    childPorps: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ['seletChange', 'update:page'],
  setup(props, { emit }) {
    const handleSizeChange = (pageSize: number) => {
      emit('update:page', { ...props.page, pageSize })
    }

    const handleCurrentChange = (currentPage: number) => {
      emit('update:page', { ...props.page, currentPage })
    }

    return {
      handleSizeChange,
      handleCurrentChange
    }
  }
})
</script>

<style scoped lang="less">
.header {
  display: flex;
  justify-content: space-between;
  padding: 0 5px;
  height: 45px;
  align-items: center;

  .title {
    font-size: 20px;
    font-weight: 700;
  }

  .handle {
    align-items: center;
    margin-right: 60px;
  }
}
.footer {
  display: flex;
  justify-content: right;
  padding-top: 15px;
  padding-bottom: 15px;

  .el-pagination {
    text-align: right;
  }
}
</style>
