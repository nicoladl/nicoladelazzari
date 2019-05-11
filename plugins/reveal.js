import Vue from 'vue'
import { TweenMax } from 'gsap'
import { tweenStart, tweenEnd } from '../assets/js/tweens'

Vue.prototype.$reveal = () => {
  const reveal = document.querySelectorAll('.reveal')

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.25 // item to detect part visible
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
          TweenMax.fromTo(el, 2, tweenStart, {
            ...tweenEnd,
            onComplete: el.classList.add('revealed')
          })
        }
      }
    })
  }
}