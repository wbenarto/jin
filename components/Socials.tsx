import styles from '../styles/Content.module.scss'
import { FaInstagram, FaFacebook, FaSoundcloud } from 'react-icons/fa'
import Link from 'next/link'

const Socials = () => {
    return (
        <div className={styles.socialsContainer}>
            <Link href='https://www.facebook.com/TheDjinn'>
                <FaFacebook className={styles.icons} />
            </Link>
            <Link href='https://www.instagram.com/djinn415/'>
                <FaInstagram className={styles.icons} />
            </Link>
            <Link href='https://soundcloud.com/djinn415'>
                <FaSoundcloud className={styles.icons} />
            </Link>

        </div>
    )
}

export default Socials;
