<template>
  <div class="login">
    <login-panle />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LoginPanle from './cpns/login-panel.vue'
export default defineComponent({
  name: 'Login',
  components: {
    LoginPanle
  },

  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url('../../assets/img/login_background.jpg');
  background-size: 100%;
  position: absolute;
}
</style>
