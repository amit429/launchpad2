import React from "react";
import { useState } from "react";
import "./Quote.css";
import "@fontsource/roboto";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";
import { useParallax } from "react-scroll-parallax";

const Testimonial = ({ children }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children, bg }) => {
  return (
    
    <Stack
      bg={bg}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialText = ({ children }) => {
  return (
    <Text
      textAlign={"center"}
      color={"blackAlpha.900"}
      fontSize={{ base: "sm", md: "lg" , lg: "lg" }}
      fontWeight={500}
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({ src, name, title }) => {
  return (
    <Flex align={"center"} mt={8} direction={"column"}>
      <Avatar src={src} alt={name} mb={2} size={"xl"} />
      <Stack spacing={-1} align={"center"}>
        <Text fontWeight={600}>{name}</Text>
        <Text
          fontSize={"sm"}
          color={useColorModeValue("white.300", "white.300")}
          opacity={0.7}
        >
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function Quote() {
  const quotes = [
    {
      quote:
        "Having a passion for solving a big problem and leaving a huge impact. Once you have that, everything else falls into place.",
      name: "Ritesh Agarwal",
      title: "Founder of Oyo",
      bg: "orange.300",
      src: "https://firebasestorage.googleapis.com/v0/b/launchpad-startups.appspot.com/o/ritesh-agarwal.jpg?alt=media&token=20a9a43f-54d7-4801-bbe9-70bb06defc54",
    },

    {
      quote:
        "All of us have an entrepreneur in us. Entrepreneurs are not driven by fear; they are driven by the idea to create impact.",
      name: "Bhavish Aggarwal",
      title: "Founder of Ola",
      bg: "white",
      src: "https://firebasestorage.googleapis.com/v0/b/launchpad-startups.appspot.com/o/bhavishaggarwal.jpg?alt=media&token=3cb3ecf1-fcbf-4cdf-b3e1-ae0e1a743d64",
    },

    {
      quote:
        "If you fully accept the worst that can ever happen in your journey, fear won't ever be an obstacle in starting-up.",
      name: "Kunal Shah",
      title: "Founder of CRED",
      bg: "green.400",
      src: "https://firebasestorage.googleapis.com/v0/b/launchpad-startups.appspot.com/o/Kunal_Shah.jpg?alt=media&token=24261315-76c7-455e-a4a6-6f81b611dc06",
    },
  ];

  return (
    <>
     
      <Box
        bg={"blue.900"}
        color={"whiteAlpha.900"}
        className="quote"
        textAlign="center"
        py={{ base: 5, md: 12, lg: 12}}
        px={12}
        mb={{ base: 0, md: 0 , lg: 12}}
      >
        <Box>
          <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
            <Stack spacing={0} align={"center"}>
              <Heading fontSize={{ base: "lg" , lg: "4xl"}}>Some Famous Quotes</Heading>
              <Text> Quotes that inspired people to go big</Text>
            </Stack>
            <Stack
              direction={{ base: "column", md: "row" }}
              spacing={{ base: 10, md: 4, lg: 12 }}
              w={{ base: "full", md: "full" }}
            >
              {quotes.map((quote) => (
                <Testimonial>
                  <TestimonialContent bg={quote.bg}>
                    <TestimonialText>"{quote.quote}"</TestimonialText>
                  </TestimonialContent>
                  <TestimonialAvatar
                    src={quote.src}
                    name={quote.name}
                    title={quote.title}
                  />
                </Testimonial>
              ))}
            </Stack>
          </Container>
        </Box>
      </Box>

    </>
  );
}
