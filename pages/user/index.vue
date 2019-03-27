<template>
  <main class="user_contain">
    <div class="bd-lead">
      <section class="container">
        <h1 class="title is-4">ユーザー一覧</h1>
        <section v-if="hasError">Error.</section>
        <section v-else>
          <div v-if="loading">
            Loading...
          </div>
          <div v-else>{{users}}
          </div>
        </section>
      </section>
    </div>
  </main>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      hasError: false,
      loading: false,
      users: null
    }
  },

  methods: {
    async islogin () {
      try {
        let data = await this.$store.dispatch('getSessionId')
        console.log(data)
        if (data) {
          this.getUsermsg()
        } else {
          let msg = confirm('没有等录不能查看，是否登录？')
          if (msg == true) {
            this.$router.push("/login")
          }
        }
      } catch (e) {
        this.hasError = e.message
      }
    },
    getUsermsg () {
      this.loading = true
      axios.get('/api/user/userAll')
        .then(res => {
          this.loading = false
          console.log(res.data)
          this.users = res.data[0]
        })
        .catch(function(error) {
          console.log(error);
          return {
            hasError: true
          }
        })
    }
  },
  created () {
    this.islogin()
  },
}
</script>

<style>
.user_contain {
  min-height: 800px;
}
</style>
