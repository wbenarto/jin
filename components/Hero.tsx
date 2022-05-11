import styles from '../styles/Content.module.css'
import { motion, useViewportScroll, useTransform } from 'framer-motion';

const Box = () => {
    const { scrollYProgress } = useViewportScroll();
    const yValue = useTransform(scrollYProgress, [0, 300], [0, 1000 * -2])
    console.log(yValue)
    return (
        <motion.div style={{ y: yValue }}
            transition={{ ease: "easeOut", duration: 2 }}>
            <img style={{ zIndex: '-1' }} src='/parallax/layer1.png'></img>
        </motion.div >
    )

}


const Hero = () => {

    const { scrollY } = useViewportScroll();
    const y1 = useTransform(scrollY, [-100, 0, 10, 100, 150, 200, 300], [-110, -100, -90, -70, 20, 100, 150]);
    const y2 = useTransform(scrollY, [0, 0], [0, 0]);
    const y3 = useTransform(scrollY, [0, 150, 200, 300], [150, 230, 290, 350])
    // const scale = useTransform(scrollY, [0, 500, 1000], [1, 1, 1.1]);


    return (
        <div className={styles.heroContainer} >

            <motion.div style={{ y: y1, }}>
                <img className={styles.y1Image} src='/images/snowmountain.jpg' />

            </motion.div>
            <motion.div style={{ y: y2 }}>
                <img className={styles.y2Image} src='/parallax/layer2.png' />
            </motion.div>

            <motion.div style={{ y: y3 }} className={styles.heroQuote}>
                {/* <h1>JIN CHOI</h1>
                <h1>Photography</h1> */}
            </motion.div>

            {/* <img src='/images/snowmountain.jpg' style={{ zIndex: '-1', top: '0', position: 'absolute', width: '100%', height: '100%', }}>
            </img> */}
            {/* <Box /> */}
            {/* <img speed={4} style={{ zIndex: '-1', top: '0', position: 'absolute', width: '100%', height: '100%', }} src='/parallax/layer1.png'></img> */}
        </div>
    )
}

export default Hero
