import { Box, Heading, Text, Input, Button } from '@chakra-ui/react'
import React from 'react'

function BlogCommentForm() {
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
            >Comment</Text>
            <Input placeholder='Comment Here!' size='lg' />
            <Button mt={4} colorScheme='blue'>Submit</Button>
        </Box>
    </>
  )
}

export default BlogCommentForm