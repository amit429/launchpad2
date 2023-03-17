import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
  keyframes,
  ScaleFade,
  SimpleGrid,
  Flex,
  Image,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { SiLinkedin, SiTwitter } from "react-icons/si";
import { FaSuitcase, FaMapPin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import bg from "../../Assests/team.gif";
import { useInViewport } from "react-in-viewport";
import React, { useRef } from "react";

export default function Pfcard(props) {
  const ref = useRef(null);
  
  return (
    <Flex
      //bg="#edf3f8"
      _dark={{
        bg: "#3e3e3e",
      }}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        shadow="lg"
        rounded="lg"
        bg="#edf3f8"
        mb={8}
        w="full"
        h={{ base: "auto", md: "90%" }}
        direction="column"
        alignItems="center"
        justifyContent="center"
        as={motion.div}
        whileHover={{
          scale: 1.05,
        }}
        transition={{ duration: 0.5 }}
        bgSize='cover'
        animation={'background-gradient 5s'}
        _hover={{
          bgGradient: "linear(to-b, orange,white,green.100)",
          boxShadow: '2xl',
          cursor: 'pointer',
          // bgImage: bg
        }}
      >
        <Box
          bg="#edf3f8"
          _dark={{
            bg: "#3e3e3e",
          }}
          style={{
            backgroundImage:
              "url(http://mit-wpu.managementquotainfo.in/wp-content/uploads/sites/2/2019/12/MIT-WPU.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          height="100%"
          width="100%"
          borderRadius="lg"
          p={8}
          display="flex"
          alignItems="left"
        >
          <Image
            src= {props.img}
            alt="Profile Picture"
            borderRadius="full"
            boxSize="120px"
            shadow="lg"
            border="5px solid"
            mb={-20}
            borderColor="gray.800"
          />
        </Box>
        <Box
          gridColumn="span 8"
          p={8}
          width="full"
          height="full"
          borderRadius="lg"
          textAlign="left"
          mt={7}
        >
          <Text
            fontSize="2xl"
            fontWeight="bold"
            align={{ base: "left", md: "left"}}
            color="gray.800"
            _dark={{
              color: "white",
            }}
          >
            {props.name}
          </Text>
          <HStack
            spacing={3}
            color="gray.800"
            _dark={{
              color: "gray.200",
            }}
          >
            <Text
              fontSize="lg"
              //fontWeight="bold"
              align={{ base: "left", md: "left" }}
              color="gray.800"
            >
              {props.designation}
            </Text>
          </HStack>

              <Stack
                mt={4}
              >
                <Button
                  maxW={'sm'}
                  mb={2}
                  colorScheme={'messenger'}
                  leftIcon={<SiLinkedin />}
                  onClick={() => window.open(props.linkedin, "_blank")}
                >
                  <Center>
                    <Text>Linkedin</Text>
                  </Center>
                </Button>
              </Stack>

        </Box>
      </Flex>
    </Flex>
  );
}
