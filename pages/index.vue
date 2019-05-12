<template>
  <div class="js-scroller">
    <Intro />
    <Bio />
    <Experience />
    <Works />
    <Awards />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Intro from '../components/Intro'
import Bio from '../components/Bio'
import Experience from '../components/Experience'
import Works from '../components/Works'
import Awards from '../components/Awards'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default {
  components: {
    Intro,
    Bio,
    Experience,
    Works,
    Awards,
    Contact,
    Footer
  },
  mounted() {
    this.$scroll()
    this.$reveal()
  }
}
</script>
