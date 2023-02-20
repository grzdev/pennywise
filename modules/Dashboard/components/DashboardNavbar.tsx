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
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
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

  return (
    <Flex
      justifyContent="center"
      display={{ base: 'flex', md: 'none' }}
      alignItems="center"
    >
      <Flex
        position="fixed"
        mt={["4rem"]}
        overflow="hidden"
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
        bg={footer}
        // borderTop="0.0000000001rem solid {headercolor}"
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
          >
          <AiFillHome
            fontSize="1.1rem"
            color={icon}
          /> 
          <Text
            fontSize="0.5rem"
          >
            Home
          </Text>
          </Flex>

          <Flex
            alignItems="center"
            flexDir="column"
          >
          <SiGoogleanalytics
            color={icon}
            fontSize="1.1rem"
          />
          <Text
            fontSize="0.5rem"
          >
            Analytics
          </Text>
          </Flex>

          <Flex
            alignItems="center"
            flexDir="column"
          >
          <BsFillPersonFill
            color={icon}
            fontSize="1.1rem"
          /> 
          <Text
            fontSize="0.5rem"
          >
            Account
          </Text>
          </Flex>
        </HStack>
      </Flex>
    </Flex>

  );
};