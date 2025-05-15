"use client"; // if using Next.js App Router

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-md"
    >
      <div className="container mx-auto sm:px-14 px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
           <div>
            <h1 className="text-3xl font-bold border-b-[2px] text-center" >Carobar</h1>
            <h3 className="text-sm text-zinc-600" >Dream car simplified</h3>
           </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">

             <Link
              href="/Services"
              className="text-black hover:text-luxury-orange transition-colors"
            >
              Services
            </Link>

            <Link
              href="/about"
              className="text-black hover:text-luxury-orange transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-black hover:text-luxury-orange transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/cars"
              className="bg-[#d4af37] text-black px-8 py-3 rounded-md hover:bg-white transition-colors duration-300"
            >
              Explore Cars
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className="p-2 rounded-md hover:bg-gray-200 transition"
            >
              {menuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu with AnimatePresence */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="md:hidden flex flex-col items-center bg-white/80 backdrop-blur-lg shadow-md text-lg absolute top-16 left-0 right-0 py-4"
            >
              <Link
                href="/about"
                className="text-luxury-black hover:text-luxury-orange transition-colors py-2"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-luxury-black hover:text-luxury-orange transition-colors py-2"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/cars"
                className="bg-luxury-gold text-luxury-black px-8 py-3 rounded-md hover:bg-white transition-colors duration-300 mt-2"
                onClick={() => setMenuOpen(false)}
              >
                Explore Cars
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Navbar;
