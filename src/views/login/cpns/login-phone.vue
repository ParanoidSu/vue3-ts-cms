<template>
  <div>
    <div>
      <el-form label-width="70px" :rules="rules" :model="phone">
        <el-form-item label="手机号" prop="phone">
          <el-input v-model="phone.num1" />
        </el-form-item>
        <el-form-item label="验证码" prop="verifyCode">
          <div class="verifyCode">
            <el-input v-model="phone.verifyCode" />
            <el-button type="primary" class="getVerifyCode"
              >获取验证码</el-button
            >
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { rules } from '../config/phone-config'

export default defineComponent({
  setup() {
    const phone = reactive({
      num1: '',
      verifyCode: ''
    })

    const LoginPhone = () => {
      console.log('phone登录')
    }

    return {
      phone,
      rules,
      LoginPhone
    }
  }
})
</script>

<style scoped>
.verifyCode {
  display: flex;
}
.getVerifyCode {
  margin-left: 10px;
}
</style>
