import { Container, SimpleGrid } from "@chakra-ui/react";

const OneTwoColumn = (props) => {
    return (<Container
        alignItems={'center'}
        as={SimpleGrid}
        maxW={'7xl'}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 'xl' }}
    >
        {props.children}
    </Container>);
}

export default OneTwoColumn;