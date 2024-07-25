import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { admissionCriteria } from '../../data/admissionCriteria';


const AdmissionCriteria = () => {
    const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };
  return (
    <div className='container w-full mx-auto'>
     <h2 className='text-3xl font-semibold'>Admission Process and Criteria</h2>
     <p className='items-center mt-4 text-lg font-semibold text-gray-700'>
     At <span className="px-1 tracking-wide text-blue-500">
     Springdale Public School

          </span>,  Admission is based on merit and availability of seats. Entrance tests may be
          conducted for certain grades.
     </p>

     <div className="container p-4 mx-auto">
      <h2 className="mb-4 text-2xl font-semibold">Admission Process</h2>
      {admissionCriteria.map((item, index) => (
        <AccordionItem
          key={index}
          itemName={item.name}
          process={item.values}
          isOpen={index === openIndex}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
    </div>
  )
}

export default AdmissionCriteria

const AccordionItem = ({ itemName, process, isOpen, onClick }) => { 
    return (
      <div className="mb-4 overflow-hidden border rounded-lg">
        <button
          onClick={onClick}
          className="w-full p-4 text-left text-white bg-gray-700 focus:outline-none"
        >
          {itemName}
        </button>
        {isOpen && (
          <motion.div
          initial={{height: 0}} animate={{height: "auto"}} transition={{duration: 0.4}} 
            className="p-4 text-blue-800 bg-blue-100"
          >
            {process.map((process, idx)=>{
                return (
                    <>
                        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.4}} key={idx} className='flex flex-col mb-3'>
                            <p className='font-semibold'>{process}</p>
                        </motion.div>
                    </>
                )
            })}
          </motion.div>
        )}
      </div>
    );
  };
  