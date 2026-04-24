import { TweenMax, Power4 } from 'gsap'
import normalizeWheel from 'normalize-wheel'
import MobileDetect from 'mobile-detect'

export function initScroll() {
  const easeOut = Power4.easeOut

  const scroller = {
    target: document.querySelector('.js-scroller'),
    targetHeight: 0,
    y: 0,
    resizeRequest: 1
  }

  if (!scroller.target) {
    return
  }

  TweenMax.set(scroller.target, { force3D: true })

  let wh = 0
  const scrollSpeed = 2
  const mobileScrollRatio = 4

  let scrolled = 0
  let pixelY = 0
  let preDelta = 0
  let delta = 0
  let ts = 0
  let te = 0

  const md = new MobileDetect(window.navigator.userAgent)

  window.addEventListener('resize', onResize)

  if (md.mobile()) {
    document.addEventListener('touchstart', e => {
      ts = e.targetTouches[0].pageY
    }, { passive: true })

    document.addEventListener('touchend', () => {
      preDelta = 0
    }, { passive: true })

    document.addEventListener('touchmove', onMouseWheel, { passive: true })
  } else {
    document.addEventListener('mousewheel', onMouseWheel, { passive: true })
    document.addEventListener('DOMMouseScroll', onMouseWheel, { passive: true })
  }

  function onResize() {
    scroller.targetHeight = scroller.target.clientHeight
    wh = scroller.targetHeight - window.innerHeight
    if (scroller.y > wh) {
      scroller.y = wh
      TweenMax.to(scroller.target, 1.5, { y: -scroller.y, ease: easeOut })
    }
  }

  function onMouseWheel(e) {
    const normalized = normalizeWheel(e)
    if (md.mobile()) {
      te = e.targetTouches[0].pageY
    } else {
      pixelY = normalized.pixelY
    }

    scroller.targetHeight = scroller.target.clientHeight
    wh = scroller.targetHeight - window.innerHeight

    if (scroller.y >= 0 && scroller.y <= wh) {
      delta = ts - te - preDelta
      scroller.y += md.mobile() ? delta * mobileScrollRatio : pixelY
      if (scroller.y < 0) scroller.y = 0
      if (scroller.y > wh) scroller.y = wh

      TweenMax.to(scroller.target, scrollSpeed, {
        y: -scroller.y,
        ease: easeOut
      })

      preDelta = ts - te
    } else {
      TweenMax.to(scroller.target, 1, { scaleX: 1 })
    }

    if (scrolled >= 0 && scrolled <= scroller.targetHeight) {
      scrolled += pixelY
    } else if (scrolled < 0) {
      scrolled = 0
    } else if (scrolled > scroller.targetHeight) {
      scrolled = scroller.targetHeight
    }
  }
}
