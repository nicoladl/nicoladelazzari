import SplitText from '../../assets/js/vendor/SplitText'

export function initSplitText() {
  const textElements = Array.from(document.querySelectorAll('.js-split-text'))
    .filter(el => !el.dataset.splitTextProcessed && el.textContent.trim())

  textElements.forEach(el => {
    const split = new SplitText(el, {
      type: 'lines',
      linesClass: 'item'
    })

    split.lines.forEach(line => {
      const spanContainer = document.createElement('div')
      spanContainer.classList.add('reveal')
      spanContainer.appendChild(line)
      el.appendChild(spanContainer)
    })

    el.dataset.splitTextProcessed = 'true'
  })
}
