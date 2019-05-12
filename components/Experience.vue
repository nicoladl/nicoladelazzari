<template>
  <section class="section" data-id="2">
    <ul class="list">
      <li v-for="(experience, index) in experiences" :key="index" class="row">
        <div class="col-xs-3 no-padding-right nomobile">
          <div class="text text--right text--light">
            <span class="reveal">
              <span class="item">{{ experience.dateStart }}</span>
            </span>
            <span class="reveal">
              <span class="item">{{ experience.dateEnd }}</span>
            </span>
          </div>
        </div>
        <div class="col-xs-12 col-md-9">
          <div class="text reveal">
            <span class="item">{{ experience.label }}</span>
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
      experiences: context.$store.state.experiences
    }
  }
}
</script>
