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
    Icon,
    Popover,
    PopoverTrigger,
    PopoverArrow,
    PopoverContent,
    PopoverCloseButton,
    PopoverHeader,
    PopoverBody
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
import { add10k, add1k, add2k, add3k, add5k, MyObject, onChange, selectMyObject } from 'redux/slices/dailyInputSlice'
import { RiInformationLine } from 'react-icons/ri'
import { BsInfo } from 'react-icons/bs'
import { createSelector } from '@reduxjs/toolkit'
import { motion } from 'framer-motion'


const InputModal = () => {
  const button = useColorModeValue("linear-gradient(to right, #acb6e5, #86fde8);","linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)")
  const header = useColorModeValue("#2c4658","")
  const text = useColorModeValue("#0081e7","")
  const addIcon = useColorModeValue("#172A63","")
// background-image: linear-gradient(19deg, #21D4FD 0%, #B721FF 100%);


  const modal1 = useDisclosure()
  const modal2 = useDisclosure()
  const modal3 = useDisclosure()
  const modal4 = useDisclosure()
  const modal5 = useDisclosure()

  const toast = useToast()

  

  // Onchange trial 2
  const dispatch = useDispatch();
  const myObject = useSelector(selectMyObject);
  
  const handleNumberChange = (name: keyof MyObject, value: number) => {
    dispatch(onChange({ name, value }));
  }


  // const [food, setFood] = useState<number>(0);
  // const [transit, setTransit] = useState<number>(0);
  // const [data, setData] = useState<number>(0);
  // const [transfers, setTransfers] = useState<number>(0);
  // const [others, setOthers] = useState<number>(0);

  //Funtional modal buttons
  //add 1k
  const handleAdd1kFood = (name: keyof MyObject, value: number) => {
    dispatch(add1k({ name : "food", value })),
    modal2.onOpen()
  };
  const handleAdd1kTransit = (name: keyof MyObject, value: number) => {
    dispatch(add1k({ name : "transit", value })),
    modal3.onOpen()
  };
  const handleAdd1kData = (name: keyof MyObject, value: number) => {
    dispatch(add1k({ name : "data", value })),
    modal4.onOpen()
  };
  const handleAdd1kTransfers = (name: keyof MyObject, value: number) => {
    dispatch(add1k({ name : "transfers", value })),
    modal5.onOpen()
  };
  const handleAdd1kOthers = (name: keyof MyObject, value: number) => {
    dispatch(add1k({ name : "others", value })),
    handleAddInput()
  };

   //add 2k
   const handleAdd2kFood = (name: keyof MyObject, value: number) => {
    dispatch(add2k({ name : "food", value })),
    modal2.onOpen()
  };
  const handleAdd2kTransit = (name: keyof MyObject, value: number) => {
    dispatch(add2k({ name : "transit", value })),
    modal3.onOpen()
  };
  const handleAdd2kData = (name: keyof MyObject, value: number) => {
    dispatch(add2k({ name : "data", value })),
    modal4.onOpen()
  };
  const handleAdd2kTransfers = (name: keyof MyObject, value: number) => {
    dispatch(add2k({ name : "transfers", value })),
    modal5.onOpen()
  };
  const handleAdd2kOthers = (name: keyof MyObject, value: number) => {
    dispatch(add2k({ name : "others", value })),
    handleAddInput()
  };

  //add 3k
  const handleAdd3kFood = (name: keyof MyObject, value: number) => {
    dispatch(add3k({ name : "food", value })),
    modal2.onOpen()
  };
  const handleAdd3kTransit =(name: keyof MyObject, value: number) => {
    dispatch(add3k({ name : "transit", value })),
    modal3.onOpen()
  };
  const handleAdd3kData = (name: keyof MyObject, value: number) => {
    dispatch(add3k({ name : "data", value })),
    modal4.onOpen()
  };
  const handleAdd3kTransfers = (name: keyof MyObject, value: number) => {
    dispatch(add3k({ name : "transfers", value })),
    modal5.onOpen()
  };
  const handleAdd3kOthers = (name: keyof MyObject, value: number) => {
    dispatch(add3k({ name : "others", value })),
    handleAddInput()
  };

  //add 5k
  const handleAdd5kFood = (name: keyof MyObject, value: number) => {
    dispatch(add5k({ name : "food", value })),
    modal2.onOpen()
  };
  const handleAdd5kTransit = (name: keyof MyObject, value: number) => {
    dispatch(add5k({ name : "transit", value })),
    modal3.onOpen()
  };
  const handleAdd5kData = (name: keyof MyObject, value: number) => {
    dispatch(add5k({ name : "data", value })),
    modal4.onOpen()
  };
  const handleAdd5kTransfers = (name: keyof MyObject, value: number) => {
    dispatch(add5k({ name : "transfers", value })),
    modal5.onOpen()
  };
  const handleAdd5kOthers = (name: keyof MyObject, value: number) => {
    dispatch(add5k({ name : "others", value })),
    handleAddInput()
  };

  //add 10k
  const handleAdd10kFood = (name: keyof MyObject, value: number) => {
    dispatch(add10k({ name : "food", value })),
    modal2.onOpen()
  };
  const handleAdd10kTransit = (name: keyof MyObject, value: number) => {
    dispatch(add10k({ name : "transit", value })),
    modal3.onOpen()
  };
  const handleAdd10kData = (name: keyof MyObject, value: number) => {
    dispatch(add10k({ name : "data", value })),
    modal4.onOpen()
  };
  const handleAdd10kTransfers = (name: keyof MyObject, value: number) => {
    dispatch(add10k({ name : "transfers", value })),
    modal5.onOpen()
  };
  const handleAdd10kOthers = (name: keyof MyObject, value: number) => {
    dispatch(add10k({ name : "others", value })),
    handleAddInput()
  };

  //Sum of all input
  // const Sum = food + transit + data + transfers + others


  //Modal Save
  const [isFormComplete, setIsFormComplete] = useState(false);

   const handleAddInput = () => {
    modal1.onClose()
    modal2.onClose()
    modal3.onClose()
    modal4.onClose()
    modal5.onClose()
    setIsFormComplete(true);
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
      <motion.div
        whileInView={{ y: 0, opacity: 1}}
        initial={{ y: 100, opacity: 0 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
      >
        <Button
        //  size={["md","md","lg","lg"]}
        w={["4rem","5rem","6rem","7rem"]}
        h={["2.8rem","2.8rem","3.2rem","3.8rem"]}
         borderRadius="1rem 0 1rem 0"
         bg={button}
         _hover={{
         bg: "#171923"
         }}
         onClick={modal1.onOpen}
        >
          <Text
            color={addIcon} 
            fontSize={["1.1rem","1.1rem","1.3rem","1.4rem"]}
            fontWeight={900}
          >
            <AddIcon/>
          </Text>

        </Button>
      </motion.div>
        
        {/* Food Modal */}
        <Modal 
         closeOnOverlayClick={false} 
         isOpen={modal1.isOpen}
         onClose={modal1.onClose}
         isCentered
         size={["xs","xs","md","lg"]}
         blockScrollOnMount={true}
        >
        <ModalOverlay />
        <ModalContent>
        <Flex
            p={1.5}
          >
            <Popover>
              <PopoverTrigger>
                <Button
                  variant="ghost"
                >
                  <Text
                    fontSize={["1.2rem","1.2rem","1.3rem","1.5rem"]}
                  >
                   <RiInformationLine/>
                  </Text>
                </Button>
              </PopoverTrigger>
              <PopoverContent color='white' bg='blue.800' borderColor='blue.800'>
                <PopoverHeader pt={4} fontWeight='bold' border='0'>
                  Hey there.
                </PopoverHeader>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody
                  mb="2rem"
                >
                  Please try to add the exact amount of money spent to get an accurate result.
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Flex>
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
                    mt="-2rem"
                    // w={["","","","26rem"]}
                    // noOfLines={2}
                    // justifyContent="center"
                    // alignItems="center"
                >
                    <Button
                        colorScheme="blue"
                        borderRadius="full"
                        size={["sm","sm","md","md"]}
                        value={myObject.food}
                        onClick={()=> handleAdd1kFood("food", myObject.food)}
                    >
                       <TbCurrencyNaira/> 1,000
                    </Button>
                    <Button
                        size={["sm","sm","md","md"]}
                        colorScheme="blue"
                        borderRadius="full"
                        value={myObject.food}
                        onClick={()=> handleAdd2kFood("food", myObject.food)}
                    >
                       <TbCurrencyNaira/> 2,000
                    </Button>
                    <Button
                        size={["sm","sm","md","md"]}
                        colorScheme="blue"
                        borderRadius="full"
                        value={myObject.food}
                        onClick={()=> handleAdd3kFood("food", myObject.food)}
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
                        value={myObject.food}
                        onClick={()=> handleAdd5kFood("food", myObject.food)}
                        
                    >
                       <TbCurrencyNaira/> 5,000
                    </Button>
                    <Button
                        size={["sm","sm","md","md"]}
                        colorScheme="blue"
                        borderRadius="full"
                        value={myObject.food}
                        onClick={()=> handleAdd10kFood("food", myObject.food)}
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
                            value={myObject.food}
                            onChange={(e) => handleNumberChange('food', parseInt(e.target.value, 10))}
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
        <Flex
            p={1.5}
          >
            <Popover>
              <PopoverTrigger>
                <Button
                  variant="ghost"
                >
                  <Text
                    fontSize={["1.2rem","1.2rem","1.3rem","1.5rem"]}
                  >
                   <RiInformationLine/>
                  </Text>
                </Button>
              </PopoverTrigger>
              <PopoverContent color='white' bg='blue.800' borderColor='blue.800'>
                <PopoverHeader pt={4} fontWeight='bold' border='0'>
                  Hey there.
                </PopoverHeader>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody
                  mb="2rem"
                >
                  Please try to add the exact amount of money spent to get an accurate result.
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Flex>
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
                    mt="-2rem"
                >
                    <Button
                        colorScheme="blue"
                        borderRadius="full"
                        size={["sm","sm","md","md"]}
                        value={myObject.transit}
                        onClick={()=> handleAdd1kTransit("transit", myObject.transit)}
                    >
                       <TbCurrencyNaira/> 1,000
                    </Button>
                    <Button
                        size={["sm","sm","md","md"]}
                        colorScheme="blue"
                        borderRadius="full"
                        value={myObject.transit}
                        onClick={()=> handleAdd2kTransit("transit", myObject.transit)}
                    >
                       <TbCurrencyNaira/> 2,000
                    </Button>
                    <Button
                        size={["sm","sm","md","md"]}
                        colorScheme="blue"
                        borderRadius="full"
                        value={myObject.transit}
                        onClick={()=> handleAdd3kTransit("transit", myObject.transit)}
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
                        value={myObject.transit}
                        onClick={()=> handleAdd5kTransit("transit", myObject.transit)}
                    >
                       <TbCurrencyNaira/> 5,000
                    </Button>
                    <Button
                        size={["sm","sm","md","md"]}
                        colorScheme="blue"
                        borderRadius="full"
                        value={myObject.transit}
                        onClick={()=> handleAdd10kTransit("transit", myObject.transit)}
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
                            value={myObject.transit}
                            onChange={(e) => handleNumberChange('transit', parseInt(e.target.value, 10))}
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
        <Flex
            p={1.5}
          >
            <Popover>
              <PopoverTrigger>
                <Button
                  variant="ghost"
                >
                  <Text
                    fontSize={["1.2rem","1.2rem","1.3rem","1.5rem"]}
                  >
                   <RiInformationLine/>
                  </Text>
                </Button>
              </PopoverTrigger>
              <PopoverContent color='white' bg='blue.800' borderColor='blue.800'>
                <PopoverHeader pt={4} fontWeight='bold' border='0'>
                  Hey there.
                </PopoverHeader>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody
                  mb="2rem"
                >
                  Please try to add the exact amount of money spent to get an accurate result.
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Flex>
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
                    mt="-2rem"
                >
                    <Button
                        colorScheme="blue"
                        borderRadius="full"
                        size={["sm","sm","md","md"]}
                        value={myObject.data}
                        onClick={()=> handleAdd1kData("data", myObject.data)}
                    >
                       <TbCurrencyNaira/> 1,000
                    </Button>
                    <Button
                        size={["sm","sm","md","md"]}
                        colorScheme="blue"
                        borderRadius="full"
                        value={myObject.data}
                        onClick={()=> handleAdd2kData("data", myObject.data)}
                    >
                       <TbCurrencyNaira/> 2,000
                    </Button>
                    <Button
                        size={["sm","sm","md","md"]}
                        colorScheme="blue"
                        borderRadius="full"
                        value={myObject.data}
                        onClick={()=> handleAdd3kData("data", myObject.data)}
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
                        value={myObject.data}
                        onClick={()=> handleAdd5kData("data", myObject.data)}
                    >
                       <TbCurrencyNaira/> 5,000
                    </Button>
                    <Button
                        size={["sm","sm","md","md"]}
                        colorScheme="blue"
                        borderRadius="full"
                        value={myObject.data}
                        onClick={()=> handleAdd10kData("data", myObject.data)}
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
                            value={myObject.data}
                            onChange={(e) => handleNumberChange('data', parseInt(e.target.value, 10))}
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
        <Flex
            p={1.5}
          >
            <Popover>
              <PopoverTrigger>
                <Button
                  variant="ghost"
                >
                  <Text
                    fontSize={["1.2rem","1.2rem","1.3rem","1.5rem"]}
                  >
                   <RiInformationLine/>
                  </Text>
                </Button>
              </PopoverTrigger>
              <PopoverContent color='white' bg='blue.800' borderColor='blue.800'>
                <PopoverHeader pt={4} fontWeight='bold' border='0'>
                  Hey there.
                </PopoverHeader>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody
                  mb="2rem"
                >
                  Please try to add the exact amount of money spent to get an accurate result.
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Flex>
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
                    // alignItems="center
                    mt="-2rem"
                >
                    <Button
                        colorScheme="blue"
                        borderRadius="full"
                        size={["sm","sm","md","md"]}
                        value={myObject.transfers}
                        onClick={()=> handleAdd1kTransfers("transfers", myObject.transfers)}
                    >
                       <TbCurrencyNaira/> 1,000
                    </Button>
                    <Button
                        size={["sm","sm","md","md"]}
                        colorScheme="blue"
                        borderRadius="full"
                        value={myObject.transfers}
                        onClick={()=> handleAdd2kTransfers("transfers", myObject.transfers)}
                    >
                       <TbCurrencyNaira/> 2,000
                    </Button>
                    <Button
                        size={["sm","sm","md","md"]}
                        colorScheme="blue"
                        borderRadius="full"
                        value={myObject.transfers}
                        onClick={()=> handleAdd3kTransfers("transfers", myObject.transfers)}
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
                        value={myObject.transfers}
                        onClick={()=> handleAdd5kTransfers("transfers", myObject.transfers)}
                    >
                       <TbCurrencyNaira/> 5,000
                    </Button>
                    <Button
                        size={["sm","sm","md","md"]}
                        colorScheme="blue"
                        borderRadius="full"
                        value={myObject.transfers}
                        onClick={()=> handleAdd10kTransfers("transfers", myObject.transfers)}
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
                            value={myObject.transfers}
                            onChange={(e) => handleNumberChange('transfers', parseInt(e.target.value, 10))}
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
        <Flex
            p={1.5}
          >
            <Popover>
              <PopoverTrigger>
                <Button
                  variant="ghost"
                >
                  <Text
                    fontSize={["1.2rem","1.2rem","1.3rem","1.5rem"]}
                  >
                   <RiInformationLine/>
                  </Text>
                </Button>
              </PopoverTrigger>
              <PopoverContent color='white' bg='blue.800' borderColor='blue.800'>
                <PopoverHeader pt={4} fontWeight='bold' border='0'>
                  Hey there.
                </PopoverHeader>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody
                  mb="2rem"
                >
                  Please try to add the exact amount of money spent to get an accurate result.
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Flex>
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
                    mt="-2rem"
                >
                    <Button
                        colorScheme="blue"
                        borderRadius="full"
                        size={["sm","sm","md","md"]}
                        value={myObject.others}
                        onClick={()=> handleAdd1kOthers("transfers", myObject.others)}
                    >
                       <TbCurrencyNaira/> 1,000
                    </Button>
                    <Button
                        size={["sm","sm","md","md"]}
                        colorScheme="blue"
                        borderRadius="full"
                        value={myObject.others}
                        onClick={()=> handleAdd2kOthers("transfers", myObject.others)}
                    >
                       <TbCurrencyNaira/> 2,000
                    </Button>
                    <Button
                        size={["sm","sm","md","md"]}
                        colorScheme="blue"
                        borderRadius="full"
                        value={myObject.others}
                        onClick={()=> handleAdd3kOthers("transfers", myObject.others)}
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
                        value={myObject.others}
                        onClick={()=> handleAdd5kOthers("transfers", myObject.others)}
                    >
                       <TbCurrencyNaira/> 5,000
                    </Button>
                    <Button
                        size={["sm","sm","md","md"]}
                        colorScheme="blue"
                        borderRadius="full"
                        value={myObject.others}
                        onClick={()=> handleAdd10kOthers("transfers", myObject.others)}
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
                            value={myObject.others}
                            onChange={(e) => handleNumberChange('others', parseInt(e.target.value, 10))}
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