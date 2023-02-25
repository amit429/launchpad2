import React from "react";
import Pfcard from "../Components/Team/Card";
import pf from "../Assests/pf.png";
import Demo from "../Assests/demo.jpg";
import Teamquote from "../Components/Team/Teamquote";
import { SimpleGrid, Box, Stack, Heading } from "@chakra-ui/react";
import bg from "../Assests/background1.png";
import Card2 from "../Components/Team/Card2";

const Team = ({ name, img, designation, linkedin, twitter }) => {
  return (
    // <Stack
    //     boxShadow={'md'}
    //     _hover={{
    //         cursor: 'pointer',
    //         transform: 'translateY(-10px)',
    //     }}
    //     transition={'all 0.5s ease-in-out'}
    // >
    <Pfcard
      name={name}
      img={img}
      designation={designation}
      linkedin={linkedin}
      twitter={twitter}
    />
    // </Stack>
  );
};

export default function Teams() {
  const team = [
    {
      name: "Dr Ram ",
      img: "https://media.licdn.com/dms/image/C4E03AQE99qKwDBxBsA/profile-displayphoto-shrink_400_400/0/1604822425913?e=1682553600&v=beta&t=0CJCgQNWcAT4c31FXJ6lGfHRM3Ct9g843ya2PSBdTNk",
      designation: "COO",
      linkedin: "https://www.linkedin.com/in/dr-ram",
      twitter: "https://www.twitter.com/",
    },
    {
      name: "Sunny Wadhwani ",
      img: "https://media.licdn.com/dms/image/D4D03AQHaS2Bd2rOcVg/profile-displayphoto-shrink_400_400/0/1673857314132?e=1682553600&v=beta&t=xsmxzNnFPMv7Zmh9qXYezRiMFafidhQYPf9CsFcvGA4",
      designation: "CFO",
      linkedin: "https://www.linkedin.com/in/sunny-wadhwani-2aa77012/",
      twitter: "https://www.twitter.com/",
    },
    {
      name: "Prashant Iyer",
      img: "https://media.licdn.com/dms/image/C4E03AQHXHQU0_N4tQw/profile-displayphoto-shrink_400_400/0/1581656267160?e=1682553600&v=beta&t=U23WB49GOnEZby1U63quRJqDQIj48itaCRRXsTFOJEs",
      designation: "Asst Director – Startup Accelerator",
      linkedin: "https://www.linkedin.com/in/prashant-iyer/",
      twitter: "https://www.twitter.com/",
    },
    {
      name: "Sonia Nagdeo ",
      img: "https://media.licdn.com/dms/image/D4D03AQFB7_FJrNNv9A/profile-displayphoto-shrink_400_400/0/1666263250098?e=1682553600&v=beta&t=Elm6OBbUnepf-qbMihi1m7BJMFiQ69L4dZ5Fi4zEAgc",
      designation: "Manager – Research & Innovation",
      linkedin: "https://www.linkedin.com/in/soniya-nagdeo/",
      twitter: "https://www.twitter.com/",
    },
  ];

  return (
    <>
      <Teamquote />
      <Box
        pt={{ base: 10, md: 20 }}
        color="black"
        textAlign="center"
        backgroundImage={bg}
      >
        <Heading
          as="h1"
          size="2xl"
          fontFamily="body"
          fontWeight="bold"
          backgroundImage={bg}
        >
          Meet Our Guiding Force
        </Heading>

        <Box
          display={{ base: "flex", md: "flex" }}
          flexDirection={{ base: "row", md: "column" }}
          backgroundImage={bg}
          justifyContent="center"
          alignItems="center"
          margin={"auto"}
        >
          <Card2 />
        </Box>

        <Heading
          as="h1"
          size="2xl"
          fontFamily="body"
          fontWeight="bold"
          backgroundImage={bg}
        >
          Meet our Team
        </Heading>

        <SimpleGrid
          columns={{ base: 1, md: 4 }}
          spacing={1}
          // m={{ base: 5, md: 8 }}
          //backgroundImage={bg}
        >
          {team.map((member) => (
            <Team
              name={member.name}
              img={member.img}
              designation={member.designation}
              linkedin={member.linkedin}
              twitter={member.twitter}
            />
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
}
