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
import React, { useState } from 'react'
import { AddIcon, ChevronLeftIcon } from "@chakra-ui/icons"
import { IoBusOutline, IoFastFoodOutline, IoFastFoodSharp, IoWifi } from "react-icons/io5"
import { TbCurrency, TbCurrencyNaira } from 'react-icons/tb'
import { useAppSelector, useAppDispatch } from 'redux/hooks';
import { addInput } from 'redux/slices/dailyInputSlice'
import { BiDotsHorizontalRounded, BiTransferAlt } from 'react-icons/bi'


const InputModal = () => {
  const button = useColorModeValue("#4F89E8","#4F89E8")
  const header = useColorModeValue("#2c4658","")
  const text = useColorModeValue("#0081e7","")

  const modal1 = useDisclosure()
  const modal2 = useDisclosure()
  const modal3 = useDisclosure()
  const modal4 = useDisclosure()
  const modal5 = useDisclosure()

  const dispatch = useAppDispatch()
  

  const [dailyNameInput, setDailyNameInput] = useState(0)

   const handleAddInput = () => {
    if(!dailyNameInput)return
    dispatch(addInput(dailyNameInput))
    setDailyNameInput(0)
    modal1.onClose()
    modal2.onClose()
    modal3.onClose()
    modal4.onClose()
    modal5.onClose()
  }
  

  return (
    <Flex>
        <Button
         size={["md","md","lg","lg"]}
         borderRadius="1rem 0 1rem 0"
         bg={button}
         _hover={{
         bg: "#61c5ff"
         }}
         onClick={modal1.onOpen}
        >
         <AddIcon color="white" fontSize="1.2rem" fontWeight={900}/>
        </Button>
        
        {/* Food Modal */}
        <Modal 
         closeOnOverlayClick={false} 
         isOpen={modal1.isOpen}
         onClose={modal1.onClose}
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
                 mt={["0.2rem","0.2rem","0.2rem","0.3rem"]}
                 fontSize={["1.3rem","1.3rem","1.7rem","2rem"]} 
                 color={header}
                 mr="0.1rem"
                >
                    <IoFastFoodSharp/>
                </Text>
                <Text 
                 fontSize={["1.7rem","1.7rem","2rem","2.4rem"]} 
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
                    gap={["0.5rem","0.6rem","1rem","1rem"]}
                    // w={["","","","26rem"]}
                    // noOfLines={2}
                    // justifyContent="center"
                    // alignItems="center"
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
                <HStack
                    gap={["0.5rem","0.6rem","1rem","1rem"]}
                >
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
                        value={10000}
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
                        mt={["0.25rem","0.25rem","0.25rem","0.35rem"]}
                        />
                        <Input
                            mt={["0.2rem","0.2rem","0.3rem","0.3rem"]}
                            htmlSize={5} 
                            width="8rem"
                            type='number'
                            variant="filled"
                            placeholder='Amount'
                            // value={dailyNameInput}
                            onChange={(e)=> setDailyNameInput(e.target.valueAsNumber)}
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
                mr={["6.4rem","8.4rem","13.6rem","17rem"]}
                color={header}
            >
                Category 1 of 5
            </Text>
            <Button 
                colorScheme='blue'
                borderRadius="full" mr={3}
                size={["sm","sm","md","md"]}
                onClick={modal2.onOpen}
            >
              Next
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      
         {/* Transit Modal */}
      <Modal 
         closeOnOverlayClick={false} 
         isOpen={modal2.isOpen}
         onClose={modal2.onClose}
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
                 mt={["0.2rem","0.2rem","0.2rem","0.3rem"]}
                 fontSize={["1.3rem","1.3rem","1.7rem","2rem"]} 
                 color={header}
                 mr="0.1rem"
                >
                    <IoBusOutline/>
                </Text>
                <Text 
                 fontSize={["1.7rem","1.7rem","2rem","2.4rem"]} 
                 fontWeight={700}
                 color={header}
                 >
                    Transit 
                </Text>
            </Flex>
          </ModalHeader>
          <ModalCloseButton>
            <Text
                fontSize={["1.6rem","1-.6rem","1.8rem","2rem"]}
            >
                <ChevronLeftIcon/>
            </Text>
          </ModalCloseButton>
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
                    gap={["0.5rem","0.6rem","1rem","1rem"]}
                    // w={["","","","26rem"]}
                    // noOfLines={2}
                    // justifyContent="center"
                    // alignItems="center"
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
                <HStack
                    gap={["0.5rem","0.6rem","1rem","1rem"]}
                >
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
                        mt={["0.25rem","0.25rem","0.25rem","0.35rem"]}
                        />
                        <Input
                            mt={["0.2rem","0.2rem","0.3rem","0.3rem"]}
                            htmlSize={5} 
                            width="8rem"
                            type='number'
                            variant="filled"
                            placeholder='Amount'
                            // value={dailyNameInput}
                            onChange={(e)=> setDailyNameInput(e.target.valueAsNumber)}
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
                mr={["6.4rem","8.4rem","13.6rem","17rem"]}
                color={header}
            >
                Category 2 of 5
            </Text>
            <Button 
                colorScheme='blue'
                borderRadius="full" mr={3}
                size={["sm","sm","md","md"]}
                onClick={modal3.onOpen}
            >
              Next
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

         {/* Data Modal */}
      <Modal 
         closeOnOverlayClick={false} 
         isOpen={modal3.isOpen}
         onClose={modal3.onClose}
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
                 mt={["0.2rem","0.2rem","0.2rem","0.3rem"]}
                 fontSize={["1.3rem","1.3rem","1.7rem","2rem"]} 
                 color={header}
                 mr="0.1rem"
                >
                   <IoWifi/>
                </Text>
                <Text 
                 fontSize={["1.7rem","1.7rem","2rem","2.4rem"]} 
                 fontWeight={700}
                 color={header}
                 >
                    Data 
                </Text>
            </Flex>
          </ModalHeader>
          <ModalCloseButton>
            <Text
                fontSize={["1.6rem","1-.6rem","1.8rem","2rem"]}
            >
                <ChevronLeftIcon/>
            </Text>
          </ModalCloseButton>
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
                    gap={["0.5rem","0.6rem","1rem","1rem"]}
                    // w={["","","","26rem"]}
                    // noOfLines={2}
                    // justifyContent="center"
                    // alignItems="center"
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
                <HStack
                    gap={["0.5rem","0.6rem","1rem","1rem"]}
                >
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
                        mt={["0.25rem","0.25rem","0.25rem","0.35rem"]}
                        />
                        <Input
                            mt={["0.2rem","0.2rem","0.3rem","0.3rem"]}
                            htmlSize={5} 
                            width="8rem"
                            type='number'
                            variant="filled"
                            placeholder='Amount'
                            // value={dailyNameInput}
                            onChange={(e)=> setDailyNameInput(e.target.valueAsNumber)}
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
                mr={["6.4rem","8.4rem","13.6rem","17rem"]}
                color={header}
            >
                Category 3 of 5
            </Text>
            <Button 
                colorScheme='blue'
                borderRadius="full" mr={3}
                size={["sm","sm","md","md"]}
                onClick={modal4.onOpen}
            >
              Next
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

          {/* Transfer Modal */}
      <Modal 
         closeOnOverlayClick={false} 
         isOpen={modal4.isOpen}
         onClose={modal4.onClose}
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
                 mt={["0.2rem","0.2rem","0.2rem","0.3rem"]}
                 fontSize={["1.3rem","1.3rem","1.7rem","2rem"]} 
                 color={header}
                 mr="0.1rem"
                >
                   <BiTransferAlt/>
                </Text>
                <Text 
                 fontSize={["1.7rem","1.7rem","2rem","2.4rem"]} 
                 fontWeight={700}
                 color={header}
                 >
                    Transfers 
                </Text>
            </Flex>
          </ModalHeader>
          <ModalCloseButton>
            <Text
                fontSize={["1.6rem","1-.6rem","1.8rem","2rem"]}
            >
                <ChevronLeftIcon/>
            </Text>
          </ModalCloseButton>
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
                    gap={["0.5rem","0.6rem","1rem","1rem"]}
                    // w={["","","","26rem"]}
                    // noOfLines={2}
                    // justifyContent="center"
                    // alignItems="center"
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
                <HStack
                    gap={["0.5rem","0.6rem","1rem","1rem"]}
                >
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
                        mt={["0.25rem","0.25rem","0.25rem","0.35rem"]}
                        />
                        <Input
                            mt={["0.2rem","0.2rem","0.3rem","0.3rem"]}
                            htmlSize={5} 
                            width="8rem"
                            type='number'
                            variant="filled"
                            placeholder='Amount'
                            // value={dailyNameInput}
                            onChange={(e)=> setDailyNameInput(e.target.valueAsNumber)}
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
                mr={["6.4rem","8.4rem","13.6rem","17rem"]}
                color={header}
            >
                Category 4 of 5
            </Text>
            <Button 
                colorScheme='blue'
                borderRadius="full" mr={3}
                size={["sm","sm","md","md"]}
                onClick={modal5.onOpen}
            >
              Next
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

         {/* Transfer Modal */}
      <Modal 
         closeOnOverlayClick={false} 
         isOpen={modal5.isOpen}
         onClose={modal5.onClose}
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
                 mt={["0.2rem","0.2rem","0.2rem","0.3rem"]}
                 fontSize={["1.3rem","1.3rem","1.7rem","2rem"]} 
                 color={header}
                 mr="0.1rem"
                >
                   <BiDotsHorizontalRounded/>
                </Text>
                <Text 
                 fontSize={["1.7rem","1.7rem","2rem","2.4rem"]} 
                 fontWeight={700}
                 color={header}
                 >
                    Others 
                </Text>
            </Flex>
          </ModalHeader>
          <ModalCloseButton>
            <Text
                fontSize={["1.6rem","1-.6rem","1.8rem","2rem"]}
            >
                <ChevronLeftIcon/>
            </Text>
          </ModalCloseButton>
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
                    gap={["0.5rem","0.6rem","1rem","1rem"]}
                    // w={["","","","26rem"]}
                    // noOfLines={2}
                    // justifyContent="center"
                    // alignItems="center"
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
                <HStack
                    gap={["0.5rem","0.6rem","1rem","1rem"]}
                >
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
                        mt={["0.25rem","0.25rem","0.25rem","0.35rem"]}
                        />
                        <Input
                            mt={["0.2rem","0.2rem","0.3rem","0.3rem"]}
                            htmlSize={5} 
                            width="8rem"
                            type='number'
                            variant="filled"
                            placeholder='Amount'
                            // value={dailyNameInput}
                            onChange={(e)=> setDailyNameInput(e.target.valueAsNumber)}
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
                mr={["6.4rem","8.4rem","13.6rem","17rem"]}
                color={header}
            >
                Category 5 of 5
            </Text>
            <Button 
                colorScheme='blue'
                borderRadius="full" mr={3}
                size={["sm","sm","md","md"]}
                onClick={handleAddInput}
            >
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    </Flex>
  )
}

export default InputModal