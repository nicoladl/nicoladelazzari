<template>
  <section class="section" data-id="5">
    <ul>
      <li class="row">
        <div class="col-xs-3 no-padding-right nomobile">
          <div class="text text--right text--light">Social</div>
        </div>
        <div class="col-xs-12 col-md-9">
          <div v-for="(contact, index) in contacts" :key="index" class="social">
            <Link :item="contact" />
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
      contacts: context.$store.state.contacts
    }
  }
}
</script>
