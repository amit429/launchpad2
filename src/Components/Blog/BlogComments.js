import { Box, Heading, Text, Input, Button, Stack, Avatar, Divider } from '@chakra-ui/react'
import React from 'react'
import { GiFountainPen } from 'react-icons/gi'

export default function BlogComments() {
  return (
    <>
    <Box
            border={{ base: "none", md: "1px solid black" }}
            boxShadow={{ base: "none", md: "sm" }}
            p={{ base: 2, md: 10 }}
            w="80%"
            h={{ base: "auto", md: "auto" }}
            justifyContent="center"
            alignItems="center"
            mx="auto"
            my={{ base: 4, md: 20 }}
        >
            <Text
            fontWeight="bold"
            fontSize={{ base: "md", md: "xl" }}
            pb={{ base: 2, md: 4 }}
            >Comments</Text>
            <Stack direction={'row'} pb={4} gap={{base:1,md:1, lg:3}}>
                <Avatar size={'sm'}  />
                <Text
                fontSize={{base:'sm', md:'lg'}}
                >Author Name</Text>
                <GiFountainPen size={'23px'} />
                <Text
                fontSize={{base:'sm', md:'lg'}}
                pl={{base:'1', md:'5'}}
                >01/01/2023</Text>
            </Stack>
            <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
            <Divider orientation="horizontal" my={5} border={'1px solid'}/>
            <Stack direction={'row'} pb={4} gap={{base:1,md:1, lg:3}}>
                <Avatar size={'sm'}  />
                <Text
                fontSize={{base:'sm', md:'lg'}}
                >Author Name</Text>
                <GiFountainPen size={'23px'} />
                <Text
                fontSize={{base:'sm', md:'lg'}}
                pl={{base:'1', md:'5'}}
                >01/01/2023</Text>
            </Stack>
            <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
            <Divider orientation="horizontal" my={5} border={'1px solid'}/>
        </Box>
    </>
    )
}