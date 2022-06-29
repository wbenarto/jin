import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Socials from '../components/Socials'
import styles from '../styles/Content.module.scss'
import ShortBio from '../components/ShortBio'

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
      <ShortBio props={'photography'} />
      <ShortBio props={'music'} />
      <Socials />



    </div>
  )
}

export default Home
