<template>
  <section class="section" data-id="4">
    <ul class="list">
      <li v-for="(award, index) in awards" :key="index" class="row">
        <div class="sidebar sidebar--big nomobile">
          <div class="text text--right text--light reveal">
            <br />
            <span class="item">{{ award.lenght }}</span>
          </div>
        </div>
        <div class="content content--little">
          <div class="text">
            <span class="reveal">
              <span class="item">{{ award.title }}</span>
            </span>
            <span class="reveal">
              <span class="item">
                <span class="text--light">{{ award.type }}</span>
              </span>
            </span>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data(context) {
    return {
      awards: context.$store.state.awards
    }
  }
}
</script>
