<template>
  <div class="js-scroller container">
    <h1>test</h1>
  </div>
</template>

<script>
export default {
  components: {},
  mounted() {
    this.$scroll()
  }
}
</script>

<style>
body {
  height: 100vh;
  overflow: hidden;
}

.container {
  height: 200vh;
  background: lime;
}
</style>
