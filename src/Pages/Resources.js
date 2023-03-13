import React from "react";
import ResourcesCard from "../Components/Resources/ResourcesCard";
import pf from "../Assests/pf.png";
import Demo from "../Assests/demo.jpg";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import bg from "../Assests/background1.png";
import Header from "../Components/Header/Header";

const Resource = ({ img, type, title, description }) => {
  return (
    <ResourcesCard
      img={img}
      type={type}
      title={title}
      description={description}
    />
  );
};

export default function Resources() {
  const resources = [
    {
      img: "https://images.unsplash.com/photo-1631557777150-452c4568cc14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
      type: "Type 1",
      title: "Title 1",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      img: "https://images.unsplash.com/photo-1631557777150-452c4568cc14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
      type: "Type 2",
      title: "Title 2",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      img: "https://images.unsplash.com/photo-1631557777150-452c4568cc14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
      type: "Type 3",
      title: "Title 3",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      img: "https://images.unsplash.com/photo-1631557777150-452c4568cc14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
      type: "Type 4",
      title: "Title 4",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      img: "https://images.unsplash.com/photo-1631557777150-452c4568cc14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
      type: "Type 5",
      title: "Title 5",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      img: "https://images.unsplash.com/photo-1631557777150-452c4568cc14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
      type: "Type 6",
      title: "Title 6",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];
  return (
    <>
      <Header
        gif="https://embed.lottiefiles.com/animation/98297"
        text="Our Resources"
      />
      <Box
        pt={{ base: 10, md: 20 }}
        color="black"
        textAlign="center"
        backgroundImage={bg}
      >
        <Heading
          as="h1"
          size="3xl"
          fontFamily="body"
          fontWeight="bold"
          backgroundImage={bg}
        >
          Explore some Resources!
        </Heading>
      </Box>
      <SimpleGrid
        columns={[1, 2, 3]}
        spacing="40px"
        pt="40px"
        backgroundImage={bg}
        pl="1%"
      >
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
  );
}
