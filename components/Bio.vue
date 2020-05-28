<template>
  <section class="section row end-xs" data-id="1">
    <div class="col-xs-12 col-md-9">
      <div class="text js-split-text" v-html="bio"></div>
    </div>
  </section>
</template>

<script>
export default {
  data(context) {
    return {
      bio: context.$store.state.bio
    }
  }
}
</script>
