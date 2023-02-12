
import { defineStyleConfig } from '@chakra-ui/react'


const ButtonStyles = defineStyleConfig({
  // The styles all button have in common
  baseStyle: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    borderRadius: 'base', // <-- border radius is same for all variants and sizes
    color: 'white',
  },
  // sizes  
  sizes: {

  },
  // variants
  variants: {
    basic: (props) => ({
      as: 'a',
      display: { base: 'none', md: 'inline-flex' },
      fontSize: 'sm',
      fontWeight: 600,
      color: 'tertiary.800',
      bg: 'white',
      border: '1px',
      borderColor: 'secondary.100',
      href: props.href ?? '#',
      transitionDuration: "500ms",
      _hover: {
        color: 'black',
        bg: 'tertiary.600',
        border: '1px',
        boxShadow: 'lg',
        borderColor: 'tertiary.600',
      }
    }),
    link: (props) => ({
      fontSize: 'sm',
      color: 'blue.700',
      href: props.href ?? '#',

      _hover: {
        textUnderlineOffset: 3,

        color: 'blue.800',
        // textDecoration: 'none',
      },
      fontWeight: 400
    }),
    hero: (props) => ({
      rounded: 'full',
      size: 'lg',
      fontWeight: 'normal',
      px: 6,
      colorScheme: 'red',
      bg: 'tertiary.800',
      _hover: { bg: 'tertiary.700' },
    }),
    'hero-lower': (props) => ({
      rounded: 'full',
      size: 'lg',
      fontWeight: 'normal',
      px: 6,
      colorScheme: 'red',
      bg: 'primary.200',
      _hover: { bg: 'primary.100' },
    }),
    submit: (props) => ({
      fontFamily: 'heading',
      mt: 8,
      w: 'full',
      bgColor: 'primary.700',
      color: 'white',
      transitionDuration: "1000ms",
      _before: {
        bgGradient: 'linear(to-r, orange.500,blue.300,green.500)',
        boxShadow: 'lg',
      },
      _hover: {
        color: 'primary.800',
        bgGradient: 'linear(to-r, orange.500,white,white,green.500)',
        boxShadow: 'xl',
      },
    }),
    upload: (props) => ({
      fontFamily: 'heading',
      bg: 'gray.200',
      color: 'gray.800',
      transitionDuration: "1000ms",
      _hover: {
        color: 'gray.700',
        bg: 'gray.300',
        boxShadow: 'xl',
      }
    }),

  },
  // The default size and variant values
  defaultProps: {

  },
})


export { ButtonStyles };


