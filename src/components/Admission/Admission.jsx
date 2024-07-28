import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { admissionProcess } from '../../data/admissionProcess';
import AdmissionCriteria from './AdmissionCriteria';
import { Link } from 'react-router-dom';
import { FaAngleDown } from 'react-icons/fa';

const Admission = () => {
    const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };
  return (
    <div className='container w-full px-4 mx-auto'>
     <h2 className='text-3xl font-semibold'>Admission Process and Criteria</h2>
     <p className='items-center mt-4 text-lg font-semibold text-gray-700'>
     At <span className="px-1 font-semibold tracking-wide text-blue-500">
     Springdale Public School
          </span>, we strive to make our admission process as transparent and straightforward as possible. Our goal is to welcome students who are eager to learn, grow, and contribute to our vibrant school community. Below, you will find detailed information about our admission process and criteria.
          <span className='block mt-2 text-xl text-blue-500 duration-100 ease-in-out animate-pulse'>Admission forms are available for download. Submit the completed form
          along with required documents at the school office.</span>
     </p>

     <div className="container p-4 mx-auto">
      <h2 className="mb-4 text-2xl font-semibold">Admission Process</h2>
      {admissionProcess.map((item, index) => (
        <AccordionItem
          key={index}
          itemName={item.name}
          process={item.process}
          isOpen={index === openIndex}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>

    <AdmissionCriteria />

    {/* Important dates  */}
    <div className='py-4'>
        <p className='text-3xl font-semibold text-gray-700'>Important Dates</p>
        <ul className='flex flex-col mt-4'>
            <li className='text-lg font-semibold'>Admission Form Availability :  <span className='text-xl font-bold'>March 1st</span></li>
            <li className='text-lg font-semibold'>Last Date for Submission :  <span className='text-xl font-bold'>March 31st</span></li>
            <li className='text-lg font-semibold'>Entrance Test :  <span className='text-xl font-bold'> April 15th</span></li>
            <li className='text-lg font-semibold'>Announcement of Results :  <span className='text-xl font-bold'> April 30th</span></li>
        </ul>
    </div>
    
    <div className='py-8 text-2xl font-semibold text-blue-500 hover:underline'>
      <Link to={'/admission'} className='underline'>Fill admission form here</Link>
    </div>
    </div>
  )
}

export default Admission

const AccordionItem = ({ itemName, process, isOpen, onClick }) => {
    return (
      <div className="mb-4 overflow-hidden border rounded-lg">
        <div onClick={onClick} className='flex justify-between w-full bg-gray-700 cursor-pointer focus:outline-none'>
        <button
          
          className="p-4 text-left text-white "
        >
          {itemName}
        </button>
        <button className='pr-2 text-white'>
          <FaAngleDown />
        </button>
        </div>
        {isOpen && (
          <motion.div
          initial={{height: 0}} animate={{height: "auto"}} transition={{duration: 0.4}} 
            className="p-4 text-blue-800 bg-blue-100"
          >
            {process.map((process, idx)=>{
                return (
                    <>
                        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.4}} key={idx} className='flex flex-col mb-3'>
                            <p className='font-semibold'>{process.key}</p>
                            <p className='text-lg text-gray-700'>{process.value}</p>
                        </motion.div>
                    </>
                )
            })}
          </motion.div>
        )}
      </div>
    );
  };
  