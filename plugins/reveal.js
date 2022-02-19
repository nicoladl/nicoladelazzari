import Vue from 'vue'
import { TweenMax } from 'gsap'
import { tweenEnd } from '../assets/js/tween'

Vue.prototype.$reveal = () => {
  const reveal = document.querySelectorAll('.reveal')

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1 // item to detect part visible
  }

  const observer = new IntersectionObserver(handleIntersect, options)
  reveal.forEach(element => {
    observer.observe(element)
  })

  // excerpt behaviour on scroll
  function handleIntersect(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target

        if (!el.classList.contains('revealed')) {
          // angle animation
          TweenMax.fromTo(
            el.querySelector('.item'),
            2,
            {
              y: el.offsetHeight
            },
            {
              ...tweenEnd,
              onComplete: el.classList.add('revealed')
            }
          )
        }
      }
    })
  }
}
