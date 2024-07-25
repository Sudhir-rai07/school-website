import React from 'react'
import { motion } from 'framer-motion'
const Curriculam = ({data}) => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.3}}>
      {data?.map((data, idx)=>(
        <div key={idx} className='text-xl font-semibold text-gray-700'>
          {data.text}

          <ul className='flex flex-col gap-2 mt-6'>
          {data.offers.map((offer, idx1)=>(
            <li key={idx1} className='flex flex-col gap-1'><span className='font-semibold text-blue-500'>{offer.key}</span> <p>{offer.value}</p></li>
          ))}
          </ul>
        </div>
      ))}
    </motion.div>
  )
}

export default Curriculam
