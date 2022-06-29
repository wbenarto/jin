import { useState, useEffect, FunctionComponent } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from '../styles/Navbar.module.scss'
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { MenuNav } from '../components/MenuNav'

import styles2 from '../styles/Content.module.scss'

const Navbar = () => {
   const { pathname } = useRouter()
   const { scrollY } = useViewportScroll();
   const y1 = useTransform(scrollY, [0, 200, 400, 550, 600, 700], [300, 300, -200, -200, -200, -200]);
   const x1 = useTransform(scrollY, [0, 50, 300], [0, 0, 0])

   const y2 = useTransform(scrollY, [0, 200, 400, 550], [0, 0, 0, -600])
   return (
      <div className={styles.container}>
         <MenuNav />
         <motion.div className={styles.logo} style={{ y: y1, x: x1 }}>
            <Link href='/'><p>JIN<span>CHOI</span></p></Link>

            <motion.h1
               // animate={{
               //    scale: [1.5, 1, 1, 1.5, 1.5],
               //    rotate: [0, 0, 270, 270, 0],
               // }}
               transition={{
                  duration: 2,
                  ease: "easeInOut",
                  times: [0, 0.2, 0.5, 0.8, 1],
                  repeat: Infinity,
                  repeatDelay: 1
               }}
               style={{ y: y2 }}
               className={styles.logoNav}>PHOTOGRAPHY <br /> & <br /> MUSIC</motion.h1>
            {/* <h1 className={styles.logoNav}>MUSIC</h1> */}
         </motion.div>

      </div >
   )
}

export default Navbar