import styles from '../styles/Content.module.scss'
import { FaInstagram, FaFacebook, FaSoundcloud } from 'react-icons/fa'

const Socials = () => {
    return (
        <div className={styles.socialsContainer}>
            <FaInstagram className={styles.icons} />
            <FaFacebook className={styles.icons} />
            <FaSoundcloud className={styles.icons} />

        </div>
    )
}

export default Socials;
