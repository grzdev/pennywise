import React, { ReactNode } from 'react';
import { MdTrackChanges } from "react-icons/md"
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Heading
} from '@chakra-ui/react';
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
} from 'react-icons/fi';
import { IconType } from 'react-icons';
import { ReactText } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { SiGoogleanalytics } from "react-icons/si"
import { BsFillPersonFill } from "react-icons/bs"
import { FaWallet } from "react-icons/fa"

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
      <MobileNav onOpen={onOpen} />
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
  const headerColor = useColorModeValue("#4f89e8","#c6dbfb")
  const hover = useColorModeValue("","#171923")
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
          flexDir="initial"
          mt={["0.6rem","0.4rem","0.4rem","0.4rem"]}
          
        >
            <Flex
              mt={["-0.1rem", "-0.2rem", "-0.1rem", "-0.1rem"]}
            >
              <MdTrackChanges
                fontSize="2rem"
                color={headerColor}
              />
            </Flex>
            <Heading
              size="md"
              ml="0.1rem"
              color={headerColor}
            >
              trackdaily
            </Heading>
        </Flex>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {/* {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))} */}
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
            p="4"
            mx="4"
            borderRadius="0.7rem"
          >
          <Link href='/dashboard' >
            <AiFillHome
              fontSize="1.2rem"
              fontWeight={700}
            /> 
          </Link>
          <Link 
            href='/dashboard' 
            _hover={{textDecoration: "none"}}
            >
            <Text
              fontSize="1rem"
              fontWeight={700}
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
            p="4"
            mx="4"
            borderRadius="0.7rem"
          >
            <Link 
              _hover={{textDecoration: "none"}}
              href='/analytics'
            >
              <SiGoogleanalytics
                fontSize="1.2rem"
                fontWeight={700}
              />
            </Link>
            <Link 
              href='/analytics'
              _hover={{textDecoration: "none"}}
              >
              <Text
                fontWeight={700}
                fontSize="1rem"
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
            p="4"
            mx="4"
            borderRadius="0.7rem"
          >
            <Link href='/budget'>
              <FaWallet
                fontWeight={700}
                fontSize="1.2rem"
              /> 
            </Link>
            <Link 
              href='/budget'
             _hover={{textDecoration: "none"}}
            >
              <Text
                fontWeight={700}
                fontSize="1rem"
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
            p="4"
            mx="4"
            borderRadius="0.7rem"
          >
            <Link href='/account'>
              <BsFillPersonFill
                fontWeight={700}
                fontSize="1.2rem"
              /> 
            </Link>
            <Link 
              href='/account'
             _hover={{textDecoration: "none"}}
            >
              <Text
                fontWeight={700}
                fontSize="1rem"
              >
                Account
              </Text>
            </Link>
          </Flex>

        </VStack>
      </Flex>
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactText;
}
const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Link href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  const icon = useColorModeValue("black","lightgrey")
  const footer = useColorModeValue("white","#12141c")
  const headerColor = useColorModeValue("#4f89e8","#c6dbfb")
  const _hover = useColorModeValue("","#171923")

  return (
    <Box
      justifyContent="center"
      display={{ base: 'flex', md: 'none' }}
      alignItems="center"
      h="full"
      >
      <Flex
        mt={["2rem"]}
        // overflow="hidden"
        // position="fixed"
      >
        <Flex
          justifyContent="center"
          alignItems="center"
          // ml={["8rem"]}
          // flexDir="initial" 
        >
            <Flex
              mt={["-0.1rem", "-0.2rem", "-0.1rem", "-0.1rem"]}
            >
              <MdTrackChanges
                fontSize="2rem"
                color={headerColor}
              />
            </Flex>
            <Heading
              size="md"
              ml="0.1rem"
              color={headerColor}
            >
              trackdaily
            </Heading>
        </Flex>
      </Flex>
      <Flex
        bottom={0}
        w="100%"
        position="fixed"
        overflow="hidden"
        zIndex="1"
        bg={footer}
        h="3rem"
        display={{ base: 'flex', md: 'none' }}
        justifyContent="center"
        alignItems="center"
      >
        <HStack
          gap="3rem"
        >
          <Flex
            flexDir="column"
            alignItems="center"
            _hover={{
              bg: "#4f6382",
              color: 'white',
            }}
          >
          <Link href='/dashboard'>
            <AiFillHome
              fontSize="1.1rem"
              color={icon}
            /> 
          </Link>
          <Link href='/dashboard'>
            <Text
              fontSize="0.5rem"
            >
              Home
            </Text>
          </Link>
          </Flex>

          <Flex
            alignItems="center"
            flexDir="column"
            _hover={{
              bg: "#4f6382",
              color: 'white',
            }}
          >
            <Link href='/analytics'>
              <SiGoogleanalytics
                color={icon}
                fontSize="1.1rem"
              />
            </Link>
            <Link href='/analytics'>
              <Text
                fontSize="0.5rem"
              >
                Analytics
              </Text>
            </Link>
          </Flex>

          <Flex
            alignItems="center"
            flexDir="column"
            _hover={{
              bg: "#4f6382",
              color: 'white',
            }}
          >
            <Link href='/budget'>
              <FaWallet
                color={icon}
                fontSize="1.1rem"
              />
            </Link>
            <Link href='/budget'>
              <Text
                fontSize="0.5rem"
              >
                Budget
              </Text>
            </Link>
          </Flex>

          <Flex
            alignItems="center"
            flexDir="column"
            _hover={{
              bg: "#4f6382",
              color: 'white',
            }}
          >
            <Link href='/account'>
              <BsFillPersonFill
                color={icon}
                fontSize="1.1rem"
              /> 
            </Link>
            <Link href='/account'>
              <Text
                fontSize="0.5rem"
              >
                Account
              </Text>
            </Link>
          </Flex>
        </HStack>
      </Flex>
    </Box>

  );
};