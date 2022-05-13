import styles from '../styles/Content.module.css'
import Link from 'next/link'


const MidNav = () => {
    return (
        <div className={styles.midNav}>
            <img className={styles.midBackground} src='/images/sand-1.png' />
            <div className={styles.midLinks}>
                {/* <div className={styles.bottomFade} /> */}

                <Link href='https://soundcloud.com/djinn415'>
                    <div className={styles.midLink}>
                        <img className={styles.midLinkPic} src='images/jin-dj.JPG' />
                    </div>
                </Link>

                <Link href='/products'>
                    <div className={styles.midLink}>
                        <img className={styles.midLinkPic} src='images/jin2.jpg' />
                    </div>
                </Link>

                <Link href='/about'>
                    <div className={styles.midLink}>
                        <img className={styles.midLinkPic} src='images/sunset.jpg' />
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default MidNav
