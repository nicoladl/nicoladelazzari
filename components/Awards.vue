<template>
  <section class="section" data-id="4">
    <ul class="list">
      <li v-for="(award, index) in awards" :key="index" class="row">
        <div class="col-xs-3 no-padding-right nomobile">
          <div class="text text--right text--light"><br />{{ award.lenght }}</div>
        </div>
        <div class="col-xs-12 col-xs-9">
          <div class="text">
            {{ award.title }}<br /><span class="text--light">{{ award.type }}</span>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data(context) {
    return {
      awards: context.$store.state.awards
    }
  }
}
</script>
