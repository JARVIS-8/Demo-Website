import { useState } from 'react'
import './Navbar.css'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="navbar-brand">
        <h1>Demo Website</h1>
      </div>
      
      <button 
        className="menu-toggle"
        onClick={toggleMenu}
        aria-expanded={isMenuOpen}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        aria-controls="nav-menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div 
        id="nav-menu"
        className={`navbar-links ${isMenuOpen ? 'open' : ''}`}
      >
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </div>
    </nav>
  )
}

export default Navbar
