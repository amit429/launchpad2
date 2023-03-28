import { Heading } from "@chakra-ui/react";
import React from "react";
import { Box, Button, chakra, Flex, SimpleGrid } from "@chakra-ui/react";
import { motion, Variants } from "framer-motion";

const L2RAnimate = {
  offscreen: { x: -100, opacity: 0 },
  onscreen: { x: 0, transition: { duration: 1 }, opacity: 1 },
}

const R2LAnimate = {
  offscreen: { x: 100, opacity: 0 },
  onscreen: { x: 0, transition: { duration: 1 }, opacity: 1 },
}

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
            <motion.div
              initial={'offscreen'}
              whileInView={'onscreen'}
              viewport={{ once: true, amount: 0.5 }}
              variants={L2RAnimate}
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
                  Built For Bharat
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
                  The phrase "built for Bharat" refers to startups that are committed to developing services and goods for the general public in India, especially those who reside in smaller towns and rural areas. For instance, they are developing digital platforms that give people access to affordable healthcare services and mobile apps that connect farmers with buyers directly. 
We seek grassroots innovations and startups.

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
                  href="/about"
                >
                  Know more
                </Button>
              </Box>
            </motion.div>

            <motion.div
              initial={'offscreen'}
              whileInView={'onscreen'}
              viewport={{ once: true, amount: 0.5 }}
              variants={R2LAnimate}
            >
              <Box
                // w="full"
                h={"50"}
                py={48}
                bg="gray.200"
                bgImage={"https://firebasestorage.googleapis.com/v0/b/launchpad-startups.appspot.com/o/built_for_bharat.jpg?alt=media&token=a4f078bf-43f6-4b21-a2a4-dfd53d4793e2"}
                bgSize={{ base: "cover", md: "cover" }}
                bgPosition={{ base: "center", md: "center" }}
              >
              </Box>
            </motion.div>
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
              <motion.div
                initial={'offscreen'}
                whileInView={'onscreen'}
                viewport={{ once: true, amount: 0.5 }}
                variants={R2LAnimate}
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
                  Inclusive Approach – Need of the Hour
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
                  Startups for a Better Tomorrow for Bharat is a concept that describes startups that are committed to advancing social, economic, and environmental sustainability in India. These startups are dedicated to developing solutions that are inclusive, reachable, and affordable for everyone in the nation, including the poor and the disadvantaged. The emphasis on inclusivity stems from the conviction that everyone should be able to take advantage of technological advancements including but not limited to education, healthcare, energy, water, sanitation, agriculture, and financial services.

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
                  href="/about"
                >
                  Know more
                </Button>
              </motion.div>
            </Box>
            <motion.div
            initial={'offscreen'}
            whileInView={'onscreen'}
            viewport={{ once: true, amount: 0.5 }}
            variants={L2RAnimate}
            >
              <Box
                w="full"
                h="full"
                py={48}
                bg="gray.200"
                bgImage={"https://firebasestorage.googleapis.com/v0/b/launchpad-startups.appspot.com/o/our_vision.jpg?alt=media&token=18be497b-7fcc-476f-8ff5-f8fbe4da64cd"}
                bgSize="cover"
                bgPosition="center"
              ></Box>
            </motion.div>

          </SimpleGrid>
        </Box>
      </Flex>
      ;
    </>
  );
}
