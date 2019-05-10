<template>
  <section class="section" data-id="3">
    <ul>
      <li v-for="(year, index) in works.years" :key="index" class="row">
        <div class="col-xs-3 no-padding-right">
          <div class="text text--right text--light">{{ year.label }}</div>
        </div>
        <div class="col-xs-9">
          <div v-for="(project, index) in year.content" :key="index" class="project">
            <a :href="project.url" target="_blank">
              <p class="text">{{ project.label }}</p>
            </a>
            <img class="project__image" :src="project.image" :alt="project.label" />
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data(context) {
    console.log(context.$store.state.works)
    return {
      works: context.$store.state.works
    }
  }
}
</script>
