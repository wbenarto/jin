import styles from '../styles/Content.module.css'
import Link from 'next/link'


const MidNav = () => {
    return (
        <div className={styles.midNav}>
            <img className={styles.midBackground} src='/images/sand-1.png' />
            <div className={styles.midLinks}>


                <Link href='https://soundcloud.com/djinn415'>
                    <div className={styles.midLink}>
                        <div className={styles.fullFade}></div>
                        <img className={styles.midLinkPic} src='images/jin-dj.JPG' />
                        <div className={styles.overlay}>

                        </div>
                        <div className={styles.text}>DJ JINN</div>
                    </div>

                </Link>

                <Link href='/products'>
                    <div className={styles.midLink}>
                        <div className={styles.fullFade}></div>
                        <img className={styles.midLinkPic} src='images/jin2.jpg' />
                        <div className={styles.overlay}>

                        </div>
                        <div className={styles.text}>PHOTOGRAPHY PORTFOLIO</div>
                    </div>

                </Link>

                <Link href='/about'>
                    <div className={styles.midLink}>
                        <div className={styles.fullFade}></div>
                        <img className={styles.midLinkPic} src='images/sunset.jpg' />
                        <div className={styles.overlay}>

                        </div>
                        <div className={styles.text}>Hello World</div>
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default MidNav
