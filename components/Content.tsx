import { useState, useEffect, FunctionComponent, useRef } from 'react'
// import '../styles/Content.module.css'
import styles from '../styles/Content.module.css'
import { motion } from "framer-motion"

const Content = () => {
    const scrollRef = useRef(null)

    const container = {
        initial: {  },
        animate: {
            
            transition: {
                staggerChildren: 0.2,
            },
        },
    }
    const item = {
        initial: { x: 800, scale: 0.2 },

        animate: {
            x: 0,
            scale: 1,
            transition: {
                duration: 4,
                ease: [0.6, 0.05, -0.01, 0.9],
            },
        },
   
        exit: {x: -100}
    }
    const test = {
        initial: { y:800, scale:0.2, opacity: 0 },
        whileInView : {opacity: 1},
   
        animate: {
            y: 0,
            scale:1,
            transition: {
                duration: 4,
                ease: [0.6, 0.05, -0.01, 0.9],
            },
        },
    }

    return (
        <main className={styles.container}>
            <motion.div className={styles.imageCarousel}  animate='animate'
                initial="initial" variants={container} >
     
                <motion.div initial={{x:300, opacity: 0}}   whileInView={{x: 0,
            scale: 1,
            opacity: 1,
            transition: {
                duration: 1,
                ease: [0.6, 0.05, -0.01, 0.9],
            },}} viewport={{ root: scrollRef }}  className={styles.image}>
                <img src='/images/skylinesunset.jpg' alt='san francisco from treasure island' ></img>
                </motion.div>
                 <motion.div initial={{x:300, opacity: 0}}   whileInView={{x: 0,
            scale: 1,
            opacity: 1,
            transition: {
                duration: 1,
                ease: [0.6, 0.05, -0.01, 0.9],
            },}} viewport={{ root: scrollRef }} className={styles.image}>
                     <img src='/images/sail.jpg' alt='bruce on goride' ></img>
                </motion.div>
                <motion.div initial={{x:300, opacity: 0}}   whileInView={{x: 0,
            scale: 1,
            opacity: 1,
            transition: {
                duration: 1,
                ease: [0.6, 0.05, -0.01, 0.9],
            },}} viewport={{ root: scrollRef }}  className={styles.image}>
                    <img src='/images/sunsetweeb.jpg' alt='san francisco from treasure island' ></img>
                </motion.div>
                <motion.div initial={{x:300, opacity: 0}}   whileInView={{x: 0,
            scale: 1,
            opacity: 1,
            transition: {
                duration: 1,
                ease: [0.6, 0.05, -0.01, 0.9],
            },}} viewport={{ root: scrollRef }}  className={styles.image}>
                    <img src='/images/city.jpg' alt='downtown sf' ></img>
                </motion.div>
                <motion.div initial={{x:300, opacity: 0}}   whileInView={{x: 0,
            scale: 1,
            opacity: 1,
            transition: {
                duration: 1,
                ease: [0.6, 0.05, -0.01, 0.9],
            },}} viewport={{ root: scrollRef }} className={styles.image}>
                  <img src='/images/transamerica.jpg' alt='san francisco from treasure island' ></img>
                </motion.div>
                  <motion.div initial={{x:300, opacity: 0}}   whileInView={{x: 0,
            scale: 1,
            opacity: 1,
            transition: {
                duration: 1,
                ease: [0.6, 0.05, -0.01, 0.9],
            },}} viewport={{ root: scrollRef }} className={styles.image}>
                <img src='/images/portraits/boynton2.jpg' alt='tuna nigiri' />
                </motion.div>
                <motion.div initial={{x:300, opacity: 0}}   whileInView={{x: 0,
            scale: 1,
            opacity: 1,
            transition: {
                duration: 1,
                ease: [0.6, 0.05, -0.01, 0.9],
            },}} viewport={{ root: scrollRef }} className={styles.image}>
                <img src='/images/snowmountain.jpg' alt='snow mountain' />
                </motion.div>
                <motion.div initial={{x:300, opacity: 0}}   whileInView={{x: 0,
            scale: 1,
            opacity: 1,
            transition: {
                duration: 1,
                ease: [0.6, 0.05, -0.01, 0.9],
            },}} viewport={{ root: scrollRef }} className={styles.image}>
                <img src='/images/snowlake.jpg' alt='frozen lake tahoe'/>
                </motion.div>
                <motion.div initial={{x:300, opacity: 0}}   whileInView={{x: 0,
            scale: 1,
            opacity: 1,
            transition: {
                duration: 1,
                ease: [0.6, 0.05, -0.01, 0.9],
            },}} viewport={{ root: scrollRef }} className={styles.image}>
                <img src='/images/bluetrees.jpg' alt='san francisco golden gate bridge' />
                </motion.div>
                <motion.div initial={{x:300, opacity: 0}}   whileInView={{x: 0,
            scale: 1,
            opacity: 1,
            transition: {
                duration: 1,
                ease: [0.6, 0.05, -0.01, 0.9],
            },}} viewport={{ root: scrollRef }} className={styles.image}>
                <img  src='/images/city.jpg' alt='downtown sf' />
                </motion.div>
                <motion.div initial={{x:300, opacity: 0}}   whileInView={{x: 0,
            scale: 1,
            opacity: 1,
            transition: {
                duration: 1,
                ease: [0.6, 0.05, -0.01, 0.9],
            },}} viewport={{ root: scrollRef }} className={styles.image}>
                <img src='/images/japan.jpg' alt='san francisco golden gate bridge' />
                </motion.div>
                <motion.div initial={{x:300, opacity: 0}}   whileInView={{x: 0,
            scale: 1,
            opacity: 1,
            transition: {
                duration: 1,
                ease: [0.6, 0.05, -0.01, 0.9],
            },}} viewport={{ root: scrollRef }} className={styles.image}>
                <img src='/images/hike.jpg' alt='san francisco golden gate bridge' />
                </motion.div>
                <motion.div initial={{x:300, opacity: 0}}   whileInView={{x: 0,
            scale: 1,
            opacity: 1,
            transition: {
                duration: 1,
                ease: [0.6, 0.05, -0.01, 0.9],
            },}} viewport={{ root: scrollRef }} className={styles.image}>
                <img src='/images/pier.jpg' alt='pier'/>
                </motion.div>
                <motion.div initial={{x:300, opacity: 0}}   whileInView={{x: 0,
            scale: 1,
            opacity: 1,
            transition: {
                duration: 1,
                ease: [0.6, 0.05, -0.01, 0.9],
            },}} viewport={{ root: scrollRef }} className={styles.image}>
                <img src='/images/pacificasunset.jpg' alt='san francisco golden gate bridge' />
                </motion.div>
                <motion.div initial={{x:300, opacity: 0}}   whileInView={{x: 0,
            scale: 1,
            opacity: 1,
            transition: {
                duration: 1,
                ease: [0.6, 0.05, -0.01, 0.9],
            },}} viewport={{ root: scrollRef }} className={styles.image}>
                <img src='/images/travel/citynight.jpg' alt='san francisco from treasure island'></img> 
                </motion.div>

            </motion.div>
        </main>
    )
}

export default Content


// transition={{duration: .5} } initial={{opacity:0, x: 200,}} whileInView={{opacity:1 , x:0}}