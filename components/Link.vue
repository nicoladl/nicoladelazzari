<template>
  <a :href="item.href" class="text arrow" target="_blank">
    <span class="reveal">
      <span class="item link">{{ item.label }}</span>
    </span>
    <span class="arrow__icon nomobile"><Arrow /></span>
  </a>
</template>

<script>
import Arrow from '../components/Arrow'

export default {
  components: {
    Arrow
  },
  props: {
    item: {
      type: Object,
      default: null
    }
  }
}
</script>
