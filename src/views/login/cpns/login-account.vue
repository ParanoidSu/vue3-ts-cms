<template>
  <div>
    <el-form label-width="70px" :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { ElForm } from 'element-plus/lib/components'
import { defineComponent, reactive, ref } from 'vue'
import { rules } from '../config/account-config'
import LocalCache from '@/utils/cache'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const store = useStore()
    const router = useRouter()
    const account = reactive({
      name: LocalCache.getCache('name') ?? '',
      password: LocalCache.getCache('password') ?? ''
    })

    const formRef = ref<InstanceType<typeof ElForm>>()

    const loginAction = (isKeepPassword: boolean) => {
      formRef.value?.validate((validate) => {
        if (validate) {
          // 1 验证是否需要保存账号密码
          if (isKeepPassword) {
            LocalCache.setCache('name', account.name)
            LocalCache.setCache('password', account.password)
            LocalCache.setCache('token', 'dfadfasffaff')
            LocalCache.setCache('userInfo', { name: 'sjl' })
            LocalCache.setCache('userMenus', [
              {
                id: 38,
                name: '系统总览',
                sort: 1,
                type: 1,
                url: '/main/analysis',
                icon: 'View',
                children: [
                  {
                    id: 138,
                    name: '核心技术',
                    sort: 2,
                    type: 2,
                    url: '/main/analysis/dashboard'
                  },
                  {
                    id: 139,
                    name: '商品统计',
                    sort: 2,
                    type: 2,
                    url: '/main/analysis/overview'
                  }
                ]
              },
              {
                id: 48,
                name: '系统管理',
                sort: 1,
                type: 1,
                url: '/main/system',
                icon: 'Setting',
                children: [
                  {
                    id: 149,
                    name: '用户管理',
                    sort: 2,
                    type: 2,
                    url: '/main/system/user'
                  },
                  {
                    id: 140,
                    name: '部门管理',
                    sort: 2,
                    type: 2,
                    url: '/main/system/department'
                  },
                  {
                    id: 141,
                    name: '菜单管理',
                    sort: 2,
                    type: 2,
                    url: '/main/system/menu'
                  },
                  {
                    id: 142,
                    name: '角色管理',
                    sort: 2,
                    type: 2,
                    url: '/main/system/role'
                  }
                ]
              },
              {
                id: 50,
                name: '商品中心',
                sort: 1,
                type: 1,
                url: '/main/product',
                icon: 'ShoppingBag',
                children: [
                  {
                    id: 158,
                    name: '商品类别',
                    sort: 2,
                    type: 2,
                    url: '/main/product/category'
                  },
                  {
                    id: 159,
                    name: '商品信息',
                    sort: 2,
                    type: 2,
                    url: '/main/product/goods'
                  }
                ]
              },
              {
                id: 60,
                name: '随便聊聊',
                sort: 1,
                type: 1,
                url: '/main/story',
                icon: 'ChatLineRound',
                children: [
                  {
                    id: 168,
                    name: '你的故事',
                    sort: 2,
                    type: 2,
                    url: '/main/story/chat'
                  },
                  {
                    id: 169,
                    name: '故事列表',
                    sort: 2,
                    type: 2,
                    url: '/main/story/list'
                  }
                ]
              }
            ])
          } else {
            LocalCache.deleteCache('name')
            LocalCache.deleteCache('password')
          }
          // 2 运行登录逻辑
        }
        store.dispatch('login/accountLoginAction', { ...account })
        router.push('/main')
      })
    }

    return {
      account,
      rules,
      loginAction,
      formRef
    }
  }
})
</script>

<style scoped></style>
