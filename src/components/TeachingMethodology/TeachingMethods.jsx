import React from 'react'
import TeachingMethod from './TeachingMethod'
import Navbar from '../Navbar'
import { teachingMethods } from '../../data/teachingMethods'
import Footer from '../Footer'

const TeachingMethods = () => {
  return (
    <div className="w-full mx-auto">
    <Navbar />

    <div className='container mx-auto mt-4 text-2xl'>
        <p>
        At <span className="px-1 font-semibold tracking-wide text-blue-500">
        Springdale Public School
          </span>,  Springdale Public School. Our approaches are designed to cater to diverse learning styles, foster engagement, and encourage critical thinking. Here is an overview of the teaching methodologies we employ.
        </p>
    </div> 
      <TeachingMethod data={teachingMethods}/>

      <div className='container w-full py-8 mx-auto mt-4 text-xl md:w-1/2'>
      We look forward to welcoming new students and their families to <span className="px-1 font-semibold tracking-wide text-teal-500">
      Springdale Public School
          </span>. If you have any questions or need further assistance, please do not hesitate to contact our admissions office.
    </div> 
    <Footer />
    </div>
  )
}

export default TeachingMethods
