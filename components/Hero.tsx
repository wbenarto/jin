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
    const y1 = useTransform(scrollY, [0, 500, 1000], [0, 400, 800]);
    const y2 = useTransform(scrollY, [0, 500, 1000], [0, 300, 350]);
    const y3 = useTransform(scrollY, [0, 500, 1000], [100, 600, 1200])
    // const scale = useTransform(scrollY, [0, 500, 1000], [1, 1, 1.1]);


    return (
        <div className={styles.heroContainer} >
            <motion.div style={{ y: y1, }}>
                <img style={{ overflow: 'hidden', zIndex: '-1', position: 'absolute', width: '100%', top: '0' }} src='/images/snowmountain.jpg' />

            </motion.div>
            <motion.div style={{ y: y2 }}>
                <img style={{ overflow: 'hidden', position: 'absolute', width: '100%', top: '0' }} src='/parallax/layer2.png' />
            </motion.div>

            <motion.div style={{ color: 'white', padding: '50px', y: y3, background: 'rgba(0,0,0,0.2)', width: "500px", display: 'flex', flexDirection: 'column', right: '0', position: 'absolute' }}>
                <h1>CAPTURING MOMENTS</h1>
                <h2>IN LIFE</h2>
            </motion.div>

            {/* <img src='/images/snowmountain.jpg' style={{ zIndex: '-1', top: '0', position: 'absolute', width: '100%', height: '100%', }}>
            </img> */}
            {/* <Box /> */}
            {/* <img speed={4} style={{ zIndex: '-1', top: '0', position: 'absolute', width: '100%', height: '100%', }} src='/parallax/layer1.png'></img> */}
        </div>
    )
}

export default Hero
