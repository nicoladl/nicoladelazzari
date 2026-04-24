import { useEffect } from 'react'
import Menu from './components/Menu'
import Intro from './components/Intro'
import Bio from './components/Bio'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { initScroll } from './utils/scroll'
import { initSplitText } from './utils/lines'
import { initReveal } from './utils/reveal'

function App() {
  useEffect(() => {
    initSplitText()
    initScroll()
    initReveal()
    console.log('There is nothing to see here')
  }, [])

  return (
    <>
      <Menu />
      <div className="js-scroller">
        <Intro />
        <Bio />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
