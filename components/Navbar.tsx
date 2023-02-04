// import { HStack, Stack, Flex, Heading, Button } from '@chakra-ui/react'
// import React from 'react'
import { BsPiggyBank } from "react-icons/bs"
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
} from '@chakra-ui/icons';



const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    // <Stack>
    //   <HStack 
    //     p={["2rem","2rem","1.4rem","2rem"]}
    //   >
    //     <Flex
    //       justifyContent="center"
    //       alignItems="center"
    //       ml={["2.6rem", "2.6rem", "1rem", "2.6rem"]}
    //     >
    //       <BsPiggyBank 
    //         fontSize="3rem"
    //       />
    //       <Heading
    //         size="lg"
    //         ml="0.2rem"
    //       >
    //         trackdaily
    //       </Heading>
    //     </Flex>

    //     <Flex
    //       gap={["6rem","6rem","3rem","6rem"]}
    //     >
    //       <Heading
    //         ml={["18rem", "18rem", "5rem", "18rem"]}
    //         size="md"
    //         fontWeight={750}
    //         color="grey"
    //       >
    //         Save
    //       </Heading>

    //       <Heading
    //         size="md"
    //         fontWeight={750}
    //         color="grey"
    //       >
    //         Invest
    //       </Heading>

    //       <Heading
    //         size="md"
    //         fontWeight={750}
    //         color="grey"
    //       >
    //         Stories
    //       </Heading>
    //     </Flex>

    //     <Flex>
    //       <Button
    //         ml={["15rem", "15rem", "2.5rem", "15rem"]}
    //         mr="1rem"
    //         size="lg"
    //         variant='outline'
    //       >
    //         Sign in
    //       </Button>

    //       <Button
    //         size="lg"
    //         variant='solid'
    //         // colorScheme="#000000"
    //         colorScheme="blue"
    //       >
    //         Create an account
    //       </Button>
    //     </Flex>
    //   </HStack>
    // </Stack>
    <Box>
    <Flex
      bg={useColorModeValue('white', 'gray.800')}
      color={useColorModeValue('gray.600', 'white')}
      minH={'60px'}
      py={{ base: 2 }}
      px={{ base: 4 }}
      borderBottom={1}
      borderStyle={'solid'}
      borderColor={useColorModeValue('gray.200', 'gray.900')}
      align={'center'}
      
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
        {/* <Text
          textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
          fontFamily={'heading'}
          color={useColorModeValue('gray.800', 'white')}>
          <BsPiggyBank 
            fontSize="3rem"
          />
          <Heading
            size="lg"
            ml="0.2rem"
          >
            trackdaily
          </Heading>
        </Text> */}
        <Flex
          justifyContent="center"
          alignItems="center"
          ml={["0.1rem", "2.6rem", "1rem", "2.6rem"]}
          flexDir="initial"
        >
          <BsPiggyBank 
            fontSize="3rem"
          />
          <Heading
            size="lg"
            ml="0.2rem"
          >
            trackdaily
          </Heading>
        </Flex>

        <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
          <DesktopNav />
        </Flex>
      </Flex>

      <Stack
        flex={{ base: 1, md: 0 }}
        justify={'flex-end'}
        direction={'row'}
        spacing={6}>
        <Button
          as={'a'}
          fontSize={'sm'}
          fontWeight={600}
          variant={'outlne'}
          href={'#'}>
          Sign In
        </Button>
        <Button
          display={{ base: 'none', md: 'inline-flex' }}
          fontSize={'sm'}
          fontWeight={600}
          color={'white'}
          bg={'#3182CE'}
          // href={'#'}
          _hover={{
            bg: 'pink.300',
          }}>
          Create an account
        </Button>
      </Stack>
      
        {/* <Flex
          flexDir={["column", "row", "row", "row"]}
          justifyContent="center"
          alignItems="center"
        >
           <Button
            ml={["0.1rem", "2.5rem", "2.5rem", "15rem"]}
            mr="1rem"
            size={["xs","md", "md", "lg"]}
            variant='outline'
          >
            Sign in
          </Button>

          <Button
            size={["xs","md", "md", "lg"]}
            variant='solid'
            // colorScheme="#000000"
            colorScheme="blue"
          >
            Create an account
          </Button>
        </Flex> */}
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
     ml={["0.1rem","4rem", "5rem", "21rem"]}
     mt="0.8rem"
    >
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'md'}
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
      ))}
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
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
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
    label: 'Save',
    // children: [
    //   {
    //     label: 'Explore Design Work',
    //     subLabel: 'Trending Design to inspire you',
    //     href: '#',
    //   },
    //   {
    //     label: 'New & Noteworthy',
    //     subLabel: 'Up-and-coming Designers',
    //     href: '#',
    //   },
    // ],
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