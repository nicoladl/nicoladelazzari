<template>
  <section class="section row end-xs">
    <div class="col-xs-9">
      <div class="text">{{ bio }}</div>
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
