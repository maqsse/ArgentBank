import React from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import  { useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/auth.Actions';
import { ReactComponent as UserCircle } from "../img/user-circle.svg"
import '../styles/signin.css'
 
const SignIn = ({login}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  

  const handleSubmit = (event) => {
  
    event.preventDefault();
    login(username, password);
  };

  

  return (
    <div>
      <Nav />
      <main className="main bg-dark">
              <section className="sign-in-content">
      <UserCircle className="sign-in-icon" />
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" autoComplete="username" value={username} onChange={(event) => setUsername(event.target.value)} />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" autoComplete="current-password" value={password} onChange={(event) => setPassword(event.target.value)} />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me"  />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className="sign-in-button">Sign In</button>
          <div className="errorMessage"></div>
        </form>
      </section>
          </main>
          <Footer />
    </div>
  )
}

const mapDispatchToProps = {
  login,
};

export default connect(null, mapDispatchToProps)(SignIn);
