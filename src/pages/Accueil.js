import React from 'react'
import Footer from '../components/Footer'
import '../styles/accueil.css'
import Nav from '../components/Nav'
import Baner from '../components/Baner'
import Features from '../components/Features'

const Accueil = () => {
  return (
    <div className='accueil'>
      <Nav />
      <Baner />
      <Features />
      <Footer />
    </div>
  )
}

export default Accueil
