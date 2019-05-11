<template>
  <div class="row">
    <div class="col-xs-2 nomobile">
      <Menu />
    </div>
    <div class="col-xs-12 col-md-10">
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
