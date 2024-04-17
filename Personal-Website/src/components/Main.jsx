import { Routes, Route, Navigate } from 'react-router-dom'
import React, { useRef, useState } from 'react'
import Header from './Header'
import AboutMe from './AboutMe'
import Projects from './Projects'
import ContactMe from './ContactMe'
import Footer from './Footer'
import Home from './Home'

export default function Main() {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  }

  return (
    <div 
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className='card-spotlight-effect'
      >
    <div
        className="spotlight"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,.06), transparent 40%)`,
        }}
      />
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