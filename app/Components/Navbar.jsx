"use client"; // if using Next.js App Router

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/40 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            {/* Add your logo here */}
            <Image
              src="/path-to-your-logo.png" // Replace with your logo path
              alt="Carobar Logo"
              width={150}
              height={40}
              className="object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
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

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden flex flex-col items-center bg-white/80 backdrop-blur-lg shadow-md text-lg absolute top-16 left-0 right-0 py-4 transition-all duration-300 ${
            menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
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
        </div>
      </div>
    </header>
  );
};

export default Header;
