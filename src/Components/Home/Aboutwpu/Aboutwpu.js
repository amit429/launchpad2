import React from "react";
import { Flex, Box, chakra, Link } from "@chakra-ui/react";

export default function Aboutwpu() {
  return (
    <>
      <Flex
        p={{ base: 30, lg: 50 }}
        w="full"
        bg={"gray.90"}
        alignItems="center"
        justifyContent="center"
      >
        <Box
          bg="white"
          p={{ base: 0, lg: 8 }}
          _dark={{
            bg: "gray.800",
          }}
          mx={{
            lg: 8,
          }}
          display={{
            lg: "flex",
          }}
          w={{ base: "full", lg: "full" }}
          h={{  lg: "full" }}
          shadow={{
            lg: "lg",
          }}
          rounded={{
            lg: "lg",
          }}
        >
          <Box
            w={{
              lg: "50%",
            }}
          >
            <Box
              h={{
                base: 64,
                lg: "full",
              }}
              rounded={{
                lg: "lg",
              }}
              bgSize="cover"
              style={{
                backgroundImage:
                  "url('https://i.imgur.com/XUGd9Nz.png')",
                backgroundPosition: "center",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            ></Box>
          </Box>

          <Box
            py={{ base: 0, lg: 12 }}
            px={6}
            maxW={{
              base: "xl",
              lg: "5xl",
            }}
            w={{ base: "full", lg: "40%" }}
            mx={{ base: "sm" ,  lg: "auto" }}
          >
            <chakra.h2
              fontSize={{
                base: "xl",
                md: "3xl",
              }}
              color="gray.800"
              _dark={{
                color: "white",
              }}
              fontWeight="bold"
            >
              Build Your New{" "}
              <chakra.span
                color="brand.600"
                _dark={{
                  color: "brand.400",
                }}
              >
                Idea
              </chakra.span>
            </chakra.h2>
            <chakra.p
              mt={4}
              color="gray.600"
              fontSize={{ base: "sm", md: "md" , lg: "md"}}
              _dark={{
                color: "gray.400",
              }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
              modi reprehenderit vitae exercitationem aliquid dolores ullam
              temporibus enim expedita aperiam mollitia iure consectetur dicta
              tenetur, porro consequuntur saepe accusantium consequatur.
            </chakra.p>
          </Box>
        </Box>
      </Flex>
      ;
    </>
  );
}
