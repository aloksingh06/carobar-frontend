'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    category: '',
    notes: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // Yahan aap API call ya confirmation logic laga sakte ho
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl mx-auto mt-5   p-8 text-white rounded-lg shadow-2xl"
    >
      <h2 className="text-3xl font-bold mb-6 text-center text-white/90">
        Connect With the Premier Luxury Marketplace
      </h2>
      <p className="mb-6 text-center text-white/70">
        Looking to elevate your brand with duPont REGISTRY? Whether you're interested in digital, print, native content, or sponsorships, our team is here to help craft the perfect advertising strategy for your business.
      </p>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 bg-gray-800  md:grid-cols-2 gap-4">
        <input 
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name" 
          className="p-3 rounded border border-gray-600 text-white placeholder-white/70" 
        />
        <input 
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name" 
          className="p-3 rounded border border-gray-600 text-white placeholder-white/70" 
        />
        <input 
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Company *" 
          className="p-3 rounded border border-gray-600 text-white placeholder-white/70" 
        />
        <input 
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email *" 
          className="p-3 rounded border border-gray-600 text-white placeholder-white/70" 
        />
        <input 
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number *" 
          className="p-3 rounded border border-gray-600 text-white placeholder-white/70" 
        />
        <select 
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="p-3 rounded border border-gray-600 text-white"
        >
          <option value="">Please Select</option>
          <option value="Automotive">Automotive</option>
          <option value="Real Estate">Real Estate</option>
          <option value="Yachting">Yachting</option>
          <option value="Other">Other</option>
        </select>
        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          placeholder="Additional Notes"
          className="col-span-full p-3 rounded border bg-gray-600 border-gray-100 h-32 text-white placeholder-white/70"
        />
        <button
          type="submit"
          className="col-span-full mt-4 p-3 bg-indigo-600 hover:bg-indigo-700 transition rounded text-white font-semibold"
        >
          Start Advertising
        </button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
