import React from "react";
import Pfcard from "../Components/Team/Card";
import Teamquote from "../Components/Team/Teamquote";
import { SimpleGrid, Box, Stack, Heading } from "@chakra-ui/react";
import bg from "../Assests/team_resources_PageBackground.png";
import GuidingForceCard from "../Components/Team/GuidingForceCard";
import Header from "../Components/Header/Header";
import Teamgif from "../Assests/TeamHeader.gif";

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
    />
    // </Stack>
  );
};

export default function Teams() {
  const team = [
    {
      name: "Dr Ram ",
      img: "https://media.licdn.com/dms/image/C4E03AQE99qKwDBxBsA/profile-displayphoto-shrink_400_400/0/1604822425913?e=1682553600&v=beta&t=0CJCgQNWcAT4c31FXJ6lGfHRM3Ct9g843ya2PSBdTNk",
      designation: "Chief Operating Officer",
      linkedin: "https://www.linkedin.com/in/dr-ram",
      twitter: "https://www.twitter.com/",
    },
    {
      name: "Sunny Wadhwani ",
      img: "https://media.licdn.com/dms/image/D4D03AQHaS2Bd2rOcVg/profile-displayphoto-shrink_400_400/0/1673857314132?e=1682553600&v=beta&t=xsmxzNnFPMv7Zmh9qXYezRiMFafidhQYPf9CsFcvGA4",
      designation: "Chief Financial Officer",
      linkedin: "https://www.linkedin.com/in/sunny-wadhwani-2aa77012/",
      twitter: "https://www.twitter.com/",
    },
    {
      name: "Prashant Iyer",
      img: "https://media.licdn.com/dms/image/D4D03AQHkY82fneiBwQ/profile-displayphoto-shrink_400_400/0/1678340473179?e=1683763200&v=beta&t=A4FVfChvgNtuOlQSukqJqtpiReEIJRmCdtk6CgqlzHg",
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
      {/* <Teamquote /> */}
      <Header
        gif = {Teamgif}
        text='Meet Our Team'
      />

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
          <GuidingForceCard />
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
          //spacing={1}
          // m={{ base: 5, md: 8 }}
          //backgroundImage={bg}
        >
          {team.map((member) => (
            <Team
              name={member.name}
              img={member.img}
              designation={member.designation}
              linkedin={member.linkedin}
            />
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
}
