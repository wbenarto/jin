import React from 'react'
import Footer from '../components/Footer'
import styles from '../styles/Content.module.scss'
import styles2 from '../styles/Music.module.scss'

function Music() {
    return (
        <div className={styles.body}>
            
            <div className={styles.contactContainer}>
                <div className={styles2.banner}>
                    <img className={styles2.bannerImage} src='/images/travel/baynight.jpg' alt='Bay Bridge'></img>
                    <img className={styles2.bannerLogo} src='images/betweenthebeats.jpg' alt='between the beats logo'></img>

                </div>
                <div className={styles2.musicContent}>

                    <h1 className={styles2.white}>DJ JINN Music</h1>
                    <h2>San Francisco</h2>
                    <p>Thanks for visiting my page and taking time to listen to the rhythms and beats I am able to share with you. Lover of all disco, funk, jazz, soul, and just good music in general, it is where we share and express our feelings and emotions through sound. Posting some of my live show recordings from www.cambrianradio.co.uk live every Sundays from 10AM-12PM Pacific / 6PM-8PM UK time. Feel free to interact with me on my Facebook page at www.facebook.com/djinn415. Available to spice up your events here in the Bay Area! </p>
                </div>
                <div className={styles2.musicContent}>
                    <div className={styles2.socialLinks}><h3>Twitch</h3><a href='https://www.twitch.tv/djinn415'>https://www.twitch.tv/djinn415</a></div>
                    <div className={styles2.socialLinks}><h3>Sound Cloud</h3><a href='https://soundcloud.com/djinn415'>https://soundcloud.com/djinn415</a></div>
                    <div className={styles2.socialLinks}><h3>Cambrian</h3><a href='https://www.cambrianradio.co.uk/'>https://www.cambrianradio.co.uk/</a></div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Music
