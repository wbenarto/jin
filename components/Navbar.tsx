import { useState, useEffect, FunctionComponent } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from '../styles/Navbar.module.scss'
import { motion, useViewportScroll, useTransform } from 'framer-motion';

import styles2 from '../styles/Content.module.scss'

const Navbar = () => {
   const { pathname } = useRouter()
   const { scrollY } = useViewportScroll();
   const y1 = useTransform(scrollY, [0, 50, 100, 150, 200, 300], [350, 350, 250, 150, 0, 0]);
   const x1 = useTransform(scrollY, [0, 50, 300], [250, 200, 0])

   const y2 = useTransform(scrollY, [0, 300, 400], [0, 0, -800])
   return (
      <div className={styles.container}>
         <motion.div className={styles.logo} style={{ y: y1, x: x1 }}>
            <Link href='/'><p>JIN<span>CHOI</span></p></Link>

            <motion.h1 animate={{
               scale: [1, 2, 2, 1, 1],
               rotate: [0, 0, 270, 360, 0],
            }}
               transition={{
                  duration: 2,
                  ease: "easeInOut",
                  times: [0, 0.2, 0.5, 0.8, 1],
                  repeat: Infinity,
                  repeatDelay: 1
               }}
               style={{ y: y2 }}
               className={styles.logoNav}>PHOTOGRAPHY</motion.h1>
            {/* <h1 className={styles.logoNav}>MUSIC</h1> */}
         </motion.div>

      </div>
   )
}

export default Navbar