import React from 'react'
import Hero from '../components/landingPage/Hero'
import Header from '../components/landingPage/Header'
import Features from '../components/landingPage/Features'
import Testimonials from '../components/landingPage/Testimonials'
import Footer from '../components/landingPage/Footer'


function Home() {
  return (
    <>
  <div className=' relative z-10 pb-20 '>
  < Header/>
  </div>
    <Hero/>
    <Features/>
    <Testimonials/>
    <Footer/>

    </>
  )
}

export default Home