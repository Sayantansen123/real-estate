import React, { useState } from 'react'
import { BiMenuAltRight } from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler';
import "./Header.css"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const getMenuSTyle = (menuOpen) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpen && "-100%" }
    }
  }

  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="./logo.png" alt="logo" width={50} />

        <OutsideClickHandler onOutsideClick={() => setMenuOpen(false)}>
          <div className="flexCenter h-menu " style={getMenuSTyle(menuOpen)}>
            <a href="#resedencies">Residencies</a>
            <a href="#value">Our Value</a>
            <a href="#contact">Contact Us</a>
            <a href="#get">Get Started</a>
            <button className='button'>
              <a href="mailto:example123@gmail.com">Contact</a>
            </button>
          </div>
          <div className="menu-icon" onClick={() => { setMenuOpen((prev) => !prev) }}>
            <BiMenuAltRight size={30} />
          </div>
        </OutsideClickHandler>
      </div>
    </section>
  )
}

export default Header
