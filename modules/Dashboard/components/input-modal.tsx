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
    useToast,
    Box,
    Icon
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { AddIcon, CheckCircleIcon, ChevronLeftIcon } from "@chakra-ui/icons"
import { IoBusOutline, IoFastFoodOutline, IoFastFoodSharp, IoWifi } from "react-icons/io5"
import { TbCurrency, TbCurrencyNaira } from 'react-icons/tb'
import { BiDotsHorizontalRounded, BiTransferAlt } from 'react-icons/bi'
import { parse } from 'path'
import { render } from 'react-dom'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/store'
import { setNumberAtIndex } from 'redux/slices/dailyInputSlice'


const InputModal = () => {
  const button = useColorModeValue("#4F89E8","#4F89E8")
  const header = useColorModeValue("#2c4658","")
  const text = useColorModeValue("#0081e7","")

  const modal1 = useDisclosure()
  const modal2 = useDisclosure()
  const modal3 = useDisclosure()
  const modal4 = useDisclosure()
  const modal5 = useDisclosure()

  const toast = useToast()

  
  
  //onChange Function
  const [food, setFood] = useState<number>(0);
  const [transit, setTransit] = useState<number>(0);
  const [data, setData] = useState<number>(0);
  const [transfers, setTransfers] = useState<number>(0);
  const [others, setOthers] = useState<number>(0);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const parsedValue = parseInt(value, 10); // convert input value to number

    if (name === "food") {
      setFood(parsedValue);
    } else if (name === "data") {
      setData(parsedValue);
    } else if (name === "transit") {
      setTransit(parsedValue);
    } else if (name === "transfers") {
      setTransfers(parsedValue);
    } else if (name === "others") {
      setOthers(parsedValue);
    }
  };

  // Onchange trial 2
  const dispatch = useDispatch();
  const numbers = useSelector((state: RootState) => state.numbers.numbers);

  const handleNumberChange = (index: number, value: number) => {
    dispatch(setNumberAtIndex({ index, value }));
  };
  console.log(numbers[0])

  //Funtional modal buttons
  //add 1k
  const handleAdd1kFood = () => {
    const newValue = numbers[0] + 1000;
    setFood(newValue);
    modal2.onOpen()
  };
  const handleAdd1kTransit = () => {
    const newValue = transit + 1000;
    setTransit(newValue);
    modal3.onOpen()
  };
  const handleAdd1kData = () => {
    const newValue = data + 1000;
    setData(newValue);
    modal4.onOpen()
  };
  const handleAdd1kTransfers = () => {
    const newValue = transfers + 1000;
    setTransfers(newValue);
    modal5.onOpen()
  };
  const handleAdd1kOthers = () => {
    const newValue = others + 1000;
    setOthers(newValue);
    handleAddInput()
  };

   //add 2k
   const handleAdd2kFood = () => {
    const newValue = food + 2000;
    setFood(newValue);
    modal2.onOpen()
  };
  const handleAdd2kTransit = () => {
    const newValue = transit + 2000;
    setTransit(newValue);
    modal3.onOpen()
  };
  const handleAdd2kData = () => {
    const newValue = data + 2000;
    setData(newValue);
    modal4.onOpen()
  };
  const handleAdd2kTransfers = () => {
    const newValue = transfers + 2000;
    setTransfers(newValue);
    modal5.onOpen()
  };
  const handleAdd2kOthers = () => {
    const newValue = others + 2000;
    setOthers(newValue);
    handleAddInput()
  };

  //add 3k
  const handleAdd3kFood = () => {
    const newValue = food + 3000;
    setFood(newValue);
    modal2.onOpen()
  };
  const handleAdd3kTransit = () => {
    const newValue = transit + 3000;
    setTransit(newValue);
    modal3.onOpen()
  };
  const handleAdd3kData = () => {
    const newValue = data + 3000;
    setData(newValue);
    modal4.onOpen()
  };
  const handleAdd3kTransfers = () => {
    const newValue = transfers + 3000;
    setTransfers(newValue);
    modal5.onOpen()
  };
  const handleAdd3kOthers = () => {
    const newValue = others + 3000;
    setOthers(newValue);
    handleAddInput()
  };

  //add 5k
  const handleAdd5kFood = () => {
    const newValue = food + 5000;
    setFood(newValue);
    modal2.onOpen()
  };
  const handleAdd5kTransit = () => {
    const newValue = transit + 5000;
    setTransit(newValue);
    modal3.onOpen()
  };
  const handleAdd5kData = () => {
    const newValue = data + 5000;
    setData(newValue);
    modal4.onOpen()
  };
  const handleAdd5kTransfers = () => {
    const newValue = transfers + 5000;
    setTransfers(newValue);
    modal5.onOpen()
  };
  const handleAdd5kOthers = () => {
    const newValue = others + 5000;
    setOthers(newValue);
    handleAddInput()
  };

  //add 10k
  const handleAdd10kFood = () => {
    const newValue = food + 10000;
    setFood(newValue);
    modal2.onOpen()
  };
  const handleAdd10kTransit = () => {
    const newValue = transit + 10000;
    setTransit(newValue);
    modal3.onOpen()
  };
  const handleAdd10kData = () => {
    const newValue = data + 10000;
    setData(newValue);
    modal4.onOpen()
  };
  const handleAdd10kTransfers = () => {
    const newValue = transfers + 10000;
    setTransfers(newValue);
    modal5.onOpen()
  };
  const handleAdd10kOthers = () => {
    const newValue = others + 10000;
    setOthers(newValue);
    handleAddInput()
  };

  //Sum of all input
  const Sum = food + transit + data + transfers + others


  //Modal Save
   const handleAddInput = () => {
    modal1.onClose()
    modal2.onClose()
    modal3.onClose()
    modal4.onClose()
    modal5.onClose()
    toast({
        position: 'bottom',
        
        render: () =>(
            <Flex
                justifyContent="center"
                alignItems="center" 
            >
                <Button
                    borderRadius="1rem 0 1rem 0"
                    w={["8rem","8rem","9rem","10rem"]}
                    h={["3rem","3rem","3rem","3rem"]}
                    colorScheme="blue"
                    leftIcon={<CheckCircleIcon/>}
                >
                    Done
                </Button>
            </Flex>
        )
    })
   
  }
  
  //Modal button 
  

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
                <Flex
                    flexDir="column"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Text 
                    mt={["-0.05rem","-0.05rem","0.2rem","0.3rem"]}
                    fontSize={["1.3rem","1.3rem","1.7rem","2rem"]} 
                    color={header}
                    mr="0.1rem"
                    >
                        <IoFastFoodSharp/>
                    </Text>
                    <Text 
                    fontSize={["1.9rem","1.9rem","2.2rem","2.6rem"]} 
                    fontWeight={700}
                    color={header}
                    >
                        Food
                    </Text>
                </Flex>
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
                        onClick={handleAdd1kFood}
                    >
                       <TbCurrencyNaira/> 1,000
                    </Button>
                    <Button
                        size={["sm","sm","md","md"]}
                        colorScheme="blue"
                        borderRadius="full"
                        onClick={handleAdd2kFood}
                    >
                       <TbCurrencyNaira/> 2,000
                    </Button>
                    <Button
                        size={["sm","sm","md","md"]}
                        colorScheme="blue"
                        borderRadius="full"
                        onClick={handleAdd3kFood}
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
                        onClick={handleAdd5kFood}
                    >
                       <TbCurrencyNaira/> 5,000
                    </Button>
                    <Button
                        size={["sm","sm","md","md"]}
                        colorScheme="blue"
                        borderRadius="full"
                        onClick={handleAdd10kFood}
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
                            value={numbers[0]}
                            onChange={(e) => handleNumberChange(0, parseInt(e.target.value))}
                            name="food"
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
                mr={["10rem","10rem","16.6rem","20rem"]}
                color={header}
            >
             1 of 5
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
                <Flex
                    flexDir="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Text 
                    mt={["-0.09rem","-0.05rem","0.2rem","0.3rem"]}
                    fontSize={["1.3rem","1.3rem","1.7rem","2rem"]} 
                    color={header}
                    mr="0.1rem"
                    >
                        <IoBusOutline/>
                    </Text>
                    <Text 
                    fontSize={["1.9rem","1.9rem","2.2rem","2.6rem"]}
                    fontWeight={700}
                    color={header}
                    >
                        Transit 
                    </Text>
                </Flex>
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
                        onClick={handleAdd1kTransit}
                    >
                       <TbCurrencyNaira/> 1,000
                    </Button>
                    <Button
                        size={["sm","sm","md","md"]}
                        colorScheme="blue"
                        borderRadius="full"
                        onClick={handleAdd2kTransit}
                    >
                       <TbCurrencyNaira/> 2,000
                    </Button>
                    <Button
                        size={["sm","sm","md","md"]}
                        colorScheme="blue"
                        borderRadius="full"
                        onClick={handleAdd3kTransit}
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
                        onClick={handleAdd5kTransit}
                    >
                       <TbCurrencyNaira/> 5,000
                    </Button>
                    <Button
                        size={["sm","sm","md","md"]}
                        colorScheme="blue"
                        borderRadius="full"
                        onClick={handleAdd10kTransit}
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
                            name='transit'
                            value={numbers[1]}
                            onChange={(e) => handleNumberChange(1, parseInt(e.target.value))}
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
                mr={["10rem","10rem","16.6rem","20rem"]}
                color={header}
            >
             2 of 5
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
                <Flex
                    flexDir="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Text 
                    mt={["-0.05rem","-0.05rem","0.2rem","0.3rem"]}
                    fontSize={["1.3rem","1.3rem","1.7rem","2rem"]} 
                    color={header}
                    mr="0.1rem"
                    >
                    <IoWifi/>
                    </Text>
                    <Text 
                    fontSize={["1.9rem","1.9rem","2.2rem","2.6rem"]}
                    fontWeight={700}
                    color={header}
                    >
                        Data 
                    </Text>
                </Flex>
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
                        onClick={handleAdd1kData}
                    >
                       <TbCurrencyNaira/> 1,000
                    </Button>
                    <Button
                        size={["sm","sm","md","md"]}
                        colorScheme="blue"
                        borderRadius="full"
                        onClick={handleAdd2kData}
                    >
                       <TbCurrencyNaira/> 2,000
                    </Button>
                    <Button
                        size={["sm","sm","md","md"]}
                        colorScheme="blue"
                        borderRadius="full"
                        onClick={handleAdd3kData}
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
                        onClick={handleAdd5kData}
                    >
                       <TbCurrencyNaira/> 5,000
                    </Button>
                    <Button
                        size={["sm","sm","md","md"]}
                        colorScheme="blue"
                        borderRadius="full"
                        onClick={handleAdd10kData}
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
                            name='data'
                            value={numbers[2]}
                            onChange={(e) => handleNumberChange(2, parseInt(e.target.value))}
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
                mr={["10rem","10rem","16.6rem","20rem"]}
                color={header}
            >
             3 of 5
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

          {/* Transfers Modal */}
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
                <Flex
                    flexDir="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Text 
                    mt={["-0.05rem","-0.05rem","0.2rem","0.3rem"]}
                    fontSize={["1.3rem","1.3rem","1.7rem","2rem"]} 
                    color={header}
                    mr="0.1rem"
                    >
                    <BiTransferAlt/>
                    </Text>
                    <Text 
                    fontSize={["1.9rem","1.9rem","2.2rem","2.6rem"]} 
                    fontWeight={700}
                    color={header}
                    >
                        Transfers 
                    </Text>
                </Flex>
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
                        onClick={handleAdd1kTransfers}
                    >
                       <TbCurrencyNaira/> 1,000
                    </Button>
                    <Button
                        size={["sm","sm","md","md"]}
                        colorScheme="blue"
                        borderRadius="full"
                        onClick={handleAdd2kTransfers}
                    >
                       <TbCurrencyNaira/> 2,000
                    </Button>
                    <Button
                        size={["sm","sm","md","md"]}
                        colorScheme="blue"
                        borderRadius="full"
                        onClick={handleAdd3kTransfers}
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
                        onClick={handleAdd5kTransfers}
                    >
                       <TbCurrencyNaira/> 5,000
                    </Button>
                    <Button
                        size={["sm","sm","md","md"]}
                        colorScheme="blue"
                        borderRadius="full"
                        onClick={handleAdd10kTransfers}
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
                            name='transfers'
                            value={numbers[3]}
                            onChange={(e) => handleNumberChange(3, parseInt(e.target.value))}
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
                mr={["10rem","10rem","16.6rem","20rem"]}
                color={header}
            >
             4 of 5
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
                <Flex
                    flexDir="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Text 
                    mt={["-0.05rem","-0.05rem","0.2rem","0.3rem"]}
                    fontSize={["1.3rem","1.3rem","1.7rem","2rem"]} 
                    color={header}
                    mr="0.1rem"
                    >
                    <BiDotsHorizontalRounded/>
                    </Text>
                    <Text 
                    fontSize={["1.9rem","1.9rem","2.2rem","2.6rem"]} 
                    fontWeight={700}
                    color={header}
                    >
                        Others 
                    </Text>
                </Flex>
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
                        onClick={handleAdd1kOthers}
                    >
                       <TbCurrencyNaira/> 1,000
                    </Button>
                    <Button
                        size={["sm","sm","md","md"]}
                        colorScheme="blue"
                        borderRadius="full"
                        onClick={handleAdd2kOthers}
                    >
                       <TbCurrencyNaira/> 2,000
                    </Button>
                    <Button
                        size={["sm","sm","md","md"]}
                        colorScheme="blue"
                        borderRadius="full"
                        onClick={handleAdd3kOthers}
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
                        onClick={handleAdd5kOthers}
                    >
                       <TbCurrencyNaira/> 5,000
                    </Button>
                    <Button
                        size={["sm","sm","md","md"]}
                        colorScheme="blue"
                        borderRadius="full"
                        onClick={handleAdd10kOthers}
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
                            name="others"
                            value={numbers[4]}
                            onChange={(e) => handleNumberChange(4, parseInt(e.target.value))}
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
                mr={["10rem","10rem","16.6rem","20rem"]}
                color={header}
            >
             5 of 5
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