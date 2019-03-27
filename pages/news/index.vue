<template>
  <div class="news_contain">
    <News />
  </div>

</template>

<script>
import News from '~/components/news'

export default {
  components: {
    News
  }
}
</script>

<style>
.news_contain {
  min-height: 800px;
}
</style>
