import { MdTrackChanges } from "react-icons/md"
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Heading
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  MoonIcon,
  SunIcon
} from '@chakra-ui/icons';
import { useColorMode } from "@chakra-ui/react";
import { useAuth } from "context/AuthContext";
import router from "next/router";



const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode()
  const buttonColor = useColorModeValue("black","#256ec1")
  const headerColor = useColorModeValue("#4f89e8","#c6dbfb")

  const { user, logout } = useAuth()

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
      // position="fixed"
      w="100%"
      >
      <Flex
        flex={{ base: 1, md: 'auto' }}
        ml={{ base: -2 }}
        display={{ base: 'flex', md: 'none' }}
      >
        <IconButton
          onClick={onToggle}
          icon={
            isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
          }
          variant={'ghost'}
          aria-label={'Toggle Navigation'}
        />
      </Flex>
      <Flex
       flex={{ base: 1 }}
       justify={{ base: 'center', md: 'start' }}
       >
        <Flex
          justifyContent="center"
          alignItems="center"
          ml={["0.rem", "1rem", "1rem", "8.4rem"]}
          flexDir="initial"
          mt={["0.6rem","0.4rem","0.4rem","0.4rem"]}
        >
          <Link href="/">
            <Flex
              mt={["-0.1rem", "-0.2rem", "-0.1rem", "-0.1rem"]}
            >
              <MdTrackChanges
                fontSize="2rem"
                color={headerColor}
              />
            </Flex>
          </Link>
          <Link href="/">         
            <Heading
              size="md"
              ml="0.1rem"
              color={headerColor}
            >
              trackdaily
            </Heading>
          </Link>
        </Flex>

        <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
          <DesktopNav />
        </Flex>
      </Flex>

      <Stack
        flex={{ base: 1, md: 0 }}
        justify={'flex-end'}
        direction={'row'}
        spacing={6}
        mr={["-1.9rem", "-1.5rem", "-1.5rem", "8.5rem"]}
        mt={["0.6rem", "0.1rem", "0.1rem", "0.1rem"]}
        ml={["1.9rem","1.4rem","",""]}
        >
          {user ? (
            <Flex>
              <Button
              fontSize={'sm'}
              fontWeight={600}
              variant={'outlne'}
              onClick={()=>{
                logout(),
                router.push("/login")
              }}
              >
              Logout
            </Button>
            </Flex>
          ) : (
          <Flex>
            <Link href="/login">
              <Button
                fontSize={'sm'}
                fontWeight={600}
                variant={'outlne'}
                display={{ base: 'none', md: 'inline-flex' }}
                >
                Sign In
              </Button>
            </Link>

            <Link href="/signup">
              <Button
                
                fontSize={'sm'}
                fontWeight={700}
                color={'white'}
                bg={buttonColor}
                // href={'#'}
                _hover={{
                  bg: '#308DFF',
                }}
                borderRadius="0.6rem"
                >
                Create free account
              </Button>
            </Link>
          </Flex>
          )}

        <Button 
          onClick={toggleColorMode}
          display={{ base: 'none', md: 'inline-flex' }}
          
        >
          {colorMode === 'light' ? <MoonIcon/> : <SunIcon/>}
        </Button>
      </Stack>
    </Flex>

    <Collapse in={isOpen} animateOpacity>
      <MobileNav />
    </Collapse>
  </Box>
  )
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack
     direction={'row'}
     spacing={12}
     ml={["0.1rem","4rem", "5rem", "16rem"]}
     mt="0.8rem"
    >
      {/* {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'lg'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))} */}
      <Flex
        gap="5rem"
      >
        <Link href="/about">
          <Text
            fontWeight={600}
            color={linkColor}
          >
            About
          </Text>
        </Link>

        <Link href="/privacy">
          <Text
            fontWeight={600}
            color={linkColor}
          >
            Privacy
          </Text>
        </Link>

        <Link href="/terms">
          <Text
            fontWeight={600}
            color={linkColor}
          >
            Terms
          </Text>
        </Link>
      </Flex>
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'pink.400' }}
            fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const linkColor = useColorModeValue('gray.600', 'gray.200');

  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}>
      {/* {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))} */}

      <Flex
        flexDir="column"
        gap="1rem"
        mb="1rem"
      >
        <Link href="/about">
          <Text
            fontWeight={600}
            color={linkColor}
          >
            About
          </Text>
        </Link>

        <Link href="/privacy">
          <Text
            fontWeight={600}
            color={linkColor}
          >
            Privacy
          </Text>
        </Link>

        <Link href="/terms">
          <Text
            fontWeight={600}
            color={linkColor}
          >
            Terms
          </Text>
        </Link>
      </Flex>

      <Button 
       onClick={toggleColorMode}
      >
       {colorMode === 'light' ? <MoonIcon/> : <SunIcon/>}
      </Button>
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>
      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'About',
    children: [
      {
        label: 'Explore Design Work',
        subLabel: 'Trending Design to inspire you',
        href: '#',
      },
      {
        label: 'New & Noteworthy',
        subLabel: 'Up-and-coming Designers',
        href: '#',
      },
    ],
  },
  {
    label: 'Invest',
    // children: [
    //   {
    //     label: 'Job Board',
    //     subLabel: 'Find your dream design job',
    //     href: '#',
    //   },
    //   {
    //     label: 'Freelance Projects',
    //     subLabel: 'An exclusive list for contract work',
    //     href: '#',
    //   },
    // ],
  },
  {
    label: 'Stories',
    // href: '#',
  },
  // {
  //   label: 'Hire Designers',
  //   href: '#',
  // },
];

export default Navbar