import React from 'react'
import {
    Box,
    Flex,
    Avatar,
    HStack,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    Text,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react';
  import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
  import { Link } from "react-router-dom";
  import logo from "../../Assests/Launchpad Startups colored.png"
  import { ReactNode } from 'react';

export default function Navbar() {

    const { isOpen, onOpen, onClose } = useDisclosure();

    const nav = [
        {
            name: "Home",
            path: "/"
        },

        {
            name: "About",
            path: "/about"
        },

        {
            name : "Portfolio",
            path: "/portfolio"
        },

        {
            name: "Resources",
            path: "/resources"
        },

        {
            name: "Contact",
            path: "/contact"
        }
    ]
  return (
    <>
      <Box
        bg={useColorModeValue("primary.100", "primary.300")}
        px={4}
        style={{
          boxShadow: "0 0 10px rgba(0,0,0,0.2)",

          "@media (max-width: 768px)": {
            width: "100%",
          },
        }}
        width="100%"
      >
        <Flex h={20} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box
              display={{ md: "block" }}
              style={{
                cursor: "pointer",
                justifyContent: "center",
              }}
            >
              <img src={logo} alt="Logo" width="190px" />
            </Box>
          </HStack>
          <Flex alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
              color="black"
              p={10}
            >
              {nav.map((link) => (
                <Button
                  variant={"ghost"}
                  _hover={{
                    color: "white",
                    bg: "tertiary.800",
                    
                  }}
                  transitionDuration="0.5s"
                >
                  <Link
                    _hover={{
                      textDecoration: "none",
                    }}
                    p={5}
                    fontSize={"lg"}
                    to={link.path}
                    key={link.name}
                    
                  >
                    {link.name}
                  </Link>
                </Button>
              ))}
            </HStack>
          </Flex>
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Drawer onClose={onClose} isOpen={isOpen} size={"xs"} placement="left">
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>
                  <img src={logo} alt="Logo" width="190px" />
                </DrawerHeader>
                <DrawerBody>
                  <Stack as={"nav"} spacing={4} color="black">
                    {nav.map((link) => (
                      <Link to={link.path} key={link.name} onClick={onClose}>
                        {link.name}
                      </Link>
                    ))}
                  </Stack>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
