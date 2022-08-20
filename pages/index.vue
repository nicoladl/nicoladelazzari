<template>
  <div class="js-scroller">
    <Intro />
    <Bio />
    <Experience />
    <Projects />
    <Technology />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Intro from '../components/Intro'
import Bio from '../components/Bio'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Technology from '../components/Technology'

export default {
  components: {
    Intro,
    Bio,
    Experience,
    Projects,
    Technology,
    Contact,
    Footer
  },
  mounted() {
    this.$lines()
    this.$scroll()
    this.$reveal()

    console.log('There is nothing to see here')
  }
}
</script>
