<template>
  <section class="section row end-xs" data-id="4">
    <ul class="list col-xs-12 col-md-9">
      <li v-for="(technology, index) in technologies.technology" :key="index">
        <div v-for="(tech, index1) in technology" :key="index1" class="reveal">
          <div class="item text text--light">
            <span>#{{ tech }}</span>
            <span v-if="index1 !== technology.length - 1"> </span>
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
      technologies: context.$store.state.technologies
    }
  }
}
</script>
