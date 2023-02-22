import { Box, Button, Center, Heading, HStack, IconButton, Stack, Text, VStack } from "@chakra-ui/react";
import CurvedImage from "../Image/CurvedImage";
import { gif_link } from "../../globals";
import Roles from "../../classes/roles";
import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs';
import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdFacebook,
    MdOutlineEmail,
} from 'react-icons/md';
import { motion, Variants } from "framer-motion";


const data = {
    title: {
        STARTUP_FOUNDER: ['Angel Investors', 'Venture Capitalists'],
        INVESTOR: ['Startup Founders', 'Amazing Innovators ']
    },

}

const L2RAnimate = {
    offscreen: { x: -100, opacity: 0 },
    onscreen: { x: 0, transition: { duration: 1 }, opacity: 1 },
}

const ContactGraphic = ({ role }) => {
    return (

        // <Box height={'min-content'}>
        //     <Heading>Contact</Heading>
        //     <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
        //         Fill up the form below to contact
        //     </Text>
        //     <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
        //         <VStack pl={0} spacing={3} alignItems="flex-start">
        //             <Button
        //                 size="md"
        //                 height="48px"
        //                 width="200px"
        //                 variant="ghost"
        //                 color="primary.500"
        //                 _hover={{
        //                     border: '2px solid', 
        //                     borderColor: 'primary.500'
        //                 }}
        //                 leftIcon={<MdPhone color="black" size="20px" />}>
        //                 +91-988888888
        //             </Button>
        //             <Button
        //                 size="md"
        //                 height="48px"
        //                 width="200px"
        //                 variant="ghost"
        //                 color="primary.500"
        //                 _hover={{
        //                     border: '2px solid', 
        //                     borderColor: 'primary.500'
        //                 }}
        //                 leftIcon={<MdEmail color="black" size="20px" />}>
        //                 hello@abc.com
        //             </Button>
        //             <Button
        //                 size="md"
        //                 height="48px"
        //                 width="200px"
        //                 variant="ghost"
        //                 color="primary.500"
        //                 _hover={{
        //                     border: '2px solid', 
        //                     borderColor: 'primary.500'
        //                 }}
        //                 leftIcon={<MdLocationOn color="black" size="20px" />}>
        //                 Karnavati, India
        //             </Button>
        //         </VStack>
        //     </Box>
        //     <HStack
        //         mt={{ lg: 10, md: 10 }}
        //         spacing={5}
        //         px={5}
        //         alignItems="flex-start">
        //         <IconButton
        //             aria-label="facebook"
        //             variant="ghost"
        //             size="lg"
        //             isRound={true}
        //             _hover={{ bg: '#0D74FF' }}
        //             icon={<MdFacebook size="28px" />}
        //         />
        //         <IconButton
        //             aria-label="github"
        //             variant="ghost"
        //             size="lg"
        //             isRound={true}
        //             _hover={{ bg: '#0D74FF' }}
        //             icon={<BsGithub size="28px" />}
        //         />
        //         <IconButton
        //             aria-label="discord"
        //             variant="ghost"
        //             size="lg"
        //             isRound={true}
        //             _hover={{ bg: '#0D74FF' }}
        //             icon={<BsDiscord size="28px" />}
        //         />
        //     </HStack>
        // </Box>
        <Stack spacing={{ base: 5, md: 10 }}  >
        <motion.div
        initial={'offscreen'}
        whileInView={'onscreen'}
        viewport={{ once: true, amount: 0.1 }}
        variants={L2RAnimate}
        >
            <Heading
                fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl', xl: '7xl' }}
                lineHeight={'110%'}
                >
                Find {' '}
                {role === Roles.INVESTOR ? data.title.INVESTOR[0] : data.title.STARTUP_FOUNDER[0]} {' '}
                <Text
                    variant={'orange'}
                    as={'span'}
                >
                    &
                </Text>{' '}
                {role === Roles.INVESTOR ? data.title.INVESTOR[1] : data.title.STARTUP_FOUNDER[1]}
            </Heading>
        </motion.div>

            <Center>
                <CurvedImage src={gif_link} width="60%" />
            </Center>
        </Stack>
        

    );
}

export default ContactGraphic;