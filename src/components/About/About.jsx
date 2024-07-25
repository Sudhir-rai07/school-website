import React from 'react'
import SchoolHistory from './SchoolHistory'
import Vision from '../vision/Vision'
import MessageFromHead from '../message/MessageFromHead'

const About = () => {
  return (
    <div className='w-full px-4 pt-12' id='about'>
    <SchoolHistory />
    <Vision />
    <MessageFromHead />
    </div>
  )
}

export default About
