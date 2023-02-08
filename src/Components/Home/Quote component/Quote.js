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
        "Don't take rest after your first victory because if you fail in second, more lips are waiting to say that your first victory was just luck.",
      name: "A.P.J. Abdul Kalam",
      title: "Former President of India",
      bg: "orange.300",
      src: "https://i.imgur.com/LKDPlDA.jpg",
    },

    {
      quote:
        "Vision without action is merely a dream; action without vision is merely passing time; but vision and action together can change the world. ",
      name: "Sudha Murthy",
      title: "Chairperson of Infosys Foundation",
      bg: "white",
      src: "https://i.imgur.com/8WLf4v0.jpg",
    },

    {
      quote:
        "Ups and downs in life are very important to keep us going because a straight line, even in an ECG. means we are not alive.",
      name: "Ratan Tata",
      title: "Chairman of Tata Group",
      bg: "green.700",
      src: "https://i.imgur.com/GyKdhsv.jpg",
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
