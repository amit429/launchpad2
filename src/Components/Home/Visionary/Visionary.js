import React from "react";
import { Box, chakra, Flex, SimpleGrid, Image } from "@chakra-ui/react";
import { motion} from "framer-motion";

const L2RAnimate = {
    offscreen: { x: -100, opacity: 0 },
    onscreen: { x: 0, transition: { duration: 1 }, opacity: 1 },
}

const R2LAnimate = {
    offscreen: { x: 100, opacity: 0 },
    onscreen: { x: 0, transition: { duration: 1 }, opacity: 1 },
}

export default function Visionary() {
    return (
        <>
            <Flex
                p={{ base: 2, md: 20 }}
                w="full"
                justifyContent="center"
                alignItems="center"
                boxShadow={{ base: "none", md: "sm" }}
            >
                <Box
                    shadow="xl"
                    bg="white"
                    px={8}
                    py={8}
                    mx="auto"
                // border={{ base: "none", md: "1px solid black" }}
                >
                    <SimpleGrid
                        alignItems="start"
                        columns={{
                            base: 1,
                            md: 2,
                        }}
                        mb={10}
                        spacingY={{
                            base: 10,
                            md: 32,
                        }}
                        spacingX={{
                            base: 10,
                            md: "1%",
                        }}
                    >
                        <motion.div
                            initial={'offscreen'}
                            whileInView={'onscreen'}
                            viewport={{ once: true, amount: 0.5 }}
                            variants={L2RAnimate}
                        >
                            <Box>
                                <chakra.h2
                                    mb={4}
                                    fontSize={{
                                        base: "2xl",
                                        md: "3xl",
                                        lg: "4xl",
                                    }}
                                    fontWeight="extrabold"
                                    letterSpacing="tight"
                                    textAlign={{
                                        base: "center",
                                        md: "left",
                                    }}
                                    color="blue.900"
                                    lineHeight={{
                                        md: "shorter",
                                    }}

                                >
                                    Visionary - Shri Rahul V Karad

                                </chakra.h2>
                                <chakra.p
                                    mt={"5%"}
                                    textAlign={{
                                        base: "center",
                                        sm: "justify",
                                    }}
                                    color="gray.600"
                                    _dark={{
                                        color: "gray.400",
                                    }}
                                    fontSize={{
                                        md: "lg",
                                    }}
                                >
                                    We believe that, Launchpad-MITWPU will be one of the ways and sources of inspiration to the students of MIT World Peace University, who are passionate to hatch their big ideas by immersing in thought – provoking insights, deep dive into trends and unique networking opportunities.
                                    Launchpad will share the latest approaches to Innovation - Incubation and how to build a culture of innovation amongst the Students of MIT-WPU.

                                </chakra.p>
                            </Box>
                        </motion.div>

                        <motion.div
                            initial={'offscreen'}
                            whileInView={'onscreen'}
                            viewport={{ once: true, amount: 0.5 }}
                            variants={R2LAnimate}
                        >
                            <Image src="https://static.wixstatic.com/media/b160bc_f4df754e05844132b90a810feaa01d0c~mv2.png/v1/crop/x_0,y_0,w_400,h_392/fill/w_421,h_391,fp_0.50_0.50,lg_1,q_85,enc_auto/rahul_karad_sir.png" alt="Visionary" 
                            h={{ base: "300px", md: "320px" }}
                            pl={{ base: "0", md: "10%", lg:"30%" }}
                            mt={{ base: "0", md: "20%", lg:"0%" }}
                            />
                        </motion.div>
                    </SimpleGrid>

                    <SimpleGrid
                        alignItems="start"
                        columns={{
                            base: 1,
                            md: 2,
                        }}
                        mb={10}
                        spacingY={{
                            base: 10,
                            md: 32,
                        }}
                        spacingX={{
                            base: 10,
                            md: "1%",
                        }}
                        mt={{base:"50%", md:"10%"}}
                    >
                        <motion.div
                            initial={'offscreen'}
                            whileInView={'onscreen'}
                            viewport={{ once: true, amount: 0.5 }}
                            variants={L2RAnimate}
                        >
                            <Image src="https://static.wixstatic.com/media/5b36a0_0f1fedcf70b54db986b5f9f85ff3b491~mv2.webp" alt="Motivation" 
                            h={{ base: "300px", md: "320px" }}
                            pr={{ base: "0", md: "10%", lg:"0%" }}
                            mt={{ base: "0", md: "80%", lg:"0%" }}
                            />
                        </motion.div>
                        <motion.div
                            initial={'offscreen'}
                            whileInView={'onscreen'}
                            viewport={{ once: true, amount: 0.5 }}
                            variants={R2LAnimate}
                        >
                            <Box>
                                <chakra.h2
                                    mb={4}
                                    fontSize={{
                                        base: "2xl",
                                        md: "3xl",
                                        lg: "4xl",
                                    }}
                                    fontWeight="extrabold"
                                    letterSpacing="tight"
                                    textAlign={{
                                        base: "center",
                                        md: "left",
                                    }}
                                    color="blue.900"
                                    lineHeight={{
                                        md: "shorter",
                                    }}
                                >
                                    Our Motivation - Revered Prof (Dr.) Vishwanath D Karad
                                </chakra.h2>
                                <chakra.p
                                    mt={"5%"}
                                    textAlign={{
                                        base: "center",
                                        sm: "justify",
                                    }}
                                    color="gray.600"
                                    _dark={{
                                        color: "gray.400",
                                    }}
                                    fontSize={{
                                        md: "lg",
                                    }}
                                >
                                    At MIT-WPU, we groom generations who will be the architects of tomorrow, drivers of positive global change and ambassadors of world peace. Over the past 4 decades, students of MIT-WPU have created their footprints of excellence all over the world that inspire the spirit of transformation, change, and perseverance. Here, we encourage our students to curate their own stories, carve their own trajectories, and build their own paths. The success of our students guides our methodologies and builds bonds with them that are everlasting.

                                </chakra.p>
                            </Box>
                        </motion.div>

                        
                    </SimpleGrid>
                </Box>
            </Flex>
            ;
        </>
    );
}
