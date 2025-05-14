import React from 'react'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HomePage/HeroSection'
import HomePage from './Components/HomePage/HomePage'
import Footer from './Components/HomePage/Footer'


const page = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <HomePage />
      <Footer />

    </div>
  )
}

export default page