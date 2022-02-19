<template>
  <section class="section row end-xs" data-id="1">
    <div class="col-xs-12 col-md-9">
      <div class="text js-split-text" v-html="bio"></div>
    </div>
    <div class="col-xs-12 col-md-9">
      <div class="text text--light text--italic js-split-text" v-html="quote"></div>
    </div>
    <div class="col-xs-12 col-md-9">
      <div class="text text--light js-split-text" v-html="quoteSource"></div>
    </div>
  </section>
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
