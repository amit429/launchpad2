import React from 'react'
import Company from '../Components/Portfolio/Company'
import ImageSlider from '../Components/Portfolio/ImageSlider'
import logo from '../Assests/Launchpad Startups colored.png'
import { SimpleGrid , Box , Stack, Heading } from '@chakra-ui/react'
import Header from '../Components/Header/Header'

const Companies = ({name , img}) =>{
  return(
      <Stack
      m={{ base: 5, md: 8}}
      boxShadow={'md'}
      h={60}
      _hover={{
        cursor: 'pointer',
        transform: 'translateY(-10px)',
      }}
      transition={'all 0.5s ease-in-out'}
    >
      <Company
        name={name}
        img={img}
        />
    </Stack>
  )
}

export default function Portfolio() {

  const companies = [
    {
      name: "Company 1 Name",
      img: logo
    },

    {
      name: "Company 2 Name",
      img: logo
    },

    {
      name: "Company 3 Name",
      img: logo
    },

    {
      name: "Company 4 Name",
      img: logo
    },

    {
      name: "Company 5 Name",
      img: logo
    },

    {
      name: "Company 6 Name",
      img: logo
    },

  ]
  return (
    <>
      <Header
        gif='https://embed.lottiefiles.com/animation/105491'
        text='Our Portfolio'
      />
      <ImageSlider/>
      <Box p={{ base: 0  , md: 6}} mb={8}>
        <Heading
          as="h2"
          size={{ base: 'xl', md: '2xl' }}
          fontWeight="bold"
          textAlign={{ base: 'center', md: 'center' }}
          m={{ base: 4, md: 6 }}
        >
          Our Company Portfolio
        </Heading>
      <SimpleGrid columns={[1, 2, 3]} >
        {companies.map((company) => (
          <Companies name={company.name} img={company.img}/>
        ))}
      </SimpleGrid>
    </Box>
    </>
  )
}
