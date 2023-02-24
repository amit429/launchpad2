import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue
} from '@chakra-ui/react';
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from 'react-icons/io5';
import { ReactElement } from 'react';
import {motion, variants} from 'framer-motion';

const textAnimate = {
  offscreen: { y: 75, opacity: 0 },
  onscreen: { y: 0, transition: { duration: 1 }, opacity: 1 },
}

const imgAnimate = {
  offscreen: { x: 100, opacity: 0 },
  onscreen: { x: 0, transition: { duration: 1 }, opacity: 1 },
}


// const Feature = ({ text, icon, iconBg }) => {
//   return (
//     <Stack direction={'row'} align={'center'}>
//       <Flex
//         w={8}
//         h={8}
//         align={'center'}
//         justify={'center'}
//         rounded={'full'}
//         bg={iconBg}>
//         {icon}
//       </Flex>
//       <Text fontWeight={600}>{text}</Text>
//     </Stack>
//   );
// };

export default function Journey() {
  return (
    <Container maxW={'7xl'} py={12} mt={10}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <motion.div
        initial={'offscreen'}
        whileInView={'onscreen'}
        viewport={{ once: true, amount: 0.1}}
        variants={textAnimate}
        >
        <Stack spacing={4}>
          <Text
            textTransform={'uppercase'}
            color={'white'}
            fontWeight={600}
            fontSize={'sm'}
            bg={useColorModeValue('blue.900')}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}>
            About Us
          </Text>
          <Heading color={"green.800"}>A Platform designed for all</Heading>
          <Text color={'gray.500'} fontSize={'md'}>
          Launchpad Startups is a platform designed to support early-stage entrepreneurs and their ventures. As an entrepreneur, starting a business can be challenging, and Launchpad Startups aims to provide resources and support to help entrepreneurs succeed. Launchpad Startups provides seed funding, as well as access to investors who are interested in supporting early-stage startups. Entrepreneurs can also participate in pitch events, where they can present their businesses to potential investors.
          </Text>
          <Text color={'gray.500'} fontSize={'md'}>
          The platform offers a range of services, including mentorship, funding opportunities, and access to a network of experts and industry professionals. Entrepreneurs can apply to join Launchpad Startups, and if accepted, they will have access to all these resources.
          </Text>
          <Text color={'gray.500'} fontSize={'md'}>
          One of the key benefits of Launchpad Startups is the mentorship program. Entrepreneurs are paired with experienced mentors who can provide guidance and support as they navigate the early stages of their ventures. Mentors can help entrepreneurs refine their business ideas, develop their business plans, and provide feedback on their progress.
          </Text>
          <Text color={'gray.500'} fontSize={'md'}>
          Overall, Launchpad Startups is a valuable platform for early-stage entrepreneurs who are looking for support and resources to help them succeed. With mentorship, funding opportunities, and access to a network of experts, entrepreneurs can accelerate the growth of their ventures and achieve their goals.
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.100', 'gray.700')}
              />
            }>
          </Stack>
        </Stack>
        </motion.div>
        <motion.div
        initial={'offscreen'}
        whileInView={'onscreen'}
        viewport={{ once: true, amount: 0.1}}
        variants={imgAnimate}
        >
        <Flex
        h={'100%'}
        >
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={
              'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            }
            objectFit={'cover'}
          />
        </Flex>
        </motion.div>
      </SimpleGrid>
    </Container>
  );
}