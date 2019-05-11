<template>
  <a :href="item.href" class="text arrow reveal" target="_blank">
    <span class="item">
      <span class="arrow__label">{{ item.label }}</span>
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
