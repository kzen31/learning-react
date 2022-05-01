import React from 'react'
import logo from '../logo.png'

const Navbar = () => {
  return (
    <nav>
      <img src={logo} alt="Logo of react" className='nav--icon' />
      <h3 className='nav--logo_text'>ReactFact</h3>
      <h4 className='nav--title'>React Course - Project 1</h4>
    </nav>
  )
}

export default Navbar