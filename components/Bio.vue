<template>
  <section class="section row end-xs" data-id="1">
    <div class="sidebar sidebar--big nomobile"></div>
    <div class="content content--little">
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
