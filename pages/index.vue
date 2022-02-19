<template>
  <div class="js-scroller">
    <Intro />
    <Bio />
    <Experience />
    <Projects />
    <Technology />
    <Awards />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Intro from '../components/Intro'
import Bio from '../components/Bio'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Awards from '../components/Awards'
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
    Awards,
    Contact,
    Footer
  },
  mounted() {
    this.$lines()
    this.$scroll()
    this.$reveal()

    console.log('You are a stalker!')
  }
}
</script>
