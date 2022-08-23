<template>
  <div class="JlCard">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>{{ title }}</span>
        </div>
      </template>
      <slot></slot>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String,
      default: () => {
        '...'
      },
      required: true
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
