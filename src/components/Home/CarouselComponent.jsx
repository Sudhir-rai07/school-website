import React from 'react';
import { motion } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Required for carousel styling

const CarouselComponent = ({slides}) => {
  return (
    <div className="w-full p-4 mx-auto my-10">
      <Carousel showArrows={true} showThumbs={false} autoPlay infiniteLoop>
        {slides?.map((slide, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <img src={slide.image} alt={slide.title} className="object-cover w-full rounded-lg shadow-lg h-96" />
            <div className="absolute bottom-0 left-0 w-full p-6 text-white bg-black bg-opacity-50 rounded-b-lg">
              <h2 className="mb-2 text-2xl font-bold">{slide.title}</h2>
              <p className="text-lg">{slide.description}</p>
            </div>
          </motion.div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
