import { Image } from "@chakra-ui/react"

const CurvedImage = (props) => {
    
    return (

            <Image {...props} borderRadius={{ base: '20vw', md: '10vw', lg: '7.5vw', xl: '5vw' }}  />

    );
}

export default CurvedImage;