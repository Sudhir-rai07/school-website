import React from 'react'
import Navbar from '../Navbar'
import Intro from './Intro'
import CarouselComponent from './CarouselComponent'
import QickLinks from './QickLinks'
import About from '../About/About'
import InfracStructure from '../InfraStructure/InfracStructure'
import { slides } from '../../data/slides01'
import Curriculums from '../Academics/curriculum/Curriculums'
import Admission from '../Admission/Admission'
import Footer from '../Footer'

const Home = () => {
  return (
    <div className='w-full h-full'>
      <Navbar />
      <CarouselComponent slides={slides}/>
      <Intro />
      {/* <QickLinks /> */}
      {/* 
      About */}
      <About />

      {/* Infrastructure */}
      <InfracStructure />
      {/* Academics */}
      <Curriculums />
      {/* Admission */}
      <Admission />
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home
