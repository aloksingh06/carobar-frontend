'use client';

import { useParams } from 'next/navigation';
import { cars } from '@/app/data/cars';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const BookCarPage = () => {
  const params = useParams();
  const { carId } = params;
  const selectedCar = cars.find((car) => car.id === carId);

  const [currentIndex, setCurrentIndex] = useState(0);

  if (!selectedCar) {
    return <div className="text-center text-xl mt-20">Car not found</div>;
  }

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % selectedCar.images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? selectedCar.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 mt-20 w-full">
      {/* Image Gallery */}
      <div className="relative mx-auto h-[600px] overflow-hidden w-[80%]">
        <AnimatePresence initial={false} mode="wait">
          <motion.img
            key={selectedCar.images[currentIndex]}
            src={selectedCar.images[currentIndex]}
            alt={`${selectedCar.name} ${currentIndex + 1}`}
            className="object-cover w-full h-full"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, type: 'spring' }}
          />
        </AnimatePresence>

        {/* Left Arrow */}
        <button
          onClick={prevImage}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/60 text-white p-3 rounded-full hover:bg-black/80"
        >
          <ChevronLeft size={28} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextImage}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/60 text-white p-3 rounded-full hover:bg-black/80"
        >
          <ChevronRight size={28} />
        </button>
      </div>

      {/* Car Details */}
      <div className="max-w-6xl mx-auto p-6">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-extrabold mb-4 text-gray-800">{selectedCar.name}</h1>
          <p className="text-lg text-gray-700 mb-4">{selectedCar.description}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800">
            <p className="font-medium">Type: {selectedCar.type}</p>
            {/* <p className="font-medium">Service: {selectedCar.service}</p> */}
            <p className="font-bold text-2xl text-green-600">Price: {selectedCar.price}</p>
          </div>
        </motion.div>

        {/* Billing Details */}
        <motion.div
          className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Billing Breakdown</h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex justify-between border-b pb-2">
              <span>Car Price (Dubai):</span> <span>{selectedCar.Car_Price_dubai}</span>
            </li>
            <li className="flex justify-between border-b pb-2">
              <span>Import Duties & Taxes:</span> <span>{selectedCar.Import_Duties_Taxes}</span>
            </li>
            <li className="flex justify-between border-b pb-2">
              <span>Shipping, Insurance, etc.:</span> <span>{selectedCar.Shipping_insurance_etc}</span>
            </li>
            <li className="flex justify-between border-b pb-2">
              <span>RTO Registration:</span> <span>{selectedCar.RTO_Registration}</span>
            </li>
            <li className="flex justify-between border-b pb-2">
              <span>Miscellaneous Costs:</span> <span>{selectedCar.Miscellaneous_Costs}</span>
            </li>
            <li className="flex justify-between font-bold text-xl text-green-700 mt-4">
              <span>Total Estimated Cost:</span> <span>{selectedCar.Total_Estimated_Cost}</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default BookCarPage;
