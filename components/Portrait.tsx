import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles2 from '../styles/Content.module.css'

//Scroll Observer
import { useInView } from "react-intersection-observer"
import { useAnimation, motion } from "framer-motion"

const Portrait = () => {
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

            <motion.div
                animate='animate'
                initial="initial"
                variants={container}
                className={styles2.portraitContainer}>
                <motion.div
                    variants={item}
                    className={styles2.portraits}
                >
                    <div className={styles2.portraitContent}>           <img src='/images/portraits/alika1.jpg' alt='tuna nigiri'></img>
                    </div>
                </motion.div>
                <motion.div
                    variants={item}
                    className={styles2.portraits}
                >
                    <div className={styles2.portraitContent}>           <img src='/images/portraits/alika2.jpg' alt='tuna nigiri'></img>
                    </div>
                </motion.div>
                <motion.div
                    variants={item}
                    className={styles2.portraits}>
                    <div className={styles2.portraitContent}>           <img src='/images/portraits/alika3.jpg' alt='tuna nigiri'></img>
                    </div>
                </motion.div>

                <motion.div
                    variants={item}
                    className={styles2.portraits}>
                    <div className={styles2.portraitContent}>           <img src='/images/portraits/boynton.jpg' alt='tuna nigiri'></img>
                    </div>
                </motion.div>
                <motion.div
                    variants={item}
                    className={styles2.portraits}>
                    <div className={styles2.portraitContent}>           <img src='/images/portraits/boynton2.jpg' alt='tuna nigiri'></img>
                    </div>
                </motion.div>
                <motion.div
                    variants={item}
                    className={styles2.portraits}>
                    <div className={styles2.portraitContent}>           <img src='/images/portraits/parisha.jpg' alt='tuna nigiri'></img>
                    </div>
                </motion.div>
                <motion.div
                    variants={item}
                    className={styles2.portraits}>
                    <div className={styles2.portraitContent}>           <img src='/images/portraits/webe.jpg' alt='tuna nigiri'></img>
                    </div>
                </motion.div>
                <motion.div
                    variants={item}
                    className={styles2.portraits}
                >
                    <div className={styles2.portraitContent}>           <img src='/images/portraits/goride.jpg' alt='tuna nigiri'></img>
                    </div>
                </motion.div>


                {/* <motion.div 
                variants={item} 
                className={styles2.portraits}
                // className={[styles2.galleryItem, styles2.w_3, styles2.h_4].join(' ')}
                >       
              <img className={styles2.image} src='/images/portraits/boynton.jpg' alt='tuna nigiri'></img>
            
            </motion.div> */}

                {/* <motion.div 
                variants={item} className={[styles2.galleryItem, styles2.w_2, styles2.h_2].join(' ')}>
                    <div className={styles2.image}><img src='/images/portraits/webe.jpg' alt='tuna nigiri'></img></div>            
            
            </motion.div>

            <motion.div 
                variants={item} className={[styles2.galleryItem, styles2.w_2, styles2.h_3].join(' ')}> 
                <div className={styles2.image}><img src='/images/portraits/parisha.jpg' alt='tuna nigiri'></img></div>           
            
            </motion.div> */}

            </motion.div>

        </main>

    )
}

export default Portrait