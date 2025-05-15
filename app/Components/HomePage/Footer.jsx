import React from "react";
import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 pt-16 pb-8 text-center">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-15">
        {/* Logo & Address */}
        <div className="mb-6">
          {/* <img
            src="/logo.svg"
            alt="Romans International"
            className="mx-auto h-8 mb-4"
          /> */}
          <h1 className="text-6xl font-bold text-white">Carobar</h1>
          <p className="uppercase tracking-wide text-zinc-200 text-sm mt-4">
            Dream Your Simplified
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-2 sm:gap-6 text-white text-xl mb-4 flex-wrap">
          <a href="#">
            <FaInstagram size={40} />
          </a>
          <a href="#">
            <FaYoutube size={40} />
          </a>
          <a href="#">
            <FaSquareXTwitter size={40} />
          </a>
          <a href="#">
            <FaLinkedin size={40} />
          </a>
        </div>

        {/* Phone */}
        <p className="text-white text-lg mb-8">7974022330</p>

        {/* Disclaimer */}
        <p className="text-sm text-gray-400 max-w-xl sm:max-w-5xl mx-auto mb-4 px-2 sm:px-0">
          Experience the elegance of driving world-class luxury cars with our exclusive services.
          From global car imports to seamless carnet support and certified pre-owned luxury vehicles, we redefine prestige and comfort.
        </p>
        <p className="text-sm text-gray-400 max-w-xl sm:max-w-5xl mx-auto px-2 sm:px-0">
          Our commitment is to deliver exceptional service with unmatched attention to detail.
          Whether it's for a special occasion or an everyday indulgence, elevate your journey with us.
          Drive your dreams, experience luxury, and make every mile memorable.
        </p>

        {/* Footer links */}
        <div className="flex flex-row justify-between flex-wrap gap-6 text-sm mt-8 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6">
            <a href="/" className="hover:text-white uppercase ">
              Home
            </a>
            <a href="#" className="hover:text-white uppercase">
              Services
            </a>
            <a href="#" className="hover:text-white uppercase">
              About
            </a>
            <a href="#" className="hover:text-white uppercase">
              Contact Us
            </a>
          </div>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6">
            <a href="#" className="hover:text-white uppercase">
              +91 123 456 7890
            </a>
            <a href="#" className="hover:text-white uppercase">
              carobar@gmail.com
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 flex flex-col md:flex-row justify-between items-center text-xs gap-4">
          <p>© 2025 All Rights Reserved</p>
          <div className="flex gap-2 sm:gap-4 flex-wrap justify-center">
            <a href="#" className="hover:text-white">
              Sitemap
            </a>
            <a href="#" className="hover:text-white">
              Cookie Policy
            </a>
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Complaints Procedure
            </a>
            <a href="#" className="hover:text-white">
              Modern Slavery Statement
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
