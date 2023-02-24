import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {
    Avatar,
    Box,
    chakra,
    Container,
    Flex,
    Text,
    Icon,
    SimpleGrid,
    useColorModeValue,
  } from '@chakra-ui/react';

export default function Timeline() {

    const details = [
        {
            title: 'Creative Director',
            subtitle: 'Miami, FL',
            description: 'Launchpad Startups provides seed funding, as well as access to investors who are interested in supporting early-stage startups.',
            date: '2011 - present',
            color: "rgb(240, 149, 65)"
        },

        {
            title: 'Art Director',
            subtitle: 'San Francisco, CA',
            description: 'Entrepreneurs can also participate in pitch events, where they can present their businesses to potential investors.',
            date: '2010 - 2011',
            color : "rgb(28, 37, 71)"
        },

        {
            title: 'Web Designer',
            subtitle: 'Los Angeles, CA',
            description: 'The platform offers a range of services, including mentorship, funding opportunities, and access to a network of experts and industry professionals. ',
            date: '2008 - 2010',
            color: "rgb(56, 102, 68)"
        },

        {
            title: 'Web Designer',
            subtitle: 'San Francisco, CA',
            description: 'One of the key benefits of Launchpad Startups is the mentorship program. Entrepreneurs are paired with experienced mentors who can provide guidance and support as they navigate the early stages of their ventures. ',
            date: '2006 - 2008',
            color: "rgb(240, 149, 65)"
        },

        {
            title: 'Graphic Designer',
            subtitle: 'London, UK',
            description: 'Launchpad Startups provides access to a network of experts and industry professionals. Entrepreneurs can attend events and workshops, where they can learn from experienced entrepreneurs and gain insights into the startup ecosystem.',
            date: '2004 - 2006',
            color : "rgb(28, 37, 71)"
        },

        {
            title: 'Graphic Artist',
            subtitle: 'San Francisco, CA',
            description: 'With mentorship, funding opportunities, and access to a network of experts, entrepreneurs can accelerate the growth of their ventures and achieve their goals.',
            date: '2002 - 2004',
            color: "rgb(56, 102, 68)"
        },
    ]
    return (
        <>
        <Flex
        textAlign={'center'}
        pt={10}
        justifyContent={'center'}
        direction={'column'}
        width={'full'}
        overflow={'hidden'}>

        <Box width={{ base: 'full', sm: 'lg', lg: 'xl' }} margin={'auto'}>
            <chakra.h1
            py={5}
            fontSize={48}
            fontFamily={'Sans-serif'}
            fontWeight={'bold'}
            color={useColorModeValue('blue.900', 'blue.50')}>
             Launchpad Benefits
          </chakra.h1>
          </Box>
        </Flex>

            <VerticalTimeline
            lineColor='black'>
                {details.map((detail) => {
                    return (
                        <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: `${detail.color}` , color: '#fff' }}
                    contentArrowStyle={{ borderRight: `7px solid  ${detail.color}` }}
                    date= {detail.date}
                    iconStyle={{ background: `${detail.color}`, color: '#fff' }}
                    // icon={<WorkIcon />}
                >
                    {/* <h3 className="vertical-timeline-element-title"><b>{detail.title}</b></h3>
                    <h4 className="vertical-timeline-element-subtitle">{detail.subtitle}</h4> */}
                    <p>
                        {detail.description}
                    </p>
                    {/* <Text fontSize={'sm'} display={{base: "none" , md: "block"}}>{detail.date}</Text> */}

                </VerticalTimelineElement>
                    )
                })}

                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                    // icon={<StarIcon />}
                />
            </VerticalTimeline>
                        
        </>
    )
}