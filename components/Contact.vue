<template>
  <section class="section row end-xs" data-id="5">
    <ul class="list col-xs-12 col-md-9">
      <li>
        <div v-for="(contact, index) in contacts" :key="index" class="social">
          <Link :item="contact" />
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
