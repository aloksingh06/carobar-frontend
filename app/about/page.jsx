'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Car, Star, Clock } from 'lucide-react';
import Footer from '../Components/HomePage/Footer';

export default function AboutPage() {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 40 },
    visible: { opacity: 1, scale: 1, y: 0 },
  };

  return (
    <>
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section
        className="h-screen bg-cover bg-center relative flex pt-40 justify-center"
        style={{ backgroundImage: "url('/image/aboutimg1.jpg')" }}
      >
        <div className=" inset-0 bg-black bg-opacity-60 z-0" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="z-10 text-white px-6 md:px-32 max-w-7xl text-center space-y-2"
        >
          <p className="text-4xl font-bold tracking-widest text-orange-300 uppercase">Welcome To</p>
          <h1 className="text-4xl md:text-[150px] font-bold border-b-[2px] leading-36">Carobar</h1>
          <h1 className='text-4xl font-semibold mt-5 text-zinc-200' >Dream Car Simplified</h1>
        </motion.div>
      </section>

      {/* Luxury Section */}
      <section
        className="h-screen flex items-center justify-center bg-white px-6 relative  bg-center bg-fixed"
        style={{ backgroundImage: "url('/xyz.jpg')" }}
      >

        {/* Light Flash Overlay */}
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ repeat: 0, duration: 1.5, ease: 'easeInOut' }}
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent z-10 pointer-events-none"
        ></motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          className="max-w-7xl w-full  relative z-20"
        >
          <motion.h2
            variants={cardVariants}
            className="text-4xl md:text-5xl font-bold text-black text-center mb-8"
          >
            Luxury Car Rental Excellence
          </motion.h2>
          <motion.p
            variants={cardVariants}
            className="text-zinc-500 text-center mb-12 text-lg px-4 md:px-32 leading-relaxed"
          >
            From exotic sports cars to luxury sedans, we offer a seamless rental experience that matches your lifestyle
            and class. Indulge in comfort, performance, and elegance — all in one ride.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8 px-4">
            <motion.div
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border-t-4 border-orange-400"
            >
              <Car className="text-orange-500 w-10 h-10 mb-4" />
              <h3 className="text-xl font-bold mb-2">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To provide unmatched luxury car rental services tailored for individuals who value style, performance,
                and comfort.
              </p>
            </motion.div>

            <motion.div
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300, delay: 0.1 }}
              className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <Star className="text-yellow-500 w-10 h-10 mb-4" />
              <h3 className="text-xl font-bold mb-2">Premium Fleet</h3>
              <p className="text-gray-700 leading-relaxed">
                Choose from our curated lineup of top-tier brands like Ferrari, Rolls Royce, Lamborghini, and more.
              </p>
            </motion.div>

            <motion.div
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300, delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <Clock className="text-blue-500 w-10 h-10 mb-4" />
              <h3 className="text-xl font-bold mb-2">24/7 Concierge</h3>
              <p className="text-gray-700 leading-relaxed">
                Always-on support and custom planning to elevate your luxury experience from start to finish.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>

    {/* footer section  */}
    <section>
      <Footer/>
    </section>
    </>
    
  );
}
