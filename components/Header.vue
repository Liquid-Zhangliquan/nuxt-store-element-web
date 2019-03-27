
<template>
  <header>
    <nav class="navbar is-white has-shadow is-spaced"
         role="navigation"
         aria-label="main navigation">

      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item"
             href="">
            <img src="~/assets/images/logo.png">
          </a>

          <a role="button"
             class="navbar-burger burger"
             aria-label="menu"
             aria-expanded="false"
             data-target="mainNavbar">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="mainNavbar"
             class="navbar-menu">
          <div class="navbar-start">

            <a href="/user"
               class="navbar-item">
              <span class="has-text-danger">
                <i class="fas fa-users fa-fw has-text-red"
                   aria-hidden="true"></i>
              </span>
              查看用户
            </a>

            <a href="/news"
               class="navbar-item">
              <span class="has-text-info">
                <i class="fas fa-calendar-alt fa-fw"
                   aria-hidden="true"></i>
              </span>
              新闻
            </a>

          </div>

          <div class="navbar-end">
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                <span>
                  <i class="fas fa-cogs"></i>
                  系统设置
                </span>
              </a>

              <div class="navbar-dropdown is-right">
                <a class="navbar-item">
                  安全保障
                </a>
                <a class="navbar-item">
                  通知設定
                </a>
                <hr class="navbar-divider">
                <a class="navbar-item">
                  帮助
                </a>
                <a class="navbar-item">
                  关于个人信息保护
                </a>
              </div>
            </div>
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                <span>
                  <i class="fas fa-user"></i>
                </span>
              </a>

              <div class="navbar-dropdown is-right">
                <a class="navbar-item"
                   href="/login">
                  账户登录
                </a>
                <a class="navbar-item">
                  个人中心
                </a>
                <hr class="navbar-divider">
                <a class="navbar-item"
                   @click="logout">
                  注销
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data () {
    return {
      formError: null,
    }
  },
  created () {
    console.log(this.$store.state)
  },
  components: {

  },
  methods: {
    async logout () {
      try {
        await this.$store.dispatch('logout')
        this.$router.push("/login")
      } catch (e) {
        this.formError = e.message
      }
    }
  }
}
</script>