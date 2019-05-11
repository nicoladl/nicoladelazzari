<template>
  <nav class="menu">
    <ul>
      <li v-for="(item, index) in menu" :key="index" class="menu__item" :data-id="index">
        <div :class="index === 0 ? 'text--side' : 'text'" v-html="item.label"></div>
      </li>
    </ul>
  </nav>
</template>

<script>
import TweenMax from 'gsap'

export default {
  data(context) {
    return {
      menu: context.$store.state.menu
    }
  },
  mounted() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3
    }

    const reveal = document.querySelectorAll('section')
    const menuItems = document.querySelectorAll('.menu__item')
    let index = 0

    const observer = new IntersectionObserver(handleIntersect, options)
    reveal.forEach(element => {
      observer.observe(element)
    })

    function handleIntersect(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // refactor
          const el = entry.target
          const item = menuItems[el.dataset.id]
          index = parseInt(el.dataset.id)
          const gne = document.querySelector('.target')
          // refactor
          if (gne) {
            gne.classList.remove('target')
          }
          // refactor
          menuItems[index].classList.add('target')

          TweenMax.to(item, 1, { y: item.offsetHeight * index })
        }
      })
    }
  }
}
</script>
