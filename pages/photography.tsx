import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from '../styles/Photography.module.css'
import styles2 from '../styles/Content.module.css'

//Scroll Observer
import { useInView } from "react-intersection-observer"
import { useAnimation, motion } from "framer-motion"

import Food from '../components/Food'
import Travel from '../components/Travel'
import Portrait from '../components/Portrait'


const Photography = () => {
  const [active, setActive] = useState('food')

  const animation = useAnimation()

  const [contentRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-300px",
    delay: 2.5,
  })
  const container = {
    initial: { y: 800 },
    animate: {
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }
  const item = {
    initial: { y: 800 },
    animate: {
      y: 0,
      transition: {
        duration: 2,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  }

  useEffect(() => {
    if (inView) {
      animation.start("visible")
    }

  }, [animation, inView])
  return (
    <main>

      <div className={styles.photographyFilter}>
        <button onClick={() => setActive('food')}>FOOD</button>
        <button onClick={() => setActive('travel')}>LANDSCAPE</button>
        <button onClick={() => setActive('portrait')}>PORTRAIT</button>
        {/* <button onClick={() => setActive('wedding')}>WEDDING</button> */}
      </div>

      {active == 'food' ? <Food /> :
        active == 'travel' ? <Travel /> :
          active == 'portrait' ? <Portrait /> :
            <p>AWW</p>}

      <Footer />
    </main>
  )
}

export default Photography