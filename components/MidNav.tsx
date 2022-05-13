import styles from '../styles/Content.module.css'

const MidNav = () => {
    return (
        <div className={styles.midNav}>
            <img className={styles.midBackground} src='/images/sand-1.png' />
            <div className={styles.midLinks}>
                <div className={styles.midLink}>link 1</div>
                <div className={styles.midLink}>link 2</div>
                <div className={styles.midLink}>link 3</div>
            </div>
        </div>
    )
}

export default MidNav
