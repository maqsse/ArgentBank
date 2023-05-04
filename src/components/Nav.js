import React from 'react'
import '../styles/nav.css'
import argentBankLogo from "../img/argentBankLogo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 
const Nav = () => {
  return (
    <div>
      <nav className="main-nav">
      <a className="main-nav-logo" href="./index.html">
        <img
          className="main-nav-logo-image"
          src={argentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <div>
        <a className="main-nav-item" href="./sign-in.html">
        <FontAwesomeIcon icon="far fa-circle-user" />
          <i className="fa fa-user-circle"></i>
          Sign In
        </a>
      </div>
    </nav>
    </div>
  )
}

export default Nav
