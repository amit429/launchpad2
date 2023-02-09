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
                A better way to send money
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
                Handle your subscriptions and transactions efficiently with the
                clear overview in Dashboard. Features like the smart search
                option allow you to quickly find any data you’re looking for.
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
              bgSize="cover"
              bgPosition="center"
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
                Decide how you integrate Payments
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
                Love to code? Next to our ready-made and free plugins you can
                use our expansive yet simple API; decide how you integrate
                Payments and build advanced and reliable products yourself from
                scratch.
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
