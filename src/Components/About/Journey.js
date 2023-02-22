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
            Our Story
          </Text>
          <Heading color={"green.800"}>A digital Product design agency</Heading>
          <Text color={'gray.500'} fontSize={'md'}>
            One of the most important journeys a company can take is the path to success. This journey starts with planning and strategy, which involves setting goals and objectives and determining how to reach them. Furthermore, companies must identify the resources necessary to implement the plan, such as technology and personnel.
          </Text>
          <Text color={'gray.500'} fontSize={'md'}>
            Once a company has a solid plan in place, the focus then shifts to implementation. This is where the goals and objectives turn into reality.
          </Text>
          <Text color={'gray.500'} fontSize={'md'}>
            Companies must ensure that the resources are being used efficiently and effectively to reach the desired results.
            Marketing is also a key component of this journey.
            Companies need to find a way to reach their target audiences, create a brand identity, and promote their products and services. In addition, companies must stay ahead of their competitors and monitor trends to remain competitive.
          </Text>
          <Text color={'gray.500'} fontSize={'md'}>
            Finally, a company's journey must include an evaluation process. This involves assessing the success of the strategies used, the goals achieved, and the performance of the team. Companies need to make sure that they are meeting the expectations of their customers.
            By taking the time to plan, implement, market. and evaluate, companies can ensure that they are on the right path to success.
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