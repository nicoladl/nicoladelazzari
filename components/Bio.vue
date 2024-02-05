<template>
  <!-- eslint-disable vue/no-v-html -->
  <section class="section row end-xs" data-id="1">
    <div class="col-xs-12 col-md-9">
      <div v-html="bio" class="text js-split-text"></div>
    </div>
    <div class="col-xs-12 col-md-9">
      <div v-html="quote" class="text text--light text--italic js-split-text"></div>
    </div>
    <div class="col-xs-12 col-md-9">
      <div v-html="quoteSource" class="text text--light js-split-text"></div>
    </div>
  </section>
  <!--eslint-enable-->
</template>

<script>
export default {
  data(context) {
    return {
      bio: context.$store.state.about,
      quote: context.$store.state.quote,
      quoteSource: context.$store.state.quoteSource
    }
  }
}
</script>
