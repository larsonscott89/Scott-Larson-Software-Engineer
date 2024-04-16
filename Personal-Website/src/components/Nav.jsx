import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import '../styles/Nav.css'

export default function Nav() {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

  return (
    <div className='navbar'>
      <Link to='#' className='menu-bars'>
        <FaIcons.FaBars onClick={showSidebar} />
      </Link>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' onClick={showSidebar}>
          <li className='navbar-toggle'>
            <Link to='#' className='close-button'>
              <AiIcons.AiOutlineClose />
            </Link>
            <Link to='/' className='nav-text'>
              Home
            </Link>
            <Link to='/aboutme' className='nav-text'>
              About Me
            </Link>
            <Link to='/projects' className='nav-text'>
              Projects
            </Link>
            <Link to='/contactme' className='nav-text'>
              Contact Me
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}