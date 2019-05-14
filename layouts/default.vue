<template>
  <div class="row">
    <div class="sidebar nomobile">
      <Menu />
    </div>
    <div class="content">
      <nuxt />
    </div>
  </div>
</template>

<script>
import Menu from '~/components/Menu'

export default {
  components: {
    Menu
  }
}
</script>
