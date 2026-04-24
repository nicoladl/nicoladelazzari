import { TweenMax } from 'gsap'
import { tweenEnd } from '../../assets/js/tween'

export function initReveal() {
  const reveal = document.querySelectorAll('.reveal')

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  }

  const observer = new IntersectionObserver(handleIntersect, options)
  reveal.forEach(element => {
    observer.observe(element)
  })

  function handleIntersect(entries) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return

      const el = entry.target
      if (!el.classList.contains('revealed')) {
        TweenMax.fromTo(
          el.querySelector('.item'),
          2,
          { y: el.offsetHeight },
          {
            ...tweenEnd,
            onComplete: () => el.classList.add('revealed')
          }
        )
      }
    })
  }
}
