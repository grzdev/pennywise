import { 
    Button, 
    Flex,
    useColorModeValue,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
} from '@chakra-ui/react'
import React from 'react'
import { AddIcon } from "@chakra-ui/icons"

const BudgetModal = () => {
  const bg = useColorModeValue("#437ecb","")
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Flex>
        <Button
            // size={["","","","lg"]}
            width={["5rem","5rem","6.5rem","9rem"]}
            height={["2rem","5rem","2.5rem","3rem"]}
            borderRadius="1rem 0 1rem 0"
            bg={bg}
            onClick={onOpen}
            _hover={{
              bg: "#4e93ec"
            }}
          >
            <AddIcon color="white" fontSize="1.2rem" fontWeight={900}/>
        </Button>
        <Modal 
            closeOnOverlayClick={false} 
            isOpen={isOpen} 
            onClose={onClose}
            isCentered
            size={["xs","xs","md","lg"]}
            blockScrollOnMount={false}
        >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Budget</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            {/* <Lorem count={2} /> */}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  )
}

export default BudgetModal