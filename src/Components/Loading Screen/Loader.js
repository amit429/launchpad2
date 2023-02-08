import React from 'react'
import Typewriter from 'typewriter-effect';
import './Loader.css'
import { Box } from '@chakra-ui/react'
import logo from "../.././Assests/Launchpad Startups colored.png"
import { motion } from 'framer-motion'

export default function Loader() {
  return (
    <>
      <Box
        style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            height: "70vh",
            margin: "auto",
            width: "100%",
        }}
      >
        <Box
            style={{
                display: "flex",
                flexDirection: "row",
            }}
        >
            {/* <iframe src="https://embed.lottiefiles.com/animation/90325" className='loading'></iframe> */}
            <Box
                as={motion.div}
                animate={{ opacity: [0, 1] }}
                duration={5}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <img src={logo} alt="logo" className='logo'/>
            </Box>
            
        </Box>
        
        <Box className='typewriter'>
            <Typewriter
            options={{
                strings: ["Launchpad is the home to billion doller ideas 🏆"],
                autoStart: true,
                delay: 40,
                pauseFor: 0,
           }}
            />
        </Box>
       
      </Box>
    </>
  );
}
