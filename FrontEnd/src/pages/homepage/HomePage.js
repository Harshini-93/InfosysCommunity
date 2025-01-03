import React from 'react'
import HeroSection from './HeroSection'
import About from './About'
import Footer from './Footer'
import Navbar from '../../components/navbar/Navbar'

function HomePage() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <About/>
      <Footer/>
      </div>
  
  )
}

export default HomePage