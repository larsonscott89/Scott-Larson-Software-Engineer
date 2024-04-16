import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './Header'
import AboutMe from './AboutMe'
import Projects from './Projects'
import ContactMe from './ContactMe'
import Footer from './Footer'
import Home from './Home'

export default function Main() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/aboutme' element={<AboutMe/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contactme' element={<ContactMe/>}/>
      </Routes>
      <Footer />
    </div>
  )
}