import Navbar from '../components/Navbar'
import styles2 from '../styles/Content.module.css'
import Footer from '../components/Footer'

//Scroll Observer
import { useInView } from "react-intersection-observer"
import { useAnimation, motion } from "framer-motion"

const Travel = () => {

    const container = {
        animate: {
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
        <main>


            <motion.div

                animate='animate'
                initial="initial"
                variants={container} className={styles2.container}>

                {/* images */}

                <motion.div
                    variants={item} className={[styles2.galleryItem, styles2.w_7, styles2.h_1].join(' ')}>
                    <div className={styles2.image}> <img src='/images/travel/city2.jpg' alt='tuna nigiri'></img></div>
                </motion.div>

                <motion.div
                    variants={item} className={[styles2.galleryItem, styles2.w_4, styles2.h_1].join(' ')}>
                    <div className={styles2.image}> <img src='/images/travel/eerie.jpg' alt='tuna nigiri'></img></div>
                </motion.div>

                <motion.div
                    variants={item} className={[styles2.galleryItem, styles2.w_7, styles2.h_2].join(' ')}>
                    <div className={styles2.image}> <img src='/images/travel/greenwaterfall.jpg' alt='tuna nigiri'></img></div>
                </motion.div>
                <motion.div
                    variants={item} className={[styles2.galleryItem, styles2.w_3, styles2.h_1].join(' ')}>
                    <div className={styles2.image}> <img src='/images/travel/lyon.jpg' alt='tuna nigiri'></img></div>
                </motion.div>
                <motion.div
                    variants={item} className={[styles2.galleryItem, styles2.w_5, styles2.h_1].join(' ')}>
                    <div className={styles2.image}> <img src='/images/travel/oracle.jpg' alt='tuna nigiri'></img></div>
                </motion.div>
                <motion.div
                    variants={item} className={[styles2.galleryItem, styles2.w_7, styles2.h_1].join(' ')}>
                    <div className={styles2.image}> <img src='/images/travel/pierhang.jpg' alt='tuna nigiri'></img></div>
                </motion.div>
                <motion.div
                    variants={item} className={[styles2.galleryItem, styles2.w_2, styles2.h_2].join(' ')}>
                    <div className={styles2.image}> <img src='/images/travel/seattle.jpg' alt='tuna nigiri'></img></div>
                </motion.div>
                <motion.div
                    variants={item} className={[styles2.galleryItem, styles2.w_3, styles2.h_2].join(' ')}>
                    <div className={styles2.image}> <img src='/images/travel/seattle2.jpg' alt='tuna nigiri'></img></div>
                </motion.div>

                <motion.div
                    variants={item} className={[styles2.galleryItem, styles2.w_2, styles2.h_1].join(' ')}>
                    <div className={styles2.image}> <img src='/images/travel/skyline2.jpg' alt='tuna nigiri'></img></div>
                </motion.div>
                <motion.div
                    variants={item} className={[styles2.galleryItem, styles2.w_2, styles2.h_1].join(' ')}>
                    <div className={styles2.image}> <img src='/images/travel/sunrise.jpg' alt='tuna nigiri'></img></div>
                </motion.div>
                <motion.div
                    variants={item} className={[styles2.galleryItem, styles2.w_2, styles2.h_1].join(' ')}>
                    <div className={styles2.image}> <img src='/images/travel/sunsettrees.jpg' alt='tuna nigiri'></img></div>
                </motion.div>
                <motion.div
                    variants={item} className={[styles2.galleryItem, styles2.w_2, styles2.h_1].join(' ')}>
                    <div className={styles2.image}> <img src='/images/travel/trees.jpg' alt='tuna nigiri'></img></div>
                </motion.div>
                <motion.div
                    variants={item} className={[styles2.galleryItem, styles2.w_3, styles2.h_1].join(' ')}>
                    <div className={styles2.image}> <img src='/images/travel/weeb.jpg' alt='tuna nigiri'></img></div>
                </motion.div>
                <motion.div
                    variants={item} className={[styles2.galleryItem, styles2.w_3, styles2.h_1].join(' ')}>
                    <div className={styles2.image}> <img src='/images/travel/goldengate2.jpg' alt='tuna nigiri'></img></div>
                </motion.div>
                <motion.div
                    variants={item} className={[styles2.galleryItem, styles2.w_2, styles2.h_1].join(' ')}>
                    <div className={styles2.image}> <img src='/images/travel/goldengatebridge.jpg' alt='tuna nigiri'></img></div>
                </motion.div>
                <motion.div
                    variants={item} className={[styles2.galleryItem, styles2.w_7, styles2.h_1].join(' ')}>
                    <div className={styles2.image}> <img src='/images/travel/baynight.jpg' alt='tuna nigiri'></img></div>
                </motion.div>
                <motion.div
                    variants={item} className={[styles2.galleryItem, styles2.w_2, styles2.h_1].join(' ')}>
                    <div className={styles2.image}> <img src='/images/travel/bridge.jpg' alt='tuna nigiri'></img></div>
                </motion.div>
                <motion.div
                    variants={item} className={[styles2.galleryItem, styles2.w_2, styles2.h_1].join(' ')}>
                    <div className={styles2.image}> <img src='/images/travel/sfcity.jpg' alt='tuna nigiri'></img></div>
                </motion.div>
                <motion.div
                    variants={item} className={[styles2.galleryItem, styles2.w_3, styles2.h_1].join(' ')}>
                    <div className={styles2.image}> <img src='/images/travel/skyline.jpg' alt='tuna nigiri'></img></div>
                </motion.div>
                <motion.div
                    variants={item} className={[styles2.galleryItem, styles2.w_4, styles2.h_1].join(' ')}>
                    <div className={styles2.image}> <img src='/images/travel/citynight.jpg' alt='tuna nigiri'></img></div>
                </motion.div>

            </motion.div>

        </main>

    )
}

export default Travel