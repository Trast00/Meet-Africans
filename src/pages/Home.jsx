import React from 'react'
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Download from '../components/home/dowload/Download';
import Features from '../components/home/Features/Features';
import Headline from '../components/home/headline/Headline';
import Interests from '../components/home/interests/Interests';
import PresentationChat from '../components/home/presentations/PresentationChat';

const Home = () => {
  return (
    <div className='home'>
      <Headline />
      <Features />
      <Interests />
      <PresentationChat />
      <Download />
      <Footer />
      <Header />
    </div>
  )
}

export default Home
