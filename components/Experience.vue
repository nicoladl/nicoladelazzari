<template>
  <section class="section" data-id="2">
    <h2 class="text text--light pbottom reveal nodesktop">
      <span class="item">Experience</span>
    </h2>
    <ul class="list">
      <li v-for="(experience, index) in experiences" :key="index" class="row">
        <div class="sidebar sidebar--big nomobile">
          <div class="text text--right text--light">
            <span class="reveal">
              <span class="item">{{ experience.dateStart }}</span>
            </span>
            <span class="reveal">
              <span class="item">{{ experience.dateEnd }}</span>
            </span>
          </div>
        </div>
        <div class="content content--little">
          <h2 class="text text--light text--small reveal nodesktop">
            <span class="item">{{ experience.dateStart }} {{ experience.dateEnd }}</span>
          </h2>
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
