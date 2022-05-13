import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Content from '../components/Content'
import Footer from '../components/Footer'
import Socials from '../components/Socials'
import MidNav from '../components/MidNav'
import styles from '../styles/Content.module.scss'
import ShortBio from '../components/ShortBio'
import { url } from 'inspector'
import background from '../public/images/city.jpg'
const Home: NextPage = () => {

  return (
    <div className={styles.body}>
      <Head>
        <title >Jin's Porfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <MidNav />
      {/* <ShortBio /> */}

      {/* <Content /> */}
      {/* <Footer /> */}
      <Socials />



    </div>
  )
}

export default Home
