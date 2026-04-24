import { useEffect } from 'react'
import { menu } from '../data/siteData'
import { TweenMax, TimelineMax, Power4 } from 'gsap'

function Menu() {
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3
    }
    const easeInOut = Power4.easeInOut

    const reveal = document.querySelectorAll('section')
    const menuItems = document.querySelectorAll('.menu__item')

    const observer = new IntersectionObserver(handleIntersect, options)
    reveal.forEach(element => {
      observer.observe(element)
    })

    function handleIntersect(entries) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return

        const el = entry.target
        const menuItem = menuItems[el.dataset.id]
        const index = Number(el.dataset.id)

        const target = document.querySelector('.target')
        if (target) {
          target.classList.remove('target')
        }

        if (index !== 0 && menuItem && menuItems.length) {
          new TimelineMax()
            .to(menuItem, 2, {
              y: menuItem.offsetHeight * (index - 1),
              ease: easeInOut,
              onComplete: () => {
                menuItems[index]?.classList.add('target')
              }
            })
            .to(menuItems[0], 2, { y: -window.innerHeight, ease: easeInOut }, 0)
        } else {
          TweenMax.to(menuItem, 2, { y: 0 })
          menuItems.forEach((item, listIndex) => {
            if (listIndex !== 0) {
              TweenMax.to(menuItems[menuItems.length - listIndex], 2, {
                y: window.innerHeight + item.offsetHeight * (menuItems.length - listIndex),
                ease: easeInOut
              })
            }
          })
        }
      })
    }
  }, [])

  return (
    <nav className="menu">
      <ul>
        {menu.map((item, index) => (
          <li
            key={index}
            className={index === 0 ? 'menu__item first' : 'menu__item'}
            data-id={index}
          >
            <div
              className={index === 0 ? 'text--side' : 'text'}
              dangerouslySetInnerHTML={{ __html: item.label }}
            />
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Menu
