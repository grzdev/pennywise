import React, { ReactNode, useState } from 'react';
import {
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Heading,
  Button,
  useColorMode,
} from '@chakra-ui/react';
import { IconType } from 'react-icons';
import Link from 'next/link';
import { ReactText } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { SiGoogleanalytics } from "react-icons/si"
import { BsFillPersonFill } from "react-icons/bs"
import { FaWallet } from "react-icons/fa"
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { FaGem } from "react-icons/fa"
import LogoutModal from '../components/logout-modal';

interface LinkItemProps {
  name: string;
  icon: IconType;
}
const LinkItems: Array<LinkItemProps> = [
  { name: 'Home', icon: AiFillHome },
  { name: 'Analytics', icon: SiGoogleanalytics },
  { name: 'Account', icon: BsFillPersonFill },
  // { name: 'Favourites', icon: FiStar },
  // { name: 'Settings', icon: FiSettings },
];

export default function SidebarWithHeader({
  children,
}: {
  children: ReactNode;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }} 
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      {/* <MobileNav  /> */}
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  const headerColor = useColorModeValue("#070D59","#c6dbfb")
  const hover = useColorModeValue("","#171923")
  const { colorMode, toggleColorMode } = useColorMode()
  const icon = useColorModeValue("black","lightgrey")

  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      // w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Flex
          justifyContent="center"
          alignItems="center"
          // ml={["0.rem", "1rem", "1rem", "8.4rem"]}
          ml={["","","1.3rem","1.4rem"]}
          flexDir="initial"
          mt={["0.6rem","0.4remf","0.4rem","0.4rem"]}
          
        >
            <Flex
              mt={["-0.1rem", "-0.2rem", "0.12rem", "0.2rem"]}
            >
              <Text>
                <FaGem
                  fontSize="1.6rem"
                  color={headerColor}
                />
              </Text>
            </Flex>
            <Heading
              size="md"
              ml="0.2rem"
              fontFamily="'Lato', sans-serif"
              color={headerColor}
            >
              pennywise
            </Heading>
        </Flex>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      <Flex
        flexDir="column"
        mt="1rem"
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
      >
       <VStack
          gap="1rem"
        >
          <Flex
            flexDir="row"
            alignItems="center"
            gap="1rem" 
            _hover={{
              bg: "#4f6382",
              color: 'white',
            }}
            _active={{
              bg: "#4f6382",
              color: 'white',
            }}
            p="1rem"
            mx="4"
            borderRadius="0.7rem"
          >
          <Link href='/dashboard' >
            <AiFillHome
              fontSize="1.5rem"
              fontWeight={700}
            /> 
          </Link>
          <Link 
            href='/dashboard' 
            >
            <Text
              fontSize="1.4rem"
              fontWeight={600}
            >
              Home
            </Text>
          </Link>
          </Flex>

          <Flex
            alignItems="center"
            gap="1rem"
            flexDir="row"_hover={{
              bg: "#4f6382",
              color: 'white',
            }}
            p="1rem"
            mx="4"
            borderRadius="0.7rem"
          >
            <Link 
              href='/analytics'
            >
              <SiGoogleanalytics
                fontSize="1.5rem"
                fontWeight={700}
              />
            </Link>
            <Link 
              href='/analytics'
              >
              <Text
                fontWeight={600}
                fontSize="1.4rem"
              >
                Analytics
              </Text>
            </Link>
          </Flex>

          <Flex
            alignItems="center"
            gap="1rem"
            flexDir="row"
            _hover={{
              bg: "#4f6382",
              color: 'white',
            }}
            p="1rem"
            mx="4"
            borderRadius="0.7rem"
          >
            <Link href='/budget'>
              <FaWallet
                fontWeight={700}
                fontSize="1.5rem"
              /> 
            </Link>
            <Link 
              href='/budget'
            >
              <Text
                fontWeight={600}
                fontSize="1.4rem"
              >
                Budget
              </Text>
            </Link>
          </Flex>

          <Flex
            alignItems="center"
            gap="1rem"
            flexDir="row"
            _hover={{
              bg: "#4f6382",
              color: 'white',
            }}
            p="1rem"
            mx="4"
            borderRadius="0.7rem"
          >
          </Flex>

          <Flex>

          <Flex
            mt="14rem"
            gap="3rem"
          >
            <Flex>
              <LogoutModal/>
            </Flex>
            <Button 
            onClick={toggleColorMode}
            >
              {colorMode === 'light' ? <MoonIcon/> : <SunIcon/>}
            </Button>
          </Flex>

          </Flex>
        </VStack>
      </Flex>
    </Box>
  );
};

