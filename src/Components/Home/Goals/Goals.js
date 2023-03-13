import React from 'react'
import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex, Heading } from '@chakra-ui/react';
import { FcProcess, FcWorkflow, FcPositiveDynamic } from 'react-icons/fc';
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
      text: "Bharat First Approach for Startups is about creating solutions that are both innovative and relevant to the unique needs of the Indian market. ",
      icon: <Icon as={FcProcess} w={10} h={10} />,
    },

    {
      title: 'Unlimited Donations',
      text: "Transforming Businesses through the Power of People, Technology and Innovation",
      icon: <Icon as={FcWorkflow} w={10} h={10} />,
    },

    {
      title: 'In Transit',
      text: "Enabling startups to improve their business strategy, organization and to be successful and raise capital for expansion & growth",
      icon: <Icon as={FcPositiveDynamic} w={10} h={10} />,
    },

    {
      title: 'Lifetime Support',
      text: "Promoting entrepreneurship and innovation that generates employment opportunities and drives growth in rural and underdeveloped areas of India",
      icon: <Icon as={FcProcess} w={10} h={10} />,
    },

    {
      title: 'Unlimited Donations',
      text: "Focus is on leveraging technology to create innovative solutions that are not only accessible and affordable but also sustainable. ",
      icon: <Icon as={FcWorkflow} w={10} h={10} />,
    },

    {
      title: 'In Transit',
      text: "Launchpad Startups aims to provide resources and support to help entrepreneurs succeed.",
      icon: <Icon as={FcPositiveDynamic} w={10} h={10} />,
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
              text={feature.text}
            />
          ))}
        </SimpleGrid>
      </Box>



    </>
  )
}
