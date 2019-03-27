<template>
  <div>
    <main-header />
    <nuxt />
    <main-footer />
  </div>
</template>
<script>
import MainHeader from '~/components/Header.vue'
import MainFooter from '~/components/Footer.vue'

export default {
  components: {
    MainHeader,
    MainFooter
  }
}
</script>

<style>
html {
  font-family: Source Sans Pro, -apple-system, BlinkMacSystemFont, Segoe UI,
    Roboto, Helvetica Neue, Arial, sans-serif;
}
</style>