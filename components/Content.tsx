import { useState, useEffect, FunctionComponent } from 'react'
// import '../styles/Content.module.css'
import styles from '../styles/Content.module.css'
import { motion } from "framer-motion"

const Content = () => {

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
                duration: 4,
                ease: [0.6, 0.05, -0.01, 0.9],
            },
        },
    }

    return (
        <main className={styles.container}>
            <motion.div className={styles.imageCarousel} variants={container} >
     
                <motion.div variants={item}   transition={{duration: 1.2} } initial={{opacity:0}} whileInView={{opacity:1 }} className={styles.image}>
                <img src='/images/skylinesunset.jpg' alt='san francisco from treasure island' ></img>
                </motion.div>
                 <motion.div variants={item} transition={ {duration: 1.2} } initial={{opacity:0}} whileInView={{opacity:1 }} className={styles.image}>
                     <img src='/images/sail.jpg' alt='bruce on goride' ></img>
                </motion.div>
                <motion.div variants={item} transition={ {duration: 1.2} } initial={{opacity:0}} whileInView={{opacity:1 }}  className={styles.image}>
                    <img src='/images/sunsetweeb.jpg' alt='san francisco from treasure island' ></img>
                </motion.div>
                <motion.div variants={item} transition={ {duration: 1.2} } initial={{opacity:0}} whileInView={{opacity:1 }}  className={styles.image}>
                    <img src='/images/city.jpg' alt='downtown sf' ></img>
                </motion.div>
                <motion.div variants={item} transition={ {duration: 1.2} } initial={{opacity:0}} whileInView={{opacity:1 }} className={styles.image}>
                  <img src='/images/transamerica.jpg' alt='san francisco from treasure island' ></img>
                </motion.div>
                  <motion.div variants={item} transition={ {duration: 1.2} } initial={{opacity:0}} whileInView={{opacity:1 }} className={styles.image}>
                <img src='/images/portraits/boynton2.jpg' alt='tuna nigiri' />
                </motion.div>
                <motion.div variants={item} transition={ {duration: 1.2} } initial={{opacity:0}} whileInView={{opacity:1 }} className={styles.image}>
                <img src='/images/snowmountain.jpg' alt='snow mountain' />
                </motion.div>
                <motion.div variants={item} transition={ {duration: 1.2} } initial={{opacity:0}} whileInView={{opacity:1 }} className={styles.image}>
                <img src='/images/snowlake.jpg' alt='frozen lake tahoe'/>
                </motion.div>
                <motion.div variants={item} transition={ {duration: 1.2} } initial={{opacity:0}} whileInView={{opacity:1 }} className={styles.image}>
                <img src='/images/bluetrees.jpg' alt='san francisco golden gate bridge' />
                </motion.div>
                <motion.div variants={item} transition={ {duration: 1.2} } initial={{opacity:0}} whileInView={{opacity:1 }} className={styles.image}>
                <img  src='/images/city.jpg' alt='downtown sf' />
                </motion.div>
                <motion.div variants={item} transition={ {duration: 1.2} } initial={{opacity:0}} whileInView={{opacity:1 }} className={styles.image}>
                <img src='/images/japan.jpg' alt='san francisco golden gate bridge' />
                </motion.div>
                <motion.div variants={item} transition={ {duration: 1.2} } initial={{opacity:0}} whileInView={{opacity:1 }} className={styles.image}>
                <img src='/images/hike.jpg' alt='san francisco golden gate bridge' />
                </motion.div>
                <motion.div variants={item} transition={ {duration: 1.2} } initial={{opacity:0}} whileInView={{opacity:1 }} className={styles.image}>
                <img src='/images/pier.jpg' alt='pier'/>
                </motion.div>
                <motion.div variants={item} transition={ {duration: 1.2} } initial={{opacity:0}} whileInView={{opacity:1 }} className={styles.image}>
                <img src='/images/pacificasunset.jpg' alt='san francisco golden gate bridge' />
                </motion.div>
                <motion.div variants={item} transition={ {duration: 1.2} } initial={{opacity:0}} whileInView={{opacity:1 }} className={styles.image}>
                <img src='/images/travel/citynight.jpg' alt='san francisco from treasure island'></img> 
                </motion.div>

            </motion.div>
        </main>
    )
}

export default Content