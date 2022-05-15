import styles from '../styles/Content.module.scss'

function ShortBio() {
    return (
        <div className={styles.shortBio}>
            <div className={styles.topFade}></div>
            <div className={styles.bottomFade}></div>
            <div className={styles.midImageDiv}>
                <img className={styles.midImage} src='/images/jin2.jpg'></img>
            </div>
            <div className={styles.midContact}>

                <p>jchoi775@gmail.com</p>
            </div>
            <div className={styles.bioText}>
                <p>
                    Available for photography shoot and Live DJ set for your events! Please email for inquiries.
                </p>

            </div>
        </div>
    )
}

export default ShortBio
