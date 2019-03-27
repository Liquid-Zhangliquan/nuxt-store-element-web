<template>
  <el-row class="login"
          v-loading="waitLoading">
    <el-col :span="6"
            :offset="9">
      <el-form ref="loginForm"
               label-width="100px"
               class="demo-ruleForm">
        <el-form-item label="账号">
          <el-input type="text"
                    ref="username"
                    value="chenzhao" />
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password"
                    value="123456"
                    ref="password"
                    auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary"
                     @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>

export default {
  name: 'Login',
  layout: 'clean',
  data () {
    return {
      formError: null,
      waitLoading: false
    };
  },
  created () {
    console.log(this.$store.state)
  },
  components: {

  },
  methods: {
    async login () {
      try {
        this.waitLoading = true
        await this.$store.dispatch('login', {
          username: this.$refs.username.value,
          password: this.$refs.password.value
        })
        this.waitLoading = false
        this.formError = null
        console.log(this.$store.state)
        this.$router.push("/")
      } catch (e) {
        this.formError = e.message
      }
    },
    async logout () {
      try {
        await this.$store.dispatch('logout')
      } catch (e) {
        this.formError = e.message
      }
    }
  }
}
</script>


<style scoped>
.login {
  margin-top: 280px;
}
</style>
