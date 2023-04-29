import { 
    Flex, 
    Button, 
    Box, 
    Text, 
    SimpleGrid, 
    useColorModeValue, 
    Heading,
    Divider,
    useDisclosure,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    DrawerFooter,
    useColorMode
  } from '@chakra-ui/react'
import { FaGem } from 'react-icons/fa'
import { RiMenu4Line } from 'react-icons/ri'
import Link from "next/link"
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

const MobileNav = () => {

    const { colorMode, toggleColorMode } = useColorMode()
    const { isOpen, onClose, onOpen } = useDisclosure()
    const headerColor = useColorModeValue("#070D59","#c6dbfb")

  return (
    <Flex
            ml="auto"
            display={{ base: 'flex', md: 'none' }}
         >
           <Button  variant="ghost" onClick={onOpen}>
            <Text
              fontSize="1.5rem"
            >
            <RiMenu4Line/>  
            </Text>
          </Button>
          <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton mt="2.8rem" mr="1rem" fontSize="1.1rem" />
              <DrawerHeader>
                <Flex
                  justifyContent="center"
                  alignItems="center"
                      mt="2.4rem" 
                      mr="10.5rem"
                >
                    <Flex
                      mt={["0.1rem", "-0.2rem", "-0.1rem", "-0.1rem"]}
                    >
                      <Text
                        mt="0.1rem"
                        fontSize="1.4rem"
                      >
                        <FaGem
                          color={headerColor}
                        />
                      </Text>
                    </Flex>
                    <Heading
                      size={["sm","sm","md","md"]}
                      ml="0.2rem"
                      fontFamily="'Lato', sans-serif"
                      color={headerColor}
                    >
                      pennywise
                    </Heading>
                </Flex>
              </DrawerHeader>

              <DrawerBody>
                <Flex
                  flexDir="column"
                  gap="1.2rem"
                  mt="4rem"
                >
                  <Link
                    href="/dashboard"
                  >
                    <Text
                      fontSize="1.3rem"
                    >
                      dashboard
                    </Text>
                  </Link>

                  <Divider/>

                  <Link
                    href="/analytics"
                  >
                    <Text
                      fontSize="1.3rem"
                    >
                      analytics
                    </Text>
                  </Link>

                  <Divider/>

                  <Link
                    href="/budget"
                  >
                    <Text
                      fontSize="1.3rem"
                    >
                      budget
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
        </Flex>
  )
}

export default MobileNav