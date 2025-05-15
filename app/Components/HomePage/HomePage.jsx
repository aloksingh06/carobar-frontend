"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpenCheck, MapPin, Car } from "lucide-react";
import { cars } from '../../data/cars';

const HomePage = () => {
  const services = [
    {
      icon: MapPin,
      title: "Import",
      description: "Import your dream luxury car from around the world",
      link: "/choose-location",
    },
    {
      icon: BookOpenCheck,
      title: "Carnet",
      description: "Seamless carnet documentation for effortless international luxury car travel.",
      link: "/pick-date",
    },
    {
      icon: Car,
      title: "⁠Pre-owned Luxury cars",
      description: "Own certified pre-owned luxury cars with guaranteed quality and prestige",
      link: "/select-car",
    },
  ];

  const featuredCars = [
    {
      name: "Porsche 911 GT3",
      image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
      service: "Rental",
      type: "Sports Car",
    },
    {
      name: "Range Rover Sport",
      image:
        "https://images.unsplash.com/photo-1519245659620-e859806a8d3b?auto=format&fit=crop&w=800&q=80",
      service: "Carnet",
      type: "SUV",
    },
    {
      name: "Mercedes-Benz S-Class",
      image:
        "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80",
      service: "⁠Pre owned",
      type: "Luxury Sedan",
    },
  ];

  const steps = [
  {
    id: 1,
    title: "Browse from our",
    highlight: "Collection",
    image: "/howItWork1.png", // Place your SVG or PNG in public folder
  },
  {
    id: 2,
    title: "Get to know",
    highlight: "your ride",
    image: "/howItWork2.png",
  },
  {
    id: 3,
    title: "Pay & book online or visit",
    highlight: "Showroom",
    image: "/howItWork3.png",
  },
  {
    id: 4,
    title: "Instant payment &",
    highlight: "Transfer",
    image: "/howItWork4.png",
  },
];
  return (
    <div>
      {/* our services  */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ backgroundColor: "#0d0d0d" }}
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
            alt="Background"
            fill
            className="object-cover opacity-5 mix-blend-overlay"
            priority
          />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-gray-300">
              Discover our premium services crafted to bring global luxury car experiences right to your doorstep.


            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 px-20">
            {services.map((step, index) => (
              <Link href={step.link} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative rounded-xl overflow-hidden cursor-pointer hover:scale-[1.03] transition-transform duration-300"
                >
                  <div className="relative p-8 text-center rounded-xl border border-gray-800 hover:border-[#d4af37] transition-colors duration-300">
                    <div
                      className="inline-block p-4 rounded-full mb-6 shadow-lg"
                      style={{
                        backgroundColor: "#d4af37",
                        boxShadow: "0 0 20px rgba(212, 175, 55, 0.2)",
                      }}
                    >
                      <step.icon
                        className="w-8 h-8"
                        style={{ color: "#0d0d0d" }}
                      />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 text-white">
                      {step.title}
                    </h3>
                    <p className="text-gray-300">{step.description}</p>
                    <div className="mt-6">
                      
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>
      </section>

      {/* featured cars  */}

      <section className="py-20" style={{ backgroundColor: "#f9f9f9" }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2 }}
          className="container mx-auto px-4"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2 }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl font-bold mb-4"
              style={{ color: "#0d0d0d" }}
            >
              Featured Cars
            </h2>
            <p style={{ color: "#666666" }}>
              Choose from our selection of premium vehicles
            </p>
          </motion.div>
          <div className="grid  md:grid-cols-3 gap-8">
            {cars.map((car, index) => {
              // Slugify name for dynamic route
              const slug = car.name.toLowerCase().replace(/\s+/g, "-");
              return (
                <Link href={`/book/${car.id}`} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.2, delay: index * 0.1 }}
                    className="hover:scale-[1.03] transition-transform duration-300 cursor-pointer"
                  >
                    <div
                      className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-[1.05] cursor-pointer"
                      onClick={() => navigate(`/cars/${slug}`)}
                    >
                      <div className="relative aspect-[16/9]">
                        <img
                          src={car.image}
                          alt={car.name}
                          className="w-full h-full object-cover"
                          loading="eager"
                          decoding="sync"
                          fetchPriority="high"
                        />
                      </div>
                      <div className="p-6">
                        <h3
                          className="text-2xl font-semibold mb-2"
                          style={{ color: "#0d0d0d" }}
                        >
                          {car.name}
                        </h3>
                        <div className="flex justify-between items-center mb-4">
                          <span
                            className="text-sm"
                            style={{ color: "#666666" }}
                          >
                            {car.type}
                          </span>
                          
                        </div>
                        <button
                          className="w-full py-2 rounded-md transition-colors duration-300"
                          style={{
                            backgroundColor: "#0d0d0d",
                            color: "#ffffff",
                          }}
                          onClick={(e) => {
                            e.stopPropagation(); // prevent parent click
                            navigate(`/rental-form/1`);
                          }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.backgroundColor = "#333333")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.backgroundColor = "#0d0d0d")
                          }
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* how it works  */}

      <section className="bg-[#060d0a] text-white py-16 border-b-1 border-white">
  <div className="max-w-7xl mx-auto text-center px-4">
    <h2 className="text-4xl font-bold tracking-widest mb-4">HOW IT WORKS</h2>
    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
      Buying used luxury cars in India was never this easy. You can now own your dream luxury car in just 4 simple steps at Carobar, India's trusted used car portal.
    </p>

    {/* Desktop Grid - hidden on small screens */}
    <div className="hidden md:grid grid-cols-4 gap-10 mt-20">
      {steps.map((step) => (
        <div key={step.id} className="flex flex-col items-center text-center">
          <img src={step.image} alt={step.highlight} className="h-48 object-contain mb-6" />
          <h3 className="text-base text-gray-300">
            {step.title}{" "}
            <span className="underline-offset-4">{step.highlight}</span>
          </h3>
        </div>
      ))}
    </div>

    {/* Mobile Horizontal Scroll */}
    <div className="flex md:hidden overflow-x-auto gap-6 mt-20 pl-4">
      {steps.map((step) => (
        <div
          key={step.id}
          className="flex-shrink-0 w-64 flex flex-col items-center text-center"
        >
          <img
            src={step.image}
            alt={step.highlight}
            className="h-32 object-contain mb-4"
          />
          <h3 className="text-sm text-gray-300">
            {step.title}{" "}
            <span className="underline-offset-4">{step.highlight}</span>
          </h3>
        </div>
      ))}
    </div>
  </div>
</section>

    </div>
  );
};

export default HomePage;
