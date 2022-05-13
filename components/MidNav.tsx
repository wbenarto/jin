import styles from '../styles/Content.module.css'

const MidNav = () => {
    return (
        <div className={styles.midNav}>
            <img className={styles.midBackground} src='/images/sand-1.png' />
            <div className={styles.midLinks}>
                <div className={styles.midLink}>
                    <div className={styles.bottomFade} />
                    <img className={styles.midLinkPic} src='images/jin-dj.JPG' />
                </div>
                <div className={styles.midLink}>
                    <img className={styles.midLinkPic} src='images/jin2.JPG' />

                </div>
                <div className={styles.midLink}>
                    <img className={styles.midLinkPic} src='images/sunset.jpg' />
                    link 3
                </div>
            </div>
        </div>
    )
}

export default MidNav
