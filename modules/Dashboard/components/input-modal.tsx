import { 
    Flex,
    Button,
    useColorModeValue,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Text,
    Input,
    HStack,
    InputGroup,
    InputLeftElement,
} from '@chakra-ui/react'
import React from 'react'
import { AddIcon } from "@chakra-ui/icons"
import { IoFastFoodOutline, IoFastFoodSharp } from "react-icons/io5"
import { TbCurrency, TbCurrencyNaira } from 'react-icons/tb'

const InputModal = () => {
  const button = useColorModeValue("#4aafe9","#e3379b")
  const header = useColorModeValue("#2c4658","")
  const text = useColorModeValue("#0081e7","")

  const { isOpen, onOpen, onClose } = useDisclosure()
  

  return (
    <Flex>
        <Button
         size={["md","md","lg","lg"]}
         borderRadius="4rem 4rem 0 4rem"
         bg={button}
         _hover={{
         bg: "#61c5ff"
         }}
         onClick={onOpen}
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
          <ModalHeader>
            <Flex
                alignItems="center"
                justifyContent="center"
                mt={["1.5rem","1.5rem","1.5rem","2rem"]}
            >
                <Text 
                 fontSize={["1.3rem","1.3rem","1.7rem","2rem"]} 
                 color={header}
                 mr="0.1rem"
                >
                    <IoFastFoodSharp/>
                </Text>
                <Text 
                 fontSize={["1.3rem","1.3rem","1.7rem","2rem"]} 
                 fontWeight={700}
                 color={header}
                 >
                    Food
                </Text>
            </Flex>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody 
            pb={4}
            mt="2.5rem"
          >
            <Flex
                flexDir="column"
                justifyContent="center"
                alignItems="center"
                gap="1rem"
            >
                <HStack
                    gap="1rem"
                    // w={["","","","26rem"]}
                    // noOfLines={2}
                    justifyContent="center"
                    alignItems="center"
                >
                    <Button
                        colorScheme="blue"
                        borderRadius="full"
                        size={["sm","sm","md","md"]}
                    >
                       <TbCurrencyNaira/> 1,000
                    </Button>
                    <Button
                        size={["sm","sm","md","md"]}
                        colorScheme="blue"
                        borderRadius="full"
                    >
                       <TbCurrencyNaira/> 2,000
                    </Button>
                    <Button
                        size={["sm","sm","md","md"]}
                        colorScheme="blue"
                        borderRadius="full"
                    >
                       <TbCurrencyNaira/> 3,000
                    </Button>
                </HStack>
                <HStack>
                    <Button
                        size={["sm","sm","md","md"]}
                        colorScheme="blue"
                        borderRadius="full"
                    >
                       <TbCurrencyNaira/> 5,000
                    </Button>
                    <Button
                        size={["sm","sm","md","md"]}
                        colorScheme="blue"
                        borderRadius="full"
                    >
                       <TbCurrencyNaira/> 10,000
                    </Button>
                </HStack>
                <Flex
                    mt={["","","1rem","1rem"]}
                    flexDir="column"
                >
                    <Text
                        color={text}
                    >
                        Different amount?
                    </Text>
                    <InputGroup>
                        <InputLeftElement
                        pointerEvents='none'
                        // eslint-disable-next-line react/no-children-prop
                        children={<TbCurrencyNaira color='#0aba00' fontSize="1.3rem" />}
                        mt={["0.2rem","0.2rem","0.2rem","0.3rem"]}
                        />
                        <Input
                            mt={["0.2rem","0.2rem","0.3rem","0.3rem"]}
                            htmlSize={5} 
                            width="8rem"
                            type='number'
                            variant="filled"
                        />
                    </InputGroup>
                </Flex>
            </Flex>
          </ModalBody>

          <ModalFooter
            mt="2.5rem"
          >
            <Text 
                fontWeight={600}
                fontSize="0.8rem"
                mr={["8.4rem","8.4rem","15.6rem","19rem"]}
                color={header}
            >
                Step 1 of 5
            </Text>
            <Button 
                colorScheme='blue'
                borderRadius="full" mr={3}
                size={["sm","sm","md","md"]}
            >
              Next
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  )
}

export default InputModal