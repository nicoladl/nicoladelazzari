<template>
  <section class="section" data-id="5">
    <h2 class="text text--light pbottom reveal nodesktop">
      <span class="item">Contacts</span>
    </h2>
    <ul>
      <li class="row">
        <div class="sidebar sidebar--big nomobile">
          <div class="text text--right text--light reveal">
            <span class="item">Contacts</span>
          </div>
        </div>
        <div class="content content--little">
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
