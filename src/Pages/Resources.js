import React from 'react'
import ResourcesCard from '../Components/Resources/ResourcesCard'
import pf from '../Assests/pf.png'
import { Box, Heading, SimpleGrid } from '@chakra-ui/react'

const Resource = ({ img, type, title, description }) => {
  return (
    <ResourcesCard
      img={img}
      type={type}
      title={title}
      description={description}
    />
  )
}

export default function Resources() {
  const resources = [
    {
      img: pf,
      type: "Type 1",
      title: "Title 1",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      img: pf,
      type: "Type 2",
      title: "Title 2",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      img: pf,
      type: "Type 3",
      title: "Title 3",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      img: pf,
      type: "Type 4",
      title: "Title 4",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      img: pf,
      type: "Type 5",
      title: "Title 5",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      img: pf,
      type: "Type 6",
      title: "Title 6",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }
  ]
  return (
    <>
      <Box
      pt={{ base: 10, md: 20 }}
      color="black"
      textAlign="center"
      >
        <Heading
          as="h1"
          size="3xl"
          fontFamily="body"
          fontWeight="bold"
        >
          Explore some Resources!
        </Heading>
      </Box>
      <SimpleGrid columns={[1, 2, 3]} spacing="40px" mt="40px">
        {resources.map((resource) => (
          <Resource
            img={resource.img}
            type={resource.type}
            title={resource.title}
            description={resource.description}
          />
        ))}
      </SimpleGrid>
    </>
  )
}

