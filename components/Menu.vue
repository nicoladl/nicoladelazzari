<template>
  <nav class="menu">
    <ul>
      <li v-for="(item, index) in menu" :key="index" :class="[index === 0 ? 'menu__item first' : 'menu__item']" :data-id="index">
        <div :class="index === 0 ? 'text--side' : 'text'" v-html="item.label"></div>
      </li>
    </ul>
  </nav>
</template>

<script>
import { TweenMax, TimelineMax } from 'gsap'

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
          const el = entry.target
          const menuItem = menuItems[el.dataset.id]
          index = parseInt(el.dataset.id)

          const target = document.querySelector('.target')
          if (target) {
            target.classList.remove('target')
          }

          if (index !== 0) {
            new TimelineMax()
              .to(menuItem, 1, {
                y: menuItem.offsetHeight * (index - 1),
                onComplete: () => {
                  menuItems[index].classList.add('target')
                }
              })
              .to(menuItems[0], 1, { y: -window.innerHeight }, 0)
          } else {
            TweenMax.to(menuItem, 1, { y: 0 })
            menuItems.forEach((item, index) => {
              if (index !== 0) {
                TweenMax.to(menuItems[menuItems.length - index], 1, { y: window.innerHeight + item.offsetHeight * (menuItems.length - index) })
              }
            })
          }
        }
      })
    }
  }
}
</script>
