import styles from '../styles/ShortBio.module.scss'
import { FaArrowRight } from 'react-icons/fa'
import Link from 'next/link'

function ShortBio({ props }: any) {
    console.log(props)
    return (

        <div className={styles.shortBio}>
            <div className={styles.topFade}></div>
            <div className={styles.bottomFade}></div>
            <div className={styles.midImageDiv}>
                <img className={styles.midImage} src={props == 'photography' ? '/images/jin2.jpg' : '/images/jindj.jpg'}></img>
            </div>
            <Link href={props == 'photography' ? '/photography' : '/music'}>
                <div className={styles.midContact}>

                    <p className={styles.bioText}>{props == 'photography' ? 'PHOTOGRAPHY' : 'MUSIC'}</p>
                    <div><FaArrowRight style={{ fontSize: '40px' }} /></div>
                </div>
            </Link>

            {/* <div className={styles.bioText}>
                <p>
                    Available for photography shoot and Live DJ set for your events! Please email for inquiries.
                </p>

            </div> */}
        </div>
    )
}

export default ShortBio
