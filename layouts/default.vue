<template>
  <div class="row">
    <div class="col-xs-2">
      <Menu />
    </div>
    <div class="col-xs-10">
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
