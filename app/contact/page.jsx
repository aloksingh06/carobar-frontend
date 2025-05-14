import React from 'react';
import ContactForm from './ContactForm';

const Page = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: "url('/contactimg.jpg')" }}
    >
      <div className="  rounded-2xl w-[95%] max-w-7xl mx-auto p-6 md:p-10 flex flex-col lg:flex-row items-center justify-between gap-10">
        
        {/* Left Info Section */}
        <div className="flex-1 text-white max-w-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center lg:text-left">
            CONNECT WITH THE PREMIER LUXURY MARKETPLACE
          </h2>
          <p className="mb-6 text-gray-300 text-center lg:text-left">
            Looking to elevate your brand with duPont REGISTRY? Whether you’re interested in digital, print,
            native content, event sponsorships, or custom marketing solutions, our team is here to help craft
            the perfect advertising strategy for your business.
          </p>
          <div className="text-gray-300 space-y-2 text-sm md:text-base text-center lg:text-left">
            <h3 className="text-2xl font-semibold mb-2 text-white">Advertising Inquiries</h3>
            <p>Email: <a href="mailto:advertise@dupontregistry.com" className="text-indigo-400 hover:underline">advertise@dupontregistry.com</a></p>
            <p>Phone: <a href="tel:+17275739339" className="text-indigo-400 hover:underline">(727) 573-9339</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/company/dupontregistry" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline">@dupontregistry</a></p>
            <p>Address: 4600 140th Avenue North #210, Clearwater, FL 33762, US</p>
          </div>
        </div>

        {/* Right Contact Form Section */}
       <div className="flex-1 bg-opacity-100 backdrop-blur-4xl rounded-lg w-full max-w-xl">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Page;
