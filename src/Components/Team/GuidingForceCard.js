import React from "react";
import { Box, Flex, Image, Text, HStack , Center , Stack , Button} from "@chakra-ui/react";
import { FaSuitcase, FaMapPin, FaEnvelope} from "react-icons/fa";
import { SiLinkedin} from 'react-icons/si';
import { motion } from 'framer-motion'


export default function Card2(props) {

    const link1 = 'https://www.linkedin.com/in/rahulvkarad-educationist/'
    const link2 = 'https://www.linkedin.com/in/dr-aditi-karad/'
  return (
    <>
      <Flex
        //bg="#edf3f8"
        p={50}
        w="full"
        alignItems="center"
        justifyContent="center"
        flexDirection={{ base: "column", md: "row" }}
        
      >
        <Flex
          shadow="lg"
          rounded="lg"
          bg="#edf3f8"
          _dark={{
            bg: "gray.800",
          }}
          mb={8}
          mr={{ base: 0, md: 10 }}
          direction="column"
          alignItems="center"
          justifyContent="center"
          as={motion.div}
          whileHover={{
            scale: 1.05,
          }}
          transition={{ duration: 0.5 }}
          bgSize='cover'
          animation={'background-gradient 5s'}
          _hover={{
            bgGradient: "linear(to-b, orange,white,green.100)",
            boxShadow: '2xl',
            cursor: 'pointer',
            // bgImage: bg
          }}
        >
          <Box
            bg="#edf3f8"
            _dark={{
              bg: "#3e3e3e",
            }}
            style={{
              backgroundImage:
                "url(http://mit-wpu.managementquotainfo.in/wp-content/uploads/sites/2/2019/12/MIT-WPU.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            height="100%"
            width="100%"
            borderRadius="lg"
            p={8}
            display="flex"
            alignItems="left"
          >
            <Image
              src="https://media.licdn.com/dms/image/C4D03AQEN3af5ELnwiQ/profile-displayphoto-shrink_400_400/0/1657345166593?e=1682553600&v=beta&t=UOzdFKdC1MYkYFATIs6RXem4nDokZke_SWUk_s320dA"
              alt="Profile Picture"
              borderRadius="full"
              boxSize="150px"
              shadow="lg"
              border="5px solid"
              mb={-20}
              borderColor="gray.800"
              _dark={{
                borderColor: "gray.200",
              }}
            />
          </Box>
          <Box
            gridColumn="span 8"
            p={8}
            width="full"
            height="full"
            borderRadius="lg"
            textAlign="left"
            mt={7}
          >
            <Text
              textAlign={"center"}
              fontSize={{base: "2xl" , md: "4xl"}}
              fontWeight="bold"
              color="gray.800"
              _dark={{
                color: "white",
              }}
            >
              Shri Rahul Karad
            </Text>

            <Text fontSize={{base: 12 , md: "15px"}} fontWeight={{base: 200 , md: 400}} color={'gray.500'} mb={4} textAlign="center">
            Managing Trustee & Executive President,<br/> MAEER's MIT Group of Institutions and <br/>Executive President, MIT World Peace University
            </Text>

            <Center>
              <Stack>
                <Button
                  maxW={'sm'}
                  mb={2}
                  colorScheme={'messenger'}
                  leftIcon={<SiLinkedin />}
                  onClick={() => window.open(link1, "_blank")}
                >
                  <Center>
                    <Text>Linkedin</Text>
                  </Center>
                </Button>
              </Stack>
            </Center>
          </Box>
        </Flex>

        <Flex
          shadow="lg"
          rounded="lg"
          bg="#edf3f8"
          _dark={{
            bg: "gray.800",
          }}
          mb={8}
          direction="column"
          alignItems="center"
          justifyContent="center"
          as={motion.div}
          whileHover={{
            scale: 1.05,
          }}
          transition={{ duration: 0.5 }}
          bgSize='cover'
          animation={'background-gradient 5s'}
          _hover={{
            bgGradient: "linear(to-b, orange,white,green.100)",
            boxShadow: '2xl',
            cursor: 'pointer',
            // bgImage: bg
          }}
        >
          <Box
            bg="#edf3f8"
            _dark={{
              bg: "#3e3e3e",
            }}
            style={{
              backgroundImage:
                "url(http://mit-wpu.managementquotainfo.in/wp-content/uploads/sites/2/2019/12/MIT-WPU.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            height="100%"
            width="100%"
            borderRadius="lg"
            p={8}
            display="flex"
            alignItems="left"
          >
            <Image
              src="https://media.licdn.com/dms/image/C5103AQEco9pTxAVT_w/profile-displayphoto-shrink_400_400/0/1573808620153?e=1682553600&v=beta&t=VM3fmnZ3e6uUY0uX_C35IkEP0TdHIH_OkTyvKaIJw1E"
              alt="Profile Picture"
              borderRadius="full"
              boxSize="150px"
              shadow="lg"
              border="5px solid"
              mb={-20}
              borderColor="gray.800"
              _dark={{
                borderColor: "gray.200",
              }}
            />
          </Box>
          <Box
            gridColumn="span 8"
            p={8}
            width="full"
            height="full"
            borderRadius="lg"
            textAlign="left"
            mt={7}
          >
            <Text
              textAlign={"center"}
              fontWeight="bold"
              color="gray.800"
              fontSize={{base: "2xl" , md: "4xl"}}
              _dark={{
                color: "white",
              }}
            >
              Dr Aditi Karad
            </Text>

            <Text fontSize={{base: 12 , md: "15px"}} fontWeight={400} color={'gray.500'} mb={4} textAlign="center">
            Executive Director - VishwaRaj Hospital,<br/>Member Trustee and Joint Secretary General <br/>MAEER's MIT Group of Institutions, Pune
            </Text>

            <Center>
              <Stack>
                <Button
                  maxW={'sm'}
                  mb={2}
                  colorScheme={'messenger'}
                  leftIcon={<SiLinkedin />}
                  onClick={() => window.open(link2, "_blank")}
                >
                  <Center>
                    <Text>Linkedin</Text>
                  </Center>
                </Button>
              </Stack>
            </Center>
          </Box>
        </Flex>

      </Flex>
    </>
  );
}
