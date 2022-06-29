import { MenuNav } from '../components/MenuNav'
import styles from '../styles/Content.module.css'
import Footer from '../components/Footer'

const About = () => {


    return (
        <main >

            <MenuNav />
            <div className={styles.contactContainer} >
                <h3>CONTACT</h3>

                <div className={styles.imageContact}>
                    <img src='/images/jin.webp'></img>
                </div>
                <div className={styles.textBox}>
                    <p>Jin Choi s a photographer and videographer based in San Francisco, California. With inspiration and creativity at heart, he has a knack for capturing clean, wide open spaces as well as memorable moments.
                        <br />
                        <br />Available for hire within photography, video and aerial content. </p>
                </div>
                <div>
                    <h2>Email me for inquiries at jchoi775@gmail.com </h2>

                </div>
            </div>
            <Footer />

        </main>
    )
}

export default About