<template>
  <section class="section" data-id="3">
    <ul class="list">
      <li v-for="(year, index) in works.years" :key="index" class="row">
        <div class="col-xs-3 no-padding-right nomobile">
          <div class="text text--right text--light reveal">
            <span class="item">{{ year.label }}</span>
          </div>
        </div>
        <div class="col-xs-12 col-md-9">
          <div v-for="(project, index1) in year.content" :key="index1" class="project">
            <Link :item="project" />
            <img class="project__image nomobile" :src="project.image" :alt="project.label" />
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
      works: context.$store.state.works
    }
  }
}
</script>
