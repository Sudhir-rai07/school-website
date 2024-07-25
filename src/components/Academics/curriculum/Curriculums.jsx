import React, { useState } from 'react'
import Curriculam from './Curriculam'
import { Link, Outlet } from 'react-router-dom'

const Curriculums = () => {
  const [curriculam, setCurriculam] = useState("primary")
  return (
    <div className="container px-6 pb-8 mx-auto my-16">
      <h2 className='text-3xl font-semibold'>About our Academics</h2>
      <div className='mt-4 text-lg text-gray-700'>
        <p>
        At <span className="px-1 font-semibold tracking-wide text-blue-500">
            Horizon Edge School
          </span>, we offer a comprehensive and dynamic curriculum that caters to students at various stages of their academic journey. Our programs are designed to nurture intellectual curiosity, foster critical thinking, and prepare students for future academic and personal success. Below is an overview of the curriculum offered at different educational levels:
        </p>
      </div>

      <div className='mt-4'>
      <div className='container flex justify-around w-full py-2 mb-6 text-lg text-gray-300 bg-gray-800 md:text-2xl'>
        <p onClick={()=>setCurriculam("primary")} className={`${curriculam === "primary" ? "text-blue-500":""}`}><Link to={"/"}>Primary</Link></p>
        <p onClick={()=>setCurriculam("secondary")} className={`${curriculam === "secondary" ? "text-blue-500":""}`}><Link to={"/secondary-curriculam"}>Secondary</Link></p>
        <p onClick={()=>setCurriculam("seniorsecondary")} className={`${curriculam === "seniorsecondary" ? "text-blue-500":""}`}><Link to={"/senior-secondary-curriculam"}>Senior Secondary</Link></p>
      </div>
        <Outlet />
      </div>

      <div className='container mt-6'>
        <p className='text-xl font-semibold text-gray-700'>Our curriculum is designed to be flexible and adaptive, ensuring that each student receives the support and opportunities they need to thrive academically and personally. We are committed to providing a balanced and enriching educational experience that prepares students for success in a rapidly changing world.</p>
      </div>

      <div className='mt-6 text-right text-blue-500'>
      <Link to={'/teaching-methods'} className='text-2xl hover:underline'>See more about our teaching methodologies</Link>
      </div>
    </div>
  )
}

export default Curriculums
