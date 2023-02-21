import React from 'react'
import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex, Heading } from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';
import { motion, Variants } from 'framer-motion';

const imageAnimate = {
  offscreen: { x: -25, opacity: 0 },
  onscreen: { x: 0, transition: { duration: 1 }, opacity: 1 }
}

const textAnimate = {
  offscreen: { y: 25, opacity: 0 },
  onscreen: { y: 0, transition: { duration: 1 }, opacity: 1 }
}

const Feature = ({ title, text, icon }) => {
  return (
    <Stack
      m={{ base: 5, md: 8 }}
      boxShadow={'md'}
      p={5}
      _hover={{
        cursor: 'pointer',
        transform: 'translateY(-10px)',
      }}
      transition={'all 0.5s ease-in-out'}
    >
      <motion.div
        initial={'offscreen'}
        whileInView={'onscreen'}
        viewport={{once: true, amount: 0.5}}
        transition={{ staggerChildren: 0.1 }}
      >
      <motion.div
        variants={imageAnimate}
      >
        <Flex
          w={{ base: 12, md: 16 }}
          h={16}
          p={{ base: 2, md: 4 }}
          align={'center'}
          justify={'center'}
          color={'white'}
          rounded={'full'}
          bg={'gray.100'}
          mb={1}>
          {icon}
        </Flex>
      </motion.div>
      <motion.div
        variants={textAnimate}
      >
        <Text fontWeight={600}>{title}</Text>
        <Text color={'gray.600'}>{text}</Text>
      </motion.div>
    </motion.div>
    </Stack >
  );
};

export default function Goals() {

  const features = [
    {
      title: 'Lifetime Support',
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...",
      icon: <Icon as={FcAssistant} w={10} h={10} />,
    },

    {
      title: 'Unlimited Donations',
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...",
      icon: <Icon as={FcDonate} w={10} h={10} />,
    },

    {
      title: 'In Transit',
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...",
      icon: <Icon as={FcInTransit} w={10} h={10} />,
    },

    {
      title: 'Lifetime Support',
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...",
      icon: <Icon as={FcAssistant} w={10} h={10} />,
    },

    {
      title: 'Unlimited Donations',
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...",
      icon: <Icon as={FcDonate} w={10} h={10} />,
    },

    {
      title: 'In Transit',
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...",
      icon: <Icon as={FcInTransit} w={10} h={10} />,
    }
  ]
  return (
    <>
      <Box p={{ base: 0, md: 6 }} mb={8}>
        <Heading
          as="h2"
          size={{ base: 'xl', md: '2xl' }}
          fontWeight="bold"
          textAlign={{ base: 'center', md: 'center' }}
          m={{ base: 4, md: 6 }}
        >
          Our Goals
        </Heading>
        <SimpleGrid columns={[1, 2, 3]} spacing='30px'>
          {features.map((feature) => (
            <Feature
              icon={feature.icon}
              title={feature.title}
              text={feature.text}
            />
          ))}
        </SimpleGrid>
      </Box>



    </>
  )
}
