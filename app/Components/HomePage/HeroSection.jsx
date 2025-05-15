"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'

const HeroSection = () => {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  }

  return (
    <section className="min-h-screen relative overflow-hidden bg-[#060d0a] text-white">
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 0.5, scale: 1, transition: { duration: 1.2, ease: 'easeOut' } }}
      >
        <Image
          src={'/image/homeImage.png'}
          alt="Luxury Car"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      <motion.div
        className="container mx-auto sm:px-20 px-4 relative z-10 h-screen flex flex-col justify-center"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <div className="max-w-3xl">
          <motion.span
            variants={fadeUpVariants}
            className="text-[#d4af37] uppercase mb-4 inline-flex rounded-3xl bg-white/10 backdrop-blur-sm shadow-lg border border-white/10 px-4 py-2"
          >
            Dream Your Simplified
          </motion.span>

<motion.h1
  variants={fadeUpVariants}
  className="text-5xl md:text-7xl font-bold mb-6  w-[80vw] leading-tight"
>
  Drive in Style,
  {' '}
  <span className="text-[#d4af37]  sm:inline">
    <Typewriter
      words={['Import', 'Carnet', 'Pre-Owned Cars']}
      loop={0}
      cursor
      cursorStyle="|"
      typeSpeed={70}
      deleteSpeed={70}
      delaySpeed={1500}
    />
  </span>
  <br className="hidden sm:block" />
  with Ease
</motion.h1>


          <motion.p
            variants={fadeUpVariants}
            className="text-xl mb-8 text-gray-300"
          >
            Discover our exclusive collection of premium vehicles for an unforgettable journey.
          </motion.p>

          <motion.div variants={fadeUpVariants} className="flex gap-4 justify-start">
            <button className="bg-[#d4af37] text-black px-8 py-3 rounded-md hover:bg-white transition-colors duration-200">
              Book Now
            </button>
            <button className="border border-white px-8 py-3 rounded-md hover:bg-white hover:text-black hover:text-luxury-black transition-colors duration-200">
              Explore Cars
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection
