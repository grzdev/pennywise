import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  useColorModeValue,
  useDisclosure,
  Heading,
  Divider
} from '@chakra-ui/react';
import {
  CloseIcon,
  MoonIcon,
  SunIcon
} from '@chakra-ui/icons';
import Link from 'next/link'
import { useColorMode } from "@chakra-ui/react";
import { useAuth } from "context/AuthContext";
import { FaGem } from "react-icons/fa"
import { RiMenu4Line } from "react-icons/ri";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'




const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const buttonColor = useColorModeValue("linear-gradient( 135deg, #FFA6B7 10%, #1E2AD2 100%)","linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)")
  const headerColor = useColorModeValue("#374D9A","#c6dbfb")
  const linkColor = useColorModeValue('gray.600', 'gray.200');

  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box>
    <Flex
      bg={useColorModeValue('white', 'gray.800')}
      color={useColorModeValue('gray.600', 'white')}
      minH={'5rem'}
      py={{ base: 2 }}
      px={{ base: 4 }}
      borderBottom={1} 
      borderStyle={'solid'}
      borderColor={useColorModeValue('gray.200', 'gray.900')}
      align={'center'}
      position="fixed"
      zIndex="sticky"
      w="100%"
      >
      <Flex
        flex={{ base: 1, md: 'auto' }}
        ml={{ base: "-0.2rem" }}
        mt={{ base: "0.8rem" }}
        display={{ base: 'flex', md: 'none' }}
      >
        <IconButton
          onClick={onOpen}
          icon={
            isOpen ? <CloseIcon w={3} h={3} /> : <RiMenu4Line fontSize="1.2rem"/>
          }
          variant={'ghost'}
          aria-label={'Toggle Navigation'}
        />
      </Flex>
      <Flex
       flex={{ base: 1 }}
       justify={{ base: 'center', md: 'start' }}
       >
        {/* Logo */}
        <Flex
          justifyContent="center"
          alignItems="center"
          ml={["0.rem", "1rem", "7rem", "11.3rem"]}
          flexDir="initial"
          mt={["0.6rem","0.4rem","0.4rem","0.4rem"]}
        >
          <Link href="/">
            <Flex
              mt={["0.12rem", "-0.2rem", "0.47rem", "0.43rem"]}
            >
              <Text
                fontSize={["1.5rem","1.5rem","1.8rem","1.8rem"]}
                color={headerColor}
                mr="0.2rem"
              >
                <FaGem
                />
              </Text>
            </Flex>
          </Link>
          <Link href="/">         
            <Heading
              size={["sm","sm","md","md"]}
              fontFamily="'Lato', sans-serif"
              // ml={["-0.05rem","-0.05rem","-0.05rem","0.2rem"]}
              color={headerColor}
            >
              pennywise
            </Heading>
          </Link>
        </Flex>

        {/* <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
          <DesktopNav />
        </Flex> */}
      </Flex>

        {/* Sign in/Sign out buttons */}
      <Stack
        flex={{ base: 1, md: 0 }}
        justify={'flex-end'}
        direction={'row'}
        spacing={6}
        mr={["-1.9rem", "-1.5rem", "3.5rem", "10rem"]}
        mt={["0.6rem", "0.1rem", "0.1rem", "0.1rem"]}
        ml={["1.9rem","1.4rem","",""]}
        >
          <Flex>
            <Link href="/login">
              <Button
                fontSize={'sm'}
                fontWeight={600}
                variant={'outlne'}
                mr={["1.5rem","1.5rem","-1rem","0.1rem"]}
                _hover={{
                  color: "#7d9eff"
                }}
                >
                Sign In
              </Button>
            </Link>

            <Link 
              href="/signup"
              >
              <Button
                
                fontSize={'sm'}
                fontWeight={700}
                color={'white'}
                bg={buttonColor}
                // href={'#'}
                _hover={{
                  bg: '#7858ff',
                }}
                borderRadius="1rem 0 1rem 0"
                display={{ base: 'none', md: 'none', lg: "inline-flex" }}
                >
                Sign up for free
              </Button>
            </Link>
          </Flex>

        <Button 
          onClick={toggleColorMode}
          display={{ base: 'none', md: 'inline-flex' }}
        >
          {colorMode === 'light' ? <MoonIcon/> : <SunIcon/>}
        </Button>
      </Stack>
    </Flex>


        {/* Mobile Nav/Slide */}
    <>
      <Button colorScheme='teal' onClick={onOpen}>
        Open
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        size="xs"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            
          </DrawerHeader>

          <DrawerBody>
            <Flex
              flexDir="column"
              gap="1.2rem"
              justifyContent="center"
              alignItems="center"
              mt="4rem"
            >
              <Divider/>
              <Link 
                href="/about">
                <Text
                  fontSize="1.5rem"
                >
                  About
                </Text>
              </Link>
              <Divider/>
            </Flex>
          </DrawerBody>

          <DrawerFooter>
          <Button 
            onClick={toggleColorMode}
            >
            {colorMode === 'light' ? <MoonIcon/> : <SunIcon/>}
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>

  </Box>
  )
}

// const DesktopNav = () => {
//   const linkColor = useColorModeValue('gray.600', 'gray.200');
//   const linkHoverColor = useColorModeValue('gray.800', 'white');
//   const popoverContentBgColor = useColorModeValue('white', 'gray.800');

//   return (
//     <Stack
//      direction={'row'}
//      spacing={12}
//      ml={["0.1rem","4rem", "8rem", "16rem"]}
//      mt="0.8rem"
//     >
//       <Flex
//         gap="5rem"
//       >
//       </Flex>
//     </Stack>
//   );
// };


// const MobileNav = () => {
//   const { colorMode, toggleColorMode } = useColorMode()
//   const linkColor = useColorModeValue('gray.600', 'gray.200');

//   return (
//     <Stack
//       bg={useColorModeValue('white', 'gray.800')}
//       p={4}
//       display={{ md: 'none' }}>

//       <Flex
//         flexDir="column"
//         gap="1rem"
//         mb="1rem"
//         mt="6rem"
//       >
        
//       </Flex>

//       <Button 
//        onClick={toggleColorMode}
//       >
//        {colorMode === 'light' ? <MoonIcon/> : <SunIcon/>}
//       </Button>
//     </Stack>
//   );
// };

export default Navbar