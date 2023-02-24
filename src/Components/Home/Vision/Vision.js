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
                    md: "md",
                  }}
                >
                  Built for Bharat is a term that refers to startups that are focused on creating solutions and products for the masses in India, particularly those who live in smaller towns and rural areas. Bharat, in this context, represents the non-urban areas of India. The startups who recognize that there is a huge untapped market in these areas and are creating innovative products and services that cater to the unique needs of people living in these areas. 
                  Startups who are working on solving a wide range of challenges faced by people living in rural areas, including access to education, healthcare, financial services, and e-commerce. For example, they are creating mobile apps that allow farmers to connect with buyers directly, digital platforms that provide access to affordable healthcare services, and innovative financial products that cater to the needs of people living in remote areas.
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
                w="full"
                h="full"
                py={48}
                bg="gray.200"
                bgImage={"https://i.imgur.com/IgXb9b8.jpg"}
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
                    md: "md",
                  }}
                >
                  Startups for a better tomorrow for Bharat is a concept that refers to startups that are dedicated to promoting social, economic, and environmental sustainability in India. These startups are committed to creating solutions that are inclusive, accessible, and affordable for all people in the country, including those who are marginalized or underprivileged.
                  The focus on inclusivity is driven by a belief that everyone should have access to the benefits of technological innovation, and that startups have a critical role to play in driving positive change in the country. Inclusive startups are working on solving a wide range of challenges faced by the society, including but not limited to education, healthcare, energy, water, sanitation, agriculture, and financial services.

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
                bgImage={"https://i.imgur.com/I6trlqd.png"}
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
