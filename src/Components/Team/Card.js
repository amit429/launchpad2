import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
  keyframes,
  ScaleFade,
} from '@chakra-ui/react';
import { SiLinkedin, SiTwitter } from 'react-icons/si';
import { motion } from 'framer-motion'
import bg from '../../Assests/team.gif'
import { useInViewport } from 'react-in-viewport';
import React, { useRef } from 'react';

export default function Pfcard(props) {

  const ref = useRef(null);
  const { enterCount } = useInViewport(
    ref,
    { rootMargin: '-100px' },
    { disconnectOnLeave: false },
    {}
  );

  return (
    <Center py={6}>
      <Box w="120%"
        ml="20%">

        <ScaleFade
          initialScale={0.6}
          in={enterCount > 0}
        >
          <Box
            as={motion.div}
            border={'1px'}
            maxW={'320px'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'xl'}
            rounded={'lg'}
            p={6}
            textAlign={'center'}
            // bgImage={bg}
            // filter='auto'
            backdropFilter='auto'
            backdropBlur='6px'
            whileHover={{
              scale: 1.05,
            }}
            transition={{ duration: 0.5 }}
            bgSize='cover'
            animation={'background-gradient 5s'}
            _hover={{
              bgGradient: "linear(to-b, orange,white,white,green)",
              boxShadow: '2xl',
              // bgImage: bg
            }}
            ref={ref}
          >
            <Avatar
              size={'xl'}
              src={
                props.img
              }
              alt={props.name}
              mb={4}
              pos={'relative'}
            // _after={{
            //     content: '""',
            //     w: 4,
            //     h: 4,
            //     bg: 'green.300',
            //     border: '2px solid white',
            //     rounded: 'full',
            //     pos: 'absolute',
            //     bottom: 0,
            //     right: 3,
            // }}
            />
            <Heading fontSize={'2xl'} fontFamily={'body'}>
              {props.name}
            </Heading>
            <Text fontWeight={600} color={'gray.500'} mb={4}>
              {props.designation}
            </Text>
            {/* <Text
                    textAlign={'center'}
                    color={useColorModeValue('gray.700', 'gray.400')}
                    px={3}>
                    Actress, musician, songwriter and artist. PM for work inquires or{' '}
                    <Link href={'#'} color={'blue.400'}>
                        #tag
                    </Link>{' '}
                    me in your posts
                </Text> */}

            {/* <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              #art
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              #photography
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              #music
            </Badge>
          </Stack> */}

            {/* <Stack mt={8} direction={'row'} spacing={4}> */}
            {/* <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              _focus={{
                bg: 'gray.200',
              }}>
              Message
            </Button> */}
            {/* <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'blue.500',
              }}
              _focus={{
                bg: 'blue.500',
              }}>
              Follow
            </Button> */}
            <Center>
              <Stack>
                <Button
                  // w={'full'}
                  maxW={'sm'}
                  mb={2}
                  colorScheme={'messenger'}
                  leftIcon={<SiLinkedin />}
                  onClick={() => window.open(props.linkedin, "_blank")}
                >
                  <Center>
                    <Text>Linkedin</Text>
                  </Center>
                </Button>

                <Button colorScheme='twitter' leftIcon={<SiTwitter />}
                  maxW={'sm'}
                  mb={2}
                  onClick={() => window.open(props.twitter, "_blank")} >
                  <Center>
                    <Text>Twitter</Text>
                  </Center>
                </Button>
              </Stack>
            </Center>
            {/* </Stack> */}
          </Box >
        </ScaleFade>

      </Box>
    </Center >
  );
}