import React from 'react'
import { Box, Text, Avatar, Flex, Image, Link, Button } from '@chakra-ui/react'

export default function BlogCard() {
    return (
        <Flex
            bg="#edf3f8"
            _dark={{
                bg: "#3e3e3e",
            }}
            p={{ base: 5, md: 10 }}
            w={{ base: "100%", md: "100%" }}
            alignItems="center"
            justifyContent="center"
        >
            <Box
                mx="auto"
                rounded="lg"
                shadow="md"
                bg="white"
                _dark={{
                    bg: "gray.800",
                }}
                maxW="2xl"
            >
                <Image
                    transform="scale(1.0)"
                    roundedTop="lg"
                    w="full"
                    h={64}
                    fit="cover"
                    src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    alt="Article"
                    transition="0.3s ease-in-out"
                    _hover={{
                        transform: 'scale(1.01)',
                    }}
                />

                <Box p={6}>
                    <Box>
                        <Link
                            display="block"
                            color="gray.800"
                            _dark={{
                                color: "white",
                            }}
                            fontWeight="bold"
                            fontSize="2xl"
                            mt={2}
                            _hover={{
                                color: "gray.600",
                                textDecor: "underline",
                            }}
                        >
                            Blog Post Title
                        </Link>
                        <Text
                            mt={2}
                            fontSize="sm"
                            color="gray.600"
                            _dark={{
                                color: "gray.400",
                            }}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie
                            parturient et sem ipsum volutpat vel. Natoque sem et aliquam mauris
                            egestas quam volutpat viverra. In pretium nec senectus erat. Et
                            malesuada lobortis.
                        </Text>
                    </Box>

                    <Box mt={4}>
                        <Flex alignItems="center">
                            <Flex alignItems="center">
                                <Avatar />
                                <Link
                                    mx={2}
                                    fontWeight="bold"
                                    color="gray.700"
                                    _dark={{
                                        color: "gray.200",
                                    }}
                                >
                                    John Doe
                                </Link>
                            </Flex>
                            <span
                                mx={1}
                                fontSize="sm"
                                color="gray.600"
                                _dark={{
                                    color: "gray.300",
                                }}
                            >
                                21 SEP 2015
                            </span>
                            <Button ml={{base: 5, md:250}} colorScheme='blue'>View More</Button>
                        </Flex>
                    </Box>
                </Box>
            </Box>
        </Flex>
    )
}


