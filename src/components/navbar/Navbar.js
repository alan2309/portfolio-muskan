import React, { useState} from 'react'
import './navbar.css'
import mglogo from '../../assets/mglogo.png'

function Navbar() {
  const [click, setClick] = useState(false);
  
  return (
    <div className={`navbar`}>
      <img className='logo' src={mglogo} alt="logo"/>
      <div className='menu-icon' onClick={()=>setClick(!click)}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
      </div>
      <ul className={click?'nav-menu active':'nav-menu'}>
        <li onClick={()=>setClick(false)} className='nav-item'>
          <a className='nav-links' href='#about'>About</a>
        </li>
        <li  onClick={()=>setClick(false)} className='nav-item'>
          <a className='nav-links' href='#projects'>Projects</a>
        </li>
        <li  onClick={()=>setClick(false)} className='nav-item'>
          <a className='nav-links' href='#work'>Work</a>
        </li>
        <li  onClick={()=>setClick(false)} className='nav-item'>
          <a className='nav-links' href='#skills'>Skills</a>
        </li>
        <li  onClick={()=>setClick(false)} className='nav-item'>
          <a className='nav-links' href='#footer'>Contact</a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar