<template>
  <div class="login-panel">
    <h2 class="title">后台管理系统</h2>
    <el-tabs type="border-card" class="demo-tabs" stretch>
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon :size="20"><UserFilled /></el-icon>
            <span>账号登陆</span>
          </span>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon :size="20"><Iphone /></el-icon>
            <span>手机登陆</span>
          </span>
        </template>
        <login-phone />
      </el-tab-pane>
    </el-tabs>
    <div class="aboutPassword">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button type="primary" class="loginBtn" @click="handleLogin"
      >登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'
import { Iphone, UserFilled } from '@element-plus/icons-vue'

export default defineComponent({
  components: {
    Iphone,
    UserFilled,
    LoginAccount,
    LoginPhone
  },
  setup() {
    const isKeepPassword = ref(false)
    const accountRef = ref<InstanceType <typeof LoginAccount>>()
    const handleLogin = () => {
      accountRef.value?.loginAction()
    }
    return {
      isKeepPassword,
      handleLogin,
      accountRef
    }
  }
})
</script>

<style scoped lang="less">
.login-panel {
  width: 350px;
  margin-bottom: 200px;
  .title {
    text-align: center;
    color: black;
  }
  .demo-tabs > .el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
  }
  .demo-tabs .custom-tabs-label .el-icon {
    vertical-align: middle;
  }
  .demo-tabs .custom-tabs-label span {
    vertical-align: middle;
    margin-left: 4px;
  }
  .aboutPassword {
    display: flex;
    justify-content: space-between;
    padding: 5px;
  }
  .loginBtn {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
