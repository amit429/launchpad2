import React from "react";
import {
    Box,
    Flex,
    Image,
    Text,
    HStack,
    Button,
    useColorModeValue,
} from "@chakra-ui/react";
import { chakra, Link } from "@chakra-ui/react";

export default function Company(props) {
  return (
    <>
      <Flex
        w="full"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          w="xs"
          bg="white"
          overflow="hidden"
          mx="auto"
        >
          <Image
            w="full"
            h={56}
            fit="fit"
            src= {props.img}
            alt="avatar"
          />

          <Box py={5} textAlign="center">
            <chakra.h4
              display="block"
              fontSize="2xl"
              color="gray.800"
              _dark={{
                color: "white",
              }}
              fontWeight="bold"
            >
              {props.name}
            </chakra.h4>
          </Box>
        </Box>
      </Flex>
      ;
    </>
  );
}
