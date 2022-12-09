import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <header className='header'>
      <div className='container header__wrapper'>
        <Link to={`/`} className='header__wrapper__brand'>
          KhanhWibu
        </Link>
        <ul className='header__wrapper__nav'>
          <li className='header__wrapper__nav__item-nav'>
            <Link to='/' className='nav-link'>
              Home
            </Link>
          </li>
          <li className='header__wrapper__nav__item-nav'>
            <Link to='/about' className='nav-link'>
              About
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Navbar
