import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Content from '../components/Content'
import Footer from '../components/Footer'
import { url } from 'inspector'
import background from '../public/images/city.jpg'
const Home: NextPage = () => {

  return (
    <div>
      <Head>
        <title >Jin's Porfolio Page REDESIGN SOON</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>



      <Navbar />
      <Hero />
      <Content />
      <Footer />



    </div>
  )
}

export default Home
