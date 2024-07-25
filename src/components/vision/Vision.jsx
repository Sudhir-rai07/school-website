import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Vision = () => {
  const ref3 = useRef(null);
  const isInView3 = useInView(ref3, { once: true });

  return (
    <div className="container px-6 mx-auto my-16 space-y-16">
      {/* Third Section - Vision */}
      <motion.div
        ref={ref3}
        className="flex flex-col items-center md:flex-row md:items-start"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView3 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="p-4 md:w-1/2"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.9 }}
        >
          <img src="vision.jpg" alt="School Vision" className="w-full h-auto rounded-lg shadow-lg" />
        </motion.div>
        <motion.div
          className="p-4 md:w-1/2"
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="mb-4 text-3xl font-bold text-green-500">Our Vision</h2>
          <p className="mb-4 text-lg font-semibold text-gray-700">
            At <span className='font-semibold'>Horizon Edge School</span> , To create a learning environment that fosters academic excellence, critical
            thinking, and ethical values</p>
          <p className="mb-4 text-lg text-gray-700">
            We strive to provide a supportive and challenging educational experience that prepares students for success in an ever-changing world. Our goal is to cultivate a community of learners who are confident, compassionate, and committed to making a positive impact on society.
          </p>
          <p className="text-lg text-gray-700">
            Together, we envision a future where our students lead with integrity, excel in their chosen paths, and contribute meaningfully to the world around them.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Vision;
