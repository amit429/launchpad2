import React from 'react'
import Company from '../Components/Portfolio/Company'
import ImageSlider from '../Components/Portfolio/ImageSlider'
import logo from '../Assests/Launchpad Startups black.png'
import { SimpleGrid , Box } from '@chakra-ui/react'

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

    {
      name: "Company 7 Name",
      img: logo
    },

    {
      name: "Company 8 Name",
      img: logo
    },

    {
      name: "Company 9 Name",
      img: logo
    }
  ]
  return (
    <>
      <ImageSlider/>
      <Box p={{ base: 0  , md: 6}} mb={8}>
      <SimpleGrid columns={[1, 2, 3]} >
        {companies.map((company) => (
        <Company
            name={company.name}
            img={company.img}
        />
        ))}
      </SimpleGrid>
    </Box>
    </>
  )
}
