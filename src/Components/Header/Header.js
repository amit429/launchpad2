import React from "react";
import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Box,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useRef } from "react";
import header_animation from "../../Assests/header_animation.json";
import "./Header.css";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import "@fontsource/roboto";

// function useParallax(value, distance) {
//   return useTransform(value, [0, 1], [-distance, distance]);
// }

export default function Header(props) {

  // const ref = useRef(null);
  // const { scrollYProgress } = useScroll({ target: ref });
  // const y = useParallax(scrollYProgress, 200);

  return (
    <>
      <Stack
        as={motion.div}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          default: {
            duration: 1,
            ease: "easeInOut",
          },
          scale: {
            type: "spring",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001
          }
        }}
        minH={"80vh"}
        direction={{ base: "column", md: "row" }}
        style={{
          padding: "2rem",
        }}
      >
        <Flex>
          <Box margin={"auto"}>
            <iframe
              className="animation"
              src={props.gif}
            ></iframe>
          </Box>
        </Flex>
        <Flex p={1} align={"center"} justify={"center"}>
          <Stack spacing={6} w={"full"} maxW={"lg"}>
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
              textAlign={{ base: "center", md: "left" }}
            >
              <Text
                as={"span"}
                position={"relative"}
                fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                textAlign={"center"}
              >
                LaunchPad
              </Text>
              <br />{" "}
              {/* <Text color={"blue.900"} as={"span"}>
                {props.text}
              </Text> */}
              {" "}
            </Heading>
            <Text fontSize={{ base: "md", lg: "md" }} color={"gray.500"}
              textAlign={{ base: "center", md: "left" }}
            >
              A platform that acts as a bridge connecting startups to investors and vice versa, allowing the startups to present their idea and purpose to the community. 
Launchpad startups believe in building the future by promoting entrepreneurs of India. 

            </Text>
          </Stack>
        </Flex>
      </Stack>
    </>
  );
}
