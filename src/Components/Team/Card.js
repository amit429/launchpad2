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
} from '@chakra-ui/react';
import { SiLinkedin } from 'react-icons/si';
import bg from '../../Assests/bg.png'

export default function Pfcard(props) {
  return (
    <Center py={6}>
      <Box
        maxW={'320px'}
        w={'full'}
        // bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'lg'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}
        bgImage={bg}
        // filter='auto'
        backdropFilter='auto'
        backdropBlur='6px'
        _hover={{transform:'scale(1.1)'}}
        transition='all 0.5s ease-in-out'
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
        </Center>
        {/* </Stack> */}
      </Box>
    </Center >
  );
}