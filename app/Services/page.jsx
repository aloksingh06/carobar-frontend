"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";

const services = [
  {
    title: "Imported Cars",
    type: "imported",
    description: "Exclusive access to globally sourced luxury vehicles.",
  },
  {
    title: "Carnet Rentals",
    type: "carnet",
    description: "Drive luxury vehicles across borders with ease.",
  },
  {
    title: "Pre-Owned Luxury",
    type: "pre-owned",
    description: "Certified pre-owned cars in pristine condition.",
  },
];

const carsData = [
  {
    name: " Porsche Cayenne",
    Reg_Year:"2024",
    service: "pre-owned",
    price: "1.55cr",
    engine: "V8 Turbo",
    delivery: "30 Days",
    duration: "Permanent",
    origin: "Germany",
    image: "/image/cayenne1.jpg",
  },
   {
    name: " Mercedes benz SL-55",
    Reg_Year:"2023",
    service: "pre-owned",
    price: "2.55cr",
    engine: "V8 Turbo",
    delivery: "30 Days",
    duration: "Permanent",
    origin: "Germany",
    image: "/image/mbenz1.jpg",
  },
   {
    name: " Land Rover Defender",
    Reg_Year:"2023",
    service: "pre-owned",
    price: "1.55cr",
    engine: "V8 Turbo",
    delivery: "30 Days",
    duration: "Permanent",
    origin: "Germany",
    image: "/image/land1.jpg",
  },
  {
    name: "2018 Ferrarri Portofino",
    Reg_Year:"2018",
    service: "pre-owned",
    price: "1.55cr",
    engine: "V8 Turbo",
    delivery: "30 Days",
    duration: "Permanent",
    origin: "Germany",
    image: "/image/farari1.jpg",
  },

  {
    name: "Porsche 911 GT3",
    Reg_Year:"2023",
    service: "carnet",
    price: "$5,000/month",
    engine: "V6",
    delivery: "Immediate",
    duration: "1-6 Months",
    origin: "UAE",
    image: "/image/mbenz1.jpg",
  },
  
  // ...repeat more if needed
];

export default function ServiceSection() {
  const [selectedService, setSelectedService] = useState(null);
  const filteredRef = useRef(null); 

  const handleServiceClick = (type) => {
    setSelectedService(type);
    setTimeout(() => {
      filteredRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100); 
  };

  const filteredCars = carsData.filter((car) =>
    selectedService ? car.service === selectedService : true
  );



  

  return (
    <div className="text-white min-h-screen w-full">
      {/* Landing Page */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-screen flex flex-col lg:flex-row items-center justify-around gap-58 bg-cover bg-center"
        style={{ backgroundImage: "url('/image/serviseland.jpg')" }}
      >
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="p-8 max-w-lg z-10 mt-[-20vh]"
        >
          <h2 className="text-4xl font-bold text-white">
            Our Premium Services
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Experience the pinnacle of automotive luxury with our exclusive
            services tailored for discerning clients.
          </p>
        </motion.div>

        {/* Filter Cards Section */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col gap-6 p-8 z-10"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer bg-gradient-to-r from-black to-gray-300 p-4 rounded-xl shadow-lg"
              onClick={() => handleServiceClick(service.type)} // 👈 click handler
            >
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-gray-200 text-sm mt-1">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scrolling Cars Section (optional) */}
      <div
        className="overflow-x-auto whitespace-nowrap   py-10  px-24"
        style={{ scrollbarWidth: "none" }} // Firefox
      >
        <div className=" arrow w-14 h-14 bg-black absolute rounded-full right-[4.5%] mt-32 flex items-center justify-center">
          <FaArrowRightLong />{" "}
        </div>
        <div
          className="flex gap-6"
          style={{
            overflow: "scroll",
            scrollbarWidth: "none", // Firefox
            msOverflowStyle: "none", // IE/Edge
          }}
        >
          {carsData.map((car, idx) => (
            <div
              key={idx}
              className="min-w-[250px] bg-gray-200 p-4 rounded-xl text-black shadow-md"
              style={{
                WebkitOverflowScrolling: "touch",
              }}
            >
              <img
                src={car.image}
                alt={car.name}
                className="h-40 w-full object-cover rounded-md"
              />
              <h4 className="text-lg font-bold mt-2">{car.name}</h4>
              <p className="text-sm">{car.service}</p>
              <p className="text-sm">{car.price}</p>
            </div>
          ))}
        </div>  
      </div>

      {/* Filtered Section (scroll target) */}
      <div>
        <h1 className="service-name text-4xl font-semibold ml-10 mb-4 text-black r">
          {selectedService
            ? services.find((s) => s.type === selectedService)?.title
            : "All available services car"}
        </h1>
        <p className="text-black ml-10 w-[60%]">
          We specialize in importing the world's most sought-after luxury
          vehicles directly to India. Our concierge service handles all customs,
          duties, and paperwork, delivering your dream car to your doorstep.
        </p>

        <div
          ref={filteredRef}
          className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredCars.map((car, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-100 text-black p-6 rounded-xl shadow-md"
            >
              <img
                src={car.image}
                alt={car.name}
                className="h-82 w-full object-cover rounded-md"
              />
              <h4 className="text-xl font-bold mt-3">{car.name}</h4>
              <div className="flex justify-between" >
                <ul className="text-sm mt-2 space-y-1">
                <li className=""> <span className="font-semibold text-[15px]">Type:</span> {car.service}</li>
                <li className=""> <span className="font-semibold text-[15px]">Price:</span> {car.price}</li>
                <li className=""> <span className="font-semibold text-[15px]">Reg year:</span> {car.Reg_Year}</li>
                <li className=""> <span className="font-semibold text-[15px]">Engine:</span> {car.engine}</li>
              </ul>
              <ul className="text-sm mt-2 space-y-1">
                <li className=""> <span className="font-semibold text-[15px]">Delivery:</span> {car.delivery}</li>
                <li className=""> <span className="font-semibold text-[15px]">Duration:</span> {car.duration}</li>
                <li className=""> <span className="font-semibold text-[15px]">Origin:</span> {car.origin}</li>
              </ul>
              </div>
              <button className="mt-4 bg-black text-white px-4 py-2 rounded-md font-semibold">
                Book Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
