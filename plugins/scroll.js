import Vue from 'vue'
import { TweenMax, Power4 } from 'gsap'
import normalizeWheel from 'normalize-wheel'
import MobileDetect from 'mobile-detect'

Vue.prototype.$scroll = () => {
  const easeOut = Power4.easeOut

  const scroller = {
    target: document.querySelector('.js-scroller'),
    targetHeight: 0,
    y: 0,
    resizeRequest: 1
  }

  TweenMax.set(scroller.target, { force3D: true })

  // window height
  let wh = 0
  const scrollSpeed = 2
  const mobileScrollRatio = 4

  let scrolled = 0
  let pixelY = 0
  let preDelta = 0
  let delta = 0

  let ts, te
  const md = new MobileDetect(window.navigator.userAgent)

  // init scroll listner after image load
  window.addEventListener('resize', onResize)

  if (md.mobile()) {
    document.addEventListener(
      'touchstart',
      e => {
        ts = e.targetTouches[0].pageY
      },
      { passive: true }
    )
    document.addEventListener(
      'touchend',
      () => {
        preDelta = 0
      },
      { passive: true }
    )
    document.addEventListener('touchmove', onMouseWhell, { passive: true })
  } else {
    document.addEventListener('mousewheel', onMouseWhell, { passive: true })
    document.addEventListener('DOMMouseScroll', onMouseWhell, { passive: true })
  }

  function onResize() {
    scroller.targetHeight = scroller.target.clientHeight
    wh = scroller.targetHeight - window.innerHeight

    if (scroller.y > wh) {
      scroller.y = wh
      TweenMax.to(scroller.target, 1.5, { y: -scroller.y, ease: easeOut })
    }
  }

  function onMouseWhell(e) {
    const normalized = normalizeWheel(e)

    md.mobile() ? (te = e.targetTouches[0].pageY) : (pixelY = normalized.pixelY)

    scroller.targetHeight = scroller.target.clientHeight
    wh = scroller.targetHeight - window.innerHeight

    if (scroller.y >= 0 && scroller.y <= wh) {
      delta = ts - te - preDelta

      !md.mobile() ? (scroller.y += pixelY) : (scroller.y += delta * mobileScrollRatio)

      // set upper bound of page
      if (scroller.y < 0) scroller.y = 0

      // set lower bound of page
      if (scroller.y > wh) scroller.y = wh

      TweenMax.to(scroller.target, scrollSpeed, {
        y: -scroller.y,
        ease: easeOut
      })

      preDelta = ts - te
    } else {
      TweenMax.to(scroller.target, 1, { scaleX: 1 })
    }

    // scroll animations
    if (scrolled >= 0 && scrolled <= scroller.targetHeight) {
      scrolled = scrolled + pixelY
    } else if (scrolled < 0) {
      scrolled = 0
    } else if (scrolled > scroller.targetHeight) {
      scrolled = scroller.targetHeight
    }
  }
}
