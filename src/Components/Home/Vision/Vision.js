import { Heading } from "@chakra-ui/react";
import React from "react";
import { Box, Button, chakra, Flex, SimpleGrid } from "@chakra-ui/react";

export default function Vision() {
  return (
    <>
        <Heading
            color="black"
            textAlign={{ base: "center", md: "center" }}
            as="h2"
            size={{ base: 'xl', md: '2xl' }}
            fontWeight="bold"
            m={{ base: 4, md: 4 }}
        >
            Our Vision
        </Heading>
      <Flex
        p={{ base: 2, md: 20 }}
        w="full"
        justifyContent="center"
        alignItems="center"
        boxShadow={{ base: "none", md: "sm" }}
      >
        <Box
          shadow="xl"
          bg="white"
          px={8}
          py={8}
          mx="auto"
        >
          <SimpleGrid
            alignItems="start"
            columns={{
              base: 1,
              md: 2,
            }}
            mb={24}
            spacingY={{
              base: 10,
              md: 32,
            }}
            spacingX={{
              base: 10,
              md: 24,
            }}
          >
            <Box>
            <chakra.h2
                mb={4}
                fontSize={{
                  base: "2xl",
                  md: "4xl",
                }}
                fontWeight="extrabold"
                letterSpacing="tight"
                textAlign={{
                  base: "center",
                  md: "left",
                }}
                color="blue.900"
                lineHeight={{
                  md: "shorter",
                }}
              >
                Creating a Network of Startups
              </chakra.h2>
              <chakra.p
                mb={5}
                textAlign={{
                  base: "center",
                  sm: "left",
                }}
                color="gray.600"
                _dark={{
                  color: "gray.400",
                }}
                fontSize={{
                  md: "lg",
                }}
              >
                Our vision is to create a network of startups that collaborate with each other to drive innovation and create value. We want to bring together the best and brightest minds to create the products and services that will shape the future of the industry. We believe that through this network, we can create a powerful foundation for success.
              </chakra.p>
              <Button
                w={{
                  base: "full",
                  sm: "auto",
                }}
                size="lg"
                bg="green.800"
                _dark={{
                  bg: "green.900",
                }}
                _hover={{
                  bg: "gray.700",
                  _dark: {
                    bg: "gray.600",
                  },
                }}
                color="gray.100"
                as="a"
                cursor="pointer"
                href = "/about"
              >
                Know more 
              </Button>
            </Box>
            <Box
              w="full"
              h="full"
              py={48}
              bg="gray.200"
              bgImage={"https://i.imgur.com/IgXb9b8.jpg"}
              bgSize={{ base: "cover", md: "cover" }}
              bgPosition={{ base: "center", md: "center" }}
            >
            </Box>
          </SimpleGrid>
          <SimpleGrid
            alignItems="center"
            columns={{
              base: 1,
              md: 2,
            }}
            flexDirection="column-reverse"
            mb={24}
            spacingY={{
              base: 10,
              md: 32,
            }}
            spacingX={{
              base: 10,
              md: 24,
            }}
          >
            <Box
              order={{
                base: "initial",
                md: 2,
              }}
            >
              <chakra.h2
                mb={4}
                fontSize={{
                  base: "2xl",
                  md: "4xl",
                }}
                fontWeight="extrabold"
                letterSpacing="tight"
                textAlign={{
                  base: "center",
                  md: "left",
                }}
                color="blue.900"
                lineHeight={{
                  md: "shorter",
                }}
              >
                Turning Ideas Into Reality
              </chakra.h2>
              <chakra.p
                mb={5}
                textAlign={{
                  base: "center",
                  sm: "left",
                }}
                color="gray.600"
                _dark={{
                  color: "gray.400",
                }}
                fontSize={{
                  md: "lg",
                }}
              >
                Our vision is to turn ideas into reality. We want to provide entrepreneurs with the tools, resources, and guidance they need to bring their ideas to life. We will provide mentorship, support, and resources to help entrepreneurs create successful businesses that have the potential to make a lasting impact. 
              </chakra.p>
              <Button
                w={{
                  base: "full",
                  sm: "auto",
                }}
                size="lg"
                bg="green.800"
                _hover={{
                  bg: "green.900",
                  _dark: {
                    bg: "gray.600",
                  },
                }}
                color="gray.100"
                as="a"
                cursor="pointer"
                href = "/about"
              >
                Know more 
              </Button>
            </Box>
            <Box
              w="full"
              h="full"
              py={48}
              bg="gray.200"
              bgImage={"https://i.imgur.com/I6trlqd.png"}
              bgSize="cover"
              bgPosition="center"
            ></Box>
          </SimpleGrid>
        </Box>
      </Flex>
      ;
    </>
  );
}
