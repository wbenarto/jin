import Navbar from '../components/Navbar'
import styles from '../styles/Content.module.css'
import Footer from '../components/Footer'

const About = () => {

    // async function handleOnSubmit(e) {
    //     e.preventDefault();
    //     const formData = {}

    //     Array.from(e.currentTarget.elements).forEach(field => {
    //         if (!field.name) return;
    //         formData[field.name] = field.value;
    //     })

    //     console.log(formData)
    // }

    return (
        <main >

            <Navbar />
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
                    {/* <form method='post' onSubmit={handleOnSubmit}>
                    <p>
                        <label htmlFor='name'>Name</label>
                        <input type='text' name='name' />
                    </p>
                    <p>
                        <label htmlFor='email'>Email</label>
                        <input type='email' name='email' />
                    </p>
                    <p>
                        <label htmlFor='message'>Message</label>
                        <textarea name='message' />
                    </p>
                    <p>
                        <button>Submit</button>
                    </p>
                </form> */}
                </div>
            </div>
            <Footer />

        </main>
    )
}

export default About