import { Button, Flex, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useColorModeValue, useDisclosure } from '@chakra-ui/react'
import { useAuth } from 'context/AuthContext'
import React from 'react'
import router from "next/router";
import { IoExitOutline } from 'react-icons/io5'

const LogoutModal = () => {
  const logoutColor = useColorModeValue("red","#C6dbfb")
  const yes = useColorModeValue("red","blue")
  const { isOpen, onClose, onOpen } = useDisclosure()
  const { user, logout } = useAuth()

  return (
    <Flex>
        <Button
        
            variant="ghost"
            onClick={onOpen}
        >
          <Text
            fontSize="1.7rem"
            color={logoutColor}
          >
            <IoExitOutline/>
          </Text>
        </Button>
        <Modal isOpen={isOpen} onClose={onClose} size="xs" isCentered>
          <ModalOverlay />
          <ModalContent>
            {/* <ModalHeader>Logout?</ModalHeader> */}
            {/* <ModalCloseButton /> */}
            <ModalBody>
            <Flex
                flexDir="column"
                justifyContent="center"
                alignItems="center"
            >
                <Heading
                    size='lg'
                    mt="2rem"
                >
                    Logout?
                </Heading>
                <Flex
                    mt="2rem"
                >
                    <Button 
                        colorScheme={yes} 
                        mr={3} 
                        onClick={()=>{
                            logout(),
                            router.push("/login")
                        }}
                    >
                        Yes
                    </Button>
                    <Button variant='outline' colorScheme={yes} onClick={onClose}>
                        Cancel
                    </Button>
                </Flex>
            </Flex>
            </ModalBody>
            <ModalFooter>
              
            </ModalFooter>
          </ModalContent>
        </Modal>
    </Flex>
  )
}

export default LogoutModal