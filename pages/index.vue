<template>
  <div class="js-scroller">
    <Intro />
    <Bio />
    <Experience />
    <Works />
    <Awards />
    <Contact />
  </div>
</template>

<script>
import Intro from '../components/Intro'
import Bio from '../components/Bio'
import Experience from '../components/Experience'
import Works from '../components/Works'
import Awards from '../components/Awards'
import Contact from '../components/Contact'

export default {
  components: {
    Intro,
    Bio,
    Experience,
    Works,
    Awards,
    Contact
  },
  mounted() {
    this.$scroll()
  }
}
</script>
