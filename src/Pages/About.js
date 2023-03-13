import React from 'react'
import Journey from '../Components/About/Journey'
import Testimonials from '../Components/About/Testimonials'
import Timeline from '../Components/About/Timeline'
import Header from '../Components/Header/Header'

export default function About() {
  return (
    <>
    <Header
      gif="https://embed.lottiefiles.com/animation/91238"
      text = 'About Us'
    />
    <Journey />
    <Timeline />
    <Testimonials />
    </>
  )
}
