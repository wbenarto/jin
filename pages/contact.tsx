import Navbar from '../components/Navbar'
import styles from '../styles/Content.module.css'
import Footer from '../components/Footer'

const Contact = () => {
    return (
        <main> 

            <Navbar />
            <div className={styles.contactContainer}>
            <h1>CONTACT</h1>
            
            <div className={styles.image}>
            <img  src='/images/jin.webp'></img>
            </div>
            <div className={styles.textBox}>
            <p>Jin Choi s a photographer and videographer based in San Francisco, California. With inspiration and creativity at heart, he has a knack for capturing clean, wide open spaces as well as memorable moments.
He is also a .
Available for hire within photography, video and aerial content. </p>

            </div>
            </div>
            <Footer />
        
        </main>
    )
}

export default Contact