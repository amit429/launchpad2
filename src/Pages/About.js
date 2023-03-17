import React from 'react'
import Journey from '../Components/About/Journey'
import Testimonials from '../Components/About/Testimonials'
import Timeline from '../Components/About/Timeline'
import Header from '../Components/Header/Header'
import Aboutgif from '../Assests/AboutHeader.gif'

export default function About() {
  return (
    <>
    <Header
      gif={Aboutgif}
      text = 'About Us'
    />
    <Journey />
    <Timeline />
    <Testimonials />
    </>
  )
}
