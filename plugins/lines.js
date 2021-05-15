import Vue from 'vue'
import SplitText from '~/assets/js/vendor/SplitText'

Vue.prototype.$lines = () => {
  // select all text to split
  const text = document.querySelectorAll('.js-split-text')
  text.forEach(el => {
    // split and create item
    const split = new SplitText(el, {
      type: 'lines',
      linesClass: 'item'
    })

    // for every item create new node for reveal effect
    split.lines.forEach(line => {
      const spanContainer = document.createElement('div')
      spanContainer.classList.add('reveal')

      spanContainer.appendChild(line)
      el.appendChild(spanContainer)
    })
  })
}
