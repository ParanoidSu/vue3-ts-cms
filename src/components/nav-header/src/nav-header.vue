<template>
  <div class="nav-header">
    <el-icon>
      <span class="fold-menu" @click="handleFoldClick">
        <Fold v-show="isFold === false" />
        <Expand v-show="isFold === true" />
      </span>
    </el-icon>
    <div class="content">
      <div>
        <JlBreadcrumb :breadcrumds="breadcrumds"></JlBreadcrumb>
      </div>
      <div class="userInfo">
        <el-dropdown class="drop-down">
          <span class="el-dropdown-link">
            <el-avatar
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
              size="default"
            />
            <span class="userName">{{ name }}</span>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="handleExitClick"
                >退出登录</el-dropdown-item
              >
              <el-dropdown-item disabled>用户管理</el-dropdown-item>
              <el-dropdown-item divided>权限管理</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { Fold, Expand } from '@element-plus/icons-vue'
import { useStore } from 'vuex'
import JlBreadcrumb, { IBreadcrumb } from '@/base-ui/breadcrumd'
import { pathMapBreadcrumbs } from '@/utils/map-menus'
import { useRoute } from 'vue-router'
import LocalCache from '@/utils/cache'
import router from '@/router'

export default defineComponent({
  emits: ['foldChange'],
  components: {
    Fold,
    Expand,
    JlBreadcrumb
  },
  setup(props, { emit }) {
    const isFold = ref(false)
    const store = useStore()
    const name = computed(() => {
      return store.state.login.userInfo.name
    })
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }

    const breadcrumds = computed(() => {
      const userMenus = store.state.login.userMenus
      const router = useRoute()
      const currentPath = router.path
      return pathMapBreadcrumbs(userMenus, currentPath)
    })

    const handleExitClick = () => {
      LocalCache.deleteCache('token')
      router.push('/main')
    }
    return {
      isFold,
      handleFoldClick,
      name,
      breadcrumds,
      handleExitClick
    }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  width: 100%;
  align-items: center;
  .fold-menu {
    font-size: 30px;
    cursor: pointer;
    display: flex;
  }
  .content {
    flex: 1;
    justify-content: space-between;
    display: flex;
    margin-left: 20px;
    align-items: center;

    .userInfo {
      margin-right: 15px;
      cursor: pointer;

      .userName {
        margin-left: 8px;
      }
    }
  }
}
.el-dropdown-link {
  display: flex;
  align-items: center;
}
</style>
