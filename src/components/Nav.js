import React from 'react'
import argentBankLogo from '../img/argentBankLogo.png'
import { NavLink } from 'react-router-dom'
import { ReactComponent as UserCircle } from "../img/user-circle.svg"

import '../styles/nav.css'

const Nav = () => {
  return (
    <nav className="main-nav">
      <NavLink to="/accueil" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={argentBankLogo}
          alt="Argent Bank Logo"
        />
      </NavLink>

      <div>
        <UserCircle className="icon" />
        <NavLink to="/login" className="main-nav-item">
          {' '}
          Sign In
        </NavLink>
      </div>
    </nav>
  )
}

export default Nav
