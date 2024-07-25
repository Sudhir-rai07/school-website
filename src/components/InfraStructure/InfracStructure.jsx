import React from 'react'
import CarouselComponent from '../Home/CarouselComponent'
import { infrastructureSlide } from '../../data/slides01'
import { motion } from 'framer-motion'

const InfracStructure = () => {
  return (
    <div className='container px-6 mx-auto'>
      <h2 className='text-2xl font-semibold'>Infrastructure and Facilities</h2>
      <div className='mt-6'>
        <p className='text-lg text-gray-700'>
        At <span className='font-semibold'> Springdale Public School</span> , we are proud to offer state-of-the-art infrastructure and facilities that support our commitment to providing a comprehensive and enriching educational experience. Our campus is designed to cater to the diverse needs of our students, ensuring a conducive learning environment that promotes academic excellence, creativity, and physical well-being.
        </p>
      </div>
      <div>
        <CarouselComponent slides={infrastructureSlide} />
      </div>
      <div className='mt-6'>
      <h2 className='text-2xl font-semibold'>Science and Technology</h2>
        <p className='mt-4 text-lg text-gray-700'>
         We have well-equipped science laboratories for physics, chemistry, and biology, where students can conduct experiments and explore scientific concepts hands-on. Our computer labs are outfitted with the latest hardware and software, providing students with essential digital literacy skills.
        </p>
      </div>
      <motion.div
            key={""}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative mt-4"
          >
            <img src={"/science/01.jpg"} className="object-cover w-full rounded-lg shadow-lg h-96" />
            <div className="absolute bottom-0 left-0 w-full p-6 text-white bg-black bg-opacity-50 rounded-b-lg">
              <h2 className="mb-2 text-2xl font-bold"></h2>
              <p className="text-lg"></p>
            </div>
          </motion.div>
          <div className='text-2xl font-semibold tracking-widest text-right text-blue-500'>And many more ....</div>
    </div>
  )
}

export default InfracStructure
