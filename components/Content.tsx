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
        <motion.div
            animate='animate'
            initial="initial"
            variants={container} className={styles.container}>
            <motion.div variants={item} className={[styles.galleryItem, styles.w_7, styles.h_2].join(' ')}>
                <div className={styles.image}>
                    <img src='/images/travel/citynight.jpg' alt='san francisco from treasure island' ></img>
                </div>
                {/* <div className={styles.text}>Example Text</div> */}
            </motion.div>
            <motion.div variants={item} className={[styles.galleryItem, styles.w_2, styles.h_2].join(' ')}>
                <div className={styles.image}>
                    <img src='/images/pacificasunset.jpg' alt='san francisco golden gate bridge' ></img>
                </div>
                {/* <div className={styles.text}>Example Text</div> */}
            </motion.div>

            <motion.div variants={item} className={[styles.galleryItem, styles.w_3, styles.h_3].join(' ')}>
                <div className={styles.image}>
                    <img src='/images/skylinesunset.jpg' alt='san francisco golden gate bridge' ></img>
                </div>
                {/* <div className={styles.text}>Example Text</div> */}
            </motion.div>
            <motion.div variants={item} className={[styles.galleryItem, styles.w_2, styles.h_1].join(' ')}>
                <div className={styles.image}>
                    <img src='/images/sail.jpg' alt='bruce on goride' ></img>
                </div>
                {/* <div className={styles.text}>Example Text</div> */}
            </motion.div>



            <motion.div variants={item} className={[styles.galleryItem, styles.w_2, styles.h_1].join(' ')}>
                <div className={styles.image}>
                    <img src='/images/sunsetweeb.jpg' alt='san francisco from treasure island' ></img>
                </div>
                {/* <div className={styles.text}>Example Text</div> */}
            </motion.div>

            <motion.div variants={item} className={[styles.galleryItem, styles.w_2, styles.h_1].join(' ')}>
                <div className={styles.image}>
                    <img src='/images/pier.jpg' alt='pier' ></img>
                </div>
                {/* <div className={styles.text}>Example Text</div> */}
            </motion.div>

            <motion.div variants={item} className={[styles.galleryItem, styles.w_2, styles.h_1].join(' ')}>
                <div className={styles.image}>
                    <img src='/images/hike.jpg' alt='san francisco golden gate bridge' ></img>
                </div>
                {/* <div className={styles.text}>Example Text</div> */}
            </motion.div>
            <motion.div variants={item} className={[styles.galleryItem, styles.w_2, styles.h_1].join(' ')}>
                <div className={styles.image}>
                    <img src='/images/japan.jpg' alt='san francisco golden gate bridge' ></img>
                </div>
                {/* <div className={styles.text}>Example Text</div> */}
            </motion.div>
            <motion.div variants={item} className={[styles.galleryItem, styles.w_3, styles.h_3].join(' ')}>
                <div className={styles.image}>
                    <img src='/images/city.jpg' alt='downtown sf' ></img>
                </div>
                {/* <div className={styles.text}>Example Text</div> */}
            </motion.div>

            <motion.div variants={item} className={[styles.galleryItem, styles.w_2, styles.h_2].join(' ')}>
                <div className={styles.image}>
                    <img src='/images/bluetrees.jpg' alt='san francisco golden gate bridge' ></img>
                </div>
                {/* <div className={styles.text}>Example Text</div> */}
            </motion.div>

            <motion.div variants={item} className={[styles.galleryItem, styles.w_2, styles.h_2].join(' ')}>
                <div className={styles.image}>
                    <img src='/images/transamerica.jpg' alt='san francisco from treasure island' ></img>
                </div>
                {/* <div className={styles.text}>Example Text</div> */}
            </motion.div>

            <motion.div variants={item} className={[styles.galleryItem, styles.w_2, styles.h_3].join(' ')}>
                <div className={styles.image}>
                    <img src='/images/snowlake.jpg' alt='san francisco golden gate bridge' ></img>
                </div>
                {/* <div className={styles.text}>Example Text</div> */}
            </motion.div>
            <motion.div variants={item} className={[styles.galleryItem, styles.w_5, styles.h_2].join(' ')}>
                <div className={styles.image}>
                    <img src='/images/snowmountain.jpg' alt='san francisco golden gate bridge' ></img>
                </div>
                {/* <div className={styles.text}>Example Text</div> */}
            </motion.div>

        </motion.div>
    )
}

export default Content