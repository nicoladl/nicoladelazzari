import { Power4 } from 'gsap'
const easeInOut = Power4.easeInOut

const tweenStart = {
  y: 100
}

const tweenEnd = {
  y: 0,
  ease: easeInOut
}

export { tweenStart, tweenEnd }