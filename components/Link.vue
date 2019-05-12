<template>
  <a :href="item.href" class="text arrow" target="_blank">
    <span class="reveal">
      <span class="item">
        <span class="arrow__label">{{ item.label }}</span>
      </span>
    </span>
    <span class="arrow__icon"><Arrow /></span>
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
