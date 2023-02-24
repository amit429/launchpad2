import React from "react";
import Pfcard from "../Components/Team/Card";
import pf from "../Assests/pf.png";
import Demo from '../Assests/demo.jpg'
import Teamquote from "../Components/Team/Teamquote";
import { SimpleGrid, Box, Stack, Heading } from "@chakra-ui/react";
import bg from "../Assests/background1.png";

const Team = ({ name, img, designation, linkedin,twitter }) => {
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
    )
}

export default function Teams() {
    const team = [
        {
            name: "Dr Ram ",
            img: Demo,
            designation: "COO",
            linkedin: "https://www.linkedin.com/in/dr-ram",
            twitter: "https://www.twitter.com/"
        },
        {
            name: "Sunny Wadhwani ",
            img: Demo,
            designation: "CFO",
            linkedin: "https://www.linkedin.com/in/sunny-wadhwani-2aa77012/",
            twitter: "https://www.twitter.com/"
        },
        {
            name: "Prashant Iyer",
            img: Demo,
            designation: "Asst Director – Startup Accelerator",
            linkedin: "https://www.linkedin.com/in/prashant-iyer/",
            twitter: "https://www.twitter.com/"
        },
        {
            name: "Sonia Nagdeo ",
            img: Demo,
            designation: "Manager – Research & Innovation",
            linkedin: "https://www.linkedin.com/in/soniya-nagdeo/",
            twitter: "https://www.twitter.com/"
        },
    ]

    
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
                    size="3xl"
                    fontFamily="body"
                    fontWeight="bold"
                backgroundImage={bg}
                    
                >
                    Meet our Team!
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
    )
}

