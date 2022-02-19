<template>
  <section class="section" data-id="4">
    <ul class="list">
      <li v-for="(technology, index) in technologies.technology" :key="index" class="row">
        <div class="col-xs-3 no-padding-right nomobile">
          <div class="text text--right text--light reveal">
            <span class="item">{{ technology.label }}</span>
          </div>
        </div>
        <div class="col-xs-12 col-md-9">
          <div v-for="(project, index1) in technology.content" :key="index1" class="project">
            <Link :item="project" />
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
import Link from '../components/Link'

export default {
  components: {
    Link
  },
  data(context) {
    return {
      technologies: context.$store.state.technologies
    }
  }
}
</script>
