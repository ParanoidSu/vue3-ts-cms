<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="~@/assets/img/logo.svg" alt="" />
      <transition name="fade">
        <span class="title" v-show="isCollapse === false">Vue3+Ts</span>
      </transition>
    </div>
    <el-menu
      :default-active="defaultValue"
      class="el-menu-vertical-demo"
      background-color="#001529"
      active-text-color="#ffd04b"
      text-color="#fff"
      :collapse="isCollapse"
    >
      <template v-for="item in userMenus" :key="item.id">
        <template v-if="item.type === 1">
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <el-icon>
                <component :is="item.icon"></component>
              </el-icon>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="subItem in item.children" :key="subItem.id">
              <el-menu-item
                :index="subItem.id + ''"
                @click="handleMenuItemClick(subItem)"
              >
                <span>{{ subItem.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <template v-else-if="item.type === 2">
          <el-menu-item :index="item.id + ''">
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import {
  Setting,
  ChatLineRound,
  ShoppingBag,
  View
} from '@element-plus/icons-vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
import { pathMapToMenu } from '@/utils/map-menus'

export default defineComponent({
  props: {
    isCollapse: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Setting,
    ChatLineRound,
    ShoppingBag,
    View
  },
  setup(props) {
    const iconName = 'Search'
    const store = useStore()
    const userMenus = computed(() => store.state.login.userMenus)
    const router = useRouter()
    const route = useRoute()
    const currentRoute = route.path
    const menu = pathMapToMenu(userMenus.value, currentRoute)
    const defaultValue = ref(menu.id + '')
    const handleMenuItemClick = (item: any) => {
      router.push({
        path: item.url ?? '/not-found'
      })
    }
    return {
      store,
      userMenus,
      iconName,
      handleMenuItemClick,
      defaultValue
    }
  }
})
</script>

<style scoped lang="less">
.nav-menu {
  height: 100%;
  background-color: #001529;
  border: 0 !important;
  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    .img {
      height: 100%;
      margin: 0 10px;
    }
    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }
}
.el-menu {
  border-right: 0;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 210px;
  height: 100%;
}
.fade-enter,
.fade-leave {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 2s;
}

.fade-leave-to {
  opacity: 0;
}
.fade-leave-active {
  transition: opacity 0.5s, color 1s;
}
.icons {
  width: 20px;
  height: 20px;
}
</style>
