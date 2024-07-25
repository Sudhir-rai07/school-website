import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../Navbar';

const images = [
  'gallery/sports_day.jpg',
  'gallery/science_exhibition.jpg',
  'gallery/cultural_fest.webp',
  'gallery/classroom.jpg',
  'gallery/library.jpg',

];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className='w-full'>
        <Navbar />
    <div className="container mx-auto mt-6">
      <h2 className="mb-6 text-2xl font-bold text-center">Image Gallery</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            onClick={() => setSelectedImage(src)}
          >
            <img src={src} alt={`Random ${index}`} className="object-cover w-full h-auto" />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative max-w-3xl p-4 mx-auto bg-white rounded-lg shadow-lg">
              <button
                className="absolute text-2xl font-bold text-white top-2 right-2"
                onClick={() => setSelectedImage(null)}
              >
                &times;
              </button>
              <motion.img
                src={selectedImage}
                alt="Selected"
                className="object-cover w-full h-auto rounded-lg"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    </div>
  );
};

export default Gallery;
