import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Curriculam from './components/Academics/curriculum/Curriculam'
import { primaryCurriculam, secondaryCurriculam, seniorSecondaryCurriculam } from './data/curriculam'
import TeachingMethods from './components/TeachingMethodology/TeachingMethods'
import AdmissionForm from './components/Admission/AdmissionForm'
import Faculty from './components/Faculity/Faculty'
import StudentLife from './components/StudentLife/StudentLife'
import Gallery from './components/Gallery/Gallery'
import Contact from './components/Contact'

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false)
  const handleTheme = () =>{
    setDarkTheme(prev => !prev)
  }
  return (
    <div className={`w-full relative h-screen overflow-y-scroll bg-gray-300 ${darkTheme ? "bg-black text-white":"bg-gray-300 text-black"}`}>
     <Routes>
      <Route path='/' element={<Home />}>
          <Route index element={<Curriculam data={primaryCurriculam}/>}/>
          <Route path='secondary-curriculam' element={<Curriculam data={secondaryCurriculam}/>}/>
          <Route path='senior-secondary-curriculam' element={<Curriculam data={seniorSecondaryCurriculam}/>}/>
      </Route> 

      <Route path='/contact' element={<Contact />}/>
      <Route path='/teaching-methods' element={<TeachingMethods />}/>
      <Route path='/admission' element={<AdmissionForm />}/>
      <Route path='/faculty' element={<Faculty />}/>
      <Route path='/student-life' element={<StudentLife />}/>
      <Route path='/gallery' element={<Gallery />}/>
     </Routes>
    </div>
  )
}

export default App
