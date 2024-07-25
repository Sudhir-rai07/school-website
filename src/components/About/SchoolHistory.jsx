import React from 'react';
import { motion } from 'framer-motion';

const SchoolHistory = () => {
  return (
    <div className="container px-6 mx-auto my-16">
      <motion.div
        className="flex flex-col items-center md:flex-row md:items-start"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="p-4 md:w-1/2"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          
        >
          <h2 className="mb-4 text-3xl font-bold">About Us</h2>
          <p className="mb-4 text-lg text-gray-700">
            Founded in 1985, <span className='font-semibold'>Springdale Public School</span> has  has been dedicated to providing
            quality education and holistic development to students.
          </p>
          <p className="mb-4 text-lg text-gray-700">
            From our humble beginnings, we have expanded our facilities and programs to offer a comprehensive educational experience. Our alumni have gone on to achieve remarkable success in various fields, reflecting the strong foundation they built at our school.
          </p>
          <p className="text-lg text-gray-700">
            Join us as we celebrate our legacy and look forward to a future filled with promise and opportunity. Together, we create a vibrant and supportive environment where every student can thrive.
          </p>
        </motion.div>
        <motion.div
          className="p-4 md:w-1/2"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.9 }}
        >
          <img src="./SCH01.jpg" alt="School History" className="w-full h-auto rounded-lg shadow-lg" />
        </motion.div>
      </motion.div>


      <motion.div
        className="flex flex-col-reverse items-center md:flex-row md:items-start"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="order-2 p-4 md:w-1/2 md:order-1"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="mb-4 text-3xl font-bold">Mission</h2>
          <p className="mb-4 text-lg text-gray-700">
            Over the years, <span className='font-semibold'>Springdale Public School</span>  has garnered numerous accolades for academic and extracurricular excellence. Our students regularly excel in regional and national competitions, bringing pride to our school community.
          </p>
          <p className="mb-4 text-lg font-semibold text-gray-700">
          To empower students with the knowledge, skills, and values needed to thrive
          in a dynamic world
          </p>
          <p className="text-lg text-gray-700">
            These accomplishments are a testament to our commitment to providing an all-rounded education that prepares students for success in their future endeavors.
          </p>
        </motion.div>
        <motion.div
          className="order-1 p-4 md:w-1/2 md:order-2"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.9 }}
        >
          <img src="SCH02.jpg" alt="School Achievements" className="w-full h-auto rounded-lg shadow-lg" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SchoolHistory;
