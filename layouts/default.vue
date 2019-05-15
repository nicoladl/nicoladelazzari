<template>
  <div class="row">
    <Scroll />
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
import Scroll from '~/components/Scroll'

export default {
  components: {
    Menu,
    Scroll
  }
}
</script>
