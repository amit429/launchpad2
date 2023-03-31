import { Box, Heading, Image, AspectRatio, Text, Stack, Avatar, Divider, Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import { GiFountainPen } from 'react-icons/gi'
import { FaTwitter } from 'react-icons/fa';
import { BsInstagram, BsFacebook } from 'react-icons/bs';
import { BiLinkAlt } from 'react-icons/bi';
import { FcLike } from 'react-icons/fc';

function BlogDetail() {

    const [media, setMedia] = useState('img');

    return (
        <Box
            border={{ base: "none", md: "1px solid black" }}
            boxShadow={{ base: "none", md: "sm" }}
            p={{ base: 2, md: 20 }}
            w="80%"
            h={{ base: "auto", md: "auto" }}
            justifyContent="center"
            alignItems="center"
            mx="auto"
            mt={{ base: 4, md: 20 }}
        >
            <Stack direction={'row'} pb={4} gap={{base:1,md:1, lg:3}}>
                <Avatar size={'sm'}  />
                <Text
                fontSize={{base:'sm', md:'xl'}}
                >Author Name</Text>
                <GiFountainPen size={'23px'} />
                <Text
                fontSize={{base:'sm', md:'xl'}}
                pl={{base:'1', md:'5'}}
                >Written on 01/01/2023</Text>
            </Stack>
            <Heading
                pb={4}
            >Blog Title</Heading>
            {media === 'img' ? (
                <Image src="https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrg" alt="blog image"
                    pb={4}
                />
            ) : (
                <AspectRatio maxW='1200px' maxH="720px" ratio={1} >
                    <iframe
                        title='naruto'
                        src='https://www.youtube.com/embed/rJ4QTsAE2A0'
                        allowFullScreen
                    />
                </AspectRatio>
            )
            }
            <Box
                textAlign={{ base: "justify ", md: "justify" }}
                w="full"
                pt={4}
            >
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet consectetur adipiscing elit duis. Eros donec ac odio tempor orci. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Nulla malesuada pellentesque elit eget. Sem fringilla ut morbi tincidunt augue interdum. Vitae tempus quam pellentesque nec nam aliquam sem et tortor. Et malesuada fames ac turpis egestas. Vitae auctor eu augue ut. Tellus in hac habitasse platea. Felis bibendum ut tristique et egestas. At quis risus sed vulputate odio ut enim blandit volutpat. Sit amet luctus venenatis lectus. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a. Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. Arcu dictum varius duis at consectetur lorem donec massa. Consectetur adipiscing elit ut aliquam purus sit amet. Tortor consequat id porta nibh venenatis cras sed felis eget. Ut pharetra sit amet aliquam id. Nisi vitae suscipit tellus mauris a.

                    Netus et malesuada fames ac. Aliquam sem et tortor consequat id. Ipsum dolor sit amet consectetur. Duis at consectetur lorem donec massa sapien faucibus et. Non enim praesent elementum facilisis leo vel fringilla est ullamcorper. Sit amet est placerat in egestas erat imperdiet sed euismod. Nullam vehicula ipsum a arcu cursus. Non tellus orci ac auctor augue. Cras pulvinar mattis nunc sed. Morbi non arcu risus quis varius quam. Neque sodales ut etiam sit amet nisl purus in. Iaculis nunc sed augue lacus viverra vitae congue. Nibh tortor id aliquet lectus proin nibh nisl condimentum. Cras semper auctor neque vitae tempus quam pellentesque nec nam. Viverra adipiscing at in tellus integer feugiat scelerisque varius.

                    Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Nunc non blandit massa enim. Nulla pellentesque dignissim enim sit amet venenatis. Elit sed vulputate mi sit amet mauris commodo. Tellus cras adipiscing enim eu turpis egestas pretium. Interdum consectetur libero id faucibus nisl tincidunt eget nullam. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Ut pharetra sit amet aliquam id. Lorem donec massa sapien faucibus et molestie. Bibendum est ultricies integer quis auctor. Sed ullamcorper morbi tincidunt ornare massa eget.

                    Laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt. A iaculis at erat pellentesque adipiscing. Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Id volutpat lacus laoreet non curabitur gravida arcu ac tortor. Vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Tellus at urna condimentum mattis pellentesque id nibh. Facilisis volutpat est velit egestas dui id ornare arcu. Sit amet tellus cras adipiscing enim eu. Et malesuada fames ac turpis. Tortor at auctor urna nunc id cursus metus. Urna condimentum mattis pellentesque id nibh tortor. Eu turpis egestas pretium aenean. Velit laoreet id donec ultrices tincidunt arcu non. Libero id faucibus nisl tincidunt eget nullam. Massa placerat duis ultricies lacus sed.
                </Text>
                <Divider orientation="horizontal" mt={10} border={'1px solid'}/>
                <Stack direction={'row'} pt={4} gap={{base:1,md:1, lg:5}}>
                    <BsFacebook size={25} />
                    <FaTwitter size={25} />
                    <BsInstagram size={25} />
                    <BiLinkAlt size={25} />
                    <Box pl={{base:"100px", md:"250px", lg:"800px"}}
                    pb={5}
                    bg={'none'}
                    _hover={{
                        bg:'none',
                        cursor:'pointer'
                    }}
                    onClick={() => {
                        console.log('clicked')
                    }}
                    >
                    <FcLike size={25} />
                    </Box>
                </Stack>
                <Divider orientation="horizontal" mt={3} border={'1px solid'}/>
            </Box>

        </Box>
    )
}

export default BlogDetail