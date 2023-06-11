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
    PopoverBody,
    Heading
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { AddIcon, CheckCircleIcon, CheckIcon, ChevronLeftIcon } from "@chakra-ui/icons"
import { IoBusOutline, IoFastFoodOutline, IoFastFoodSharp, IoWifi } from "react-icons/io5"
import { TbCurrency, TbCurrencyNaira } from 'react-icons/tb'
import { BiDotsHorizontalRounded, BiTransferAlt } from 'react-icons/bi'
import { parse } from 'path'
import { render } from 'react-dom'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/store'
import { add10k, add1k, add2k, add3k, add5k, InputData, onChange, selectMyObject } from 'redux/slices/dailyInputSlice'
import { RiInformationLine } from 'react-icons/ri'
import { BsFillCheckCircleFill, BsInfo } from 'react-icons/bs'
import { createSelector } from '@reduxjs/toolkit'
import { motion } from 'framer-motion'
import { db } from 'config/firebase'
import { BiEditAlt } from "react-icons/bi"
import Image from "next/image"
import CompletedImg from "../../../images/check1.png"
import { addDoc, collection, doc, getDocs, limit, onSnapshot, orderBy, query, setDoc, Timestamp, where } from "firebase/firestore";
import { addItem, updateItem } from 'redux/slices/inputSlice'

interface DateTimeProps {
  className?: string;
}

interface DateTimeState {
  dateTime: Date;
}

interface Item {
  id?: number;
  food: number;
  data: number;
  transit: number;
  transfers: number;
  others: number;
  sum: number;
  date: string;
}

const InputModal = () => {

  //Colormodes
  const button = useColorModeValue("linear-gradient(to right, #acb6e5, #86fde8);","linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)")
  const header = useColorModeValue("#2c4658","")
  const text = useColorModeValue("#0081e7","")
  const addIcon = useColorModeValue("#162A62","")
  const completed = useColorModeValue("linear-gradient( 135deg, #FFA6B7 10%, #1E2AD2 100%)","linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)")


  //Modals
  const modal1 = useDisclosure()
  const modal2 = useDisclosure()
  const modal3 = useDisclosure()
  const modal4 = useDisclosure()
  const modal5 = useDisclosure()
  const modal6 = useDisclosure()

  const dispatch = useDispatch();
  const toast = useToast()

  //States
  const [food, setFood] = useState(0);
  const [data, setData] = useState(0);
  const [transit, setTransit] = useState(0);
  const [transfers, setTransfers] = useState(0);
  const [others, setOthers] = useState(0);
  const [sum, setSum] = useState(0);

  //Submit function
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    modal1.onClose()
    modal2.onClose()
    modal3.onClose()
    modal4.onClose()
    modal5.onClose()
    modal6.onClose()

    toast({
      title: 'Done',
      position: 'top',
      description: "See you tomorrow.",
      status: 'info',
      duration: 5000,
      isClosable: true,
      // variant: "left-accent",
    })

    const currentDate = new Date();
    const date = currentDate.toDateString();
  
    // Perform any necessary logic with the form data
    const newItem = {
      food,
      data,
      transit,
      transfers,
      others,
      sum,
      date
    };
    dispatch(addItem(newItem));

     // Save data to Firebase collection
    try {
      const docRef = await addDoc(collection(db, "test5"), newItem);
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
    // Reset input fields
    setFood(0);
    setData(0);
    setTransit(0);
    setTransfers(0);
    setOthers(0);
    setSum(0)
    
  };

  //onchange action
  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    switch (name) {
      case "food":
        setFood(parseInt(value));
        break;
      case "data":
        setData(parseInt(value));
        break;
      case "transit":
        setTransit(parseInt(value));
        break;
      case "transfers":
        setTransfers(parseInt(value));
        break;
      case "others":
        setOthers(parseInt(value));
        break;
      default:
        break;
    }
  };

  //add1K function
  const handle1kClick = (category: any) => {
    switch (category) {
      case "food":
        setFood((prevFood) => prevFood + 1000);
        modal2.onOpen();
        break;
      case "transit":
        setTransit((prevTransit) => prevTransit + 1000);
        modal3.onOpen();
        break;
      case "data":
        setData((prevData) => prevData + 1000);
        modal4.onOpen();
        break;
      case "transfers":
        setTransfers((prevTransfers) => prevTransfers + 1000);
        modal5.onOpen();
        break;
      case "others":
        setOthers((prevOthers) => prevOthers + 1000);
        modal6.onOpen();
        break;
      default:
        break;
    }
  };


  //add2K function
  const handle2kClick = (category: any) => {
    switch (category) {
      case "food":
        setFood((prevFood) => prevFood + 2000);
        modal2.onOpen();
        break;
      case "transit":
        setTransit((prevTransit) => prevTransit + 2000);
        modal3.onOpen();
        break;
      case "data":
        setData((prevData) => prevData + 2000);
        modal4.onOpen();
        break;
      case "transfers":
        setTransfers((prevTransfers) => prevTransfers + 2000);
        modal5.onOpen();
        break;
      case "others":
        setOthers((prevOthers) => prevOthers + 2000);
        modal6.onOpen();
        break;
      default:
        break;
    }
  };

  //add3K function
  const handle3kClick = (category: any) => {
    switch (category) {
      case "food":
        setFood((prevFood) => prevFood + 3000);
        modal2.onOpen();
        break;
      case "transit":
        setTransit((prevTransit) => prevTransit + 3000);
        modal3.onOpen();
        break;
      case "data":
        setData((prevData) => prevData + 3000);
        modal4.onOpen();
        break;
      case "transfers":
        setTransfers((prevTransfers) => prevTransfers + 3000);
        modal5.onOpen();
        break;
      case "others":
        setOthers((prevOthers) => prevOthers + 3000);
        modal6.onOpen();
        break;
      default:
        break;
    }
  };

   //add5K function
   const handle5kClick = (category: any) => {
    switch (category) {
      case "food":
        setFood((prevFood) => prevFood + 5000);
        modal2.onOpen();
        break;
      case "transit":
        setTransit((prevTransit) => prevTransit + 5000);
        modal3.onOpen();
        break;
      case "data":
        setData((prevData) => prevData + 5000);
        modal4.onOpen();
        break;
      case "transfers":
        setTransfers((prevTransfers) => prevTransfers + 5000);
        modal5.onOpen();
        break;
      case "others":
        setOthers((prevOthers) => prevOthers + 5000);
        modal6.onOpen();
        break;
      default:
        break;
    }
  };

     //add10K function
     const handle10kClick = (category: any) => {
      switch (category) {
        case "food":
          setFood((prevFood) => prevFood + 10000);
          modal2.onOpen();
          break;
        case "transit":
          setTransit((prevTransit) => prevTransit + 10000);
          modal3.onOpen();
          break;
        case "data":
          setData((prevData) => prevData + 10000);
          modal4.onOpen();
          break;
        case "transfers":
          setTransfers((prevTransfers) => prevTransfers + 10000);
          modal5.onOpen();
          break;
        case "others":
          setOthers((prevOthers) => prevOthers + 10000);
          modal6.onOpen();
          break;
        default:
          break;
      }
    };

  
  //Date
  const [state, setState] = useState<DateTimeState>({
    dateTime: new Date(),
  });
 
  useEffect(() => {
    const interval = setInterval(() => {
      setState({ dateTime: new Date() });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const dateOptions: Intl.DateTimeFormatOptions = { weekday: 'long', month: 'long', day: 'numeric' };
  const timeOptions: Intl.DateTimeFormatOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric' };


  //redux state
  const items = useSelector((state: RootState) => state.number.items);
  const sumOfCategories = items.reduce(
    (total, item) => total + item.food + item.data + item.transit + item.transfers + item.others,
    0
  );


  return (
    <Flex>
      <motion.div
        whileInView={{ y: 0, opacity: 1}}
        initial={{ y: 100, opacity: 0 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
      >
        {sumOfCategories === 0 ? (
          <Button
            w={["4rem","5rem","6rem","7rem"]}
            h={["2.8rem","2.8rem","3.2rem","3.8rem"]}
            borderRadius="1rem 0 1rem 0"
            bg={button}
            _hover={{
            bg: "#718aff"
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
         ) : (
          <Button
          w={["4rem","5rem","6rem","7rem"]}
          h={["2.8rem","2.8rem","3.2rem","3.8rem"]}
          borderRadius="1rem 0 1rem 0"
          bg={button}
          _hover={{
          bg: "#718aff"
          }}
          // onClick={handleUpdateItem}
        >
          <Text
            color={addIcon} 
            fontSize={["1.1rem","1.1rem","1.3rem","1.4rem"]}
            fontWeight={900}
          >
            <CheckIcon/>
          </Text>
        </Button>
        )}
        
      </motion.div>
        
        {/* Food Modal */}
        <Modal 
         closeOnOverlayClick={false} 
         isOpen={modal1.isOpen}
         onClose={modal1.onClose}
         isCentered
         size={["sm","sm","lg","lg"]}
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
                  To obtain an accurate result, please enter the actual amount of money spent.
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
                    fontSize={["1.4rem","1.4rem","1.7rem","2rem"]} 
                    color={header}
                    mr="0.1rem"
                    >
                        <IoFastFoodSharp/>
                    </Text>
                    <Text 
                    fontSize={["2.2rem","2.2rem","2.7rem","3rem"]} 
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
                gap="1.5rem"
            >
                <HStack
                    gap={["0.5rem","0.6rem","1rem","1rem"]}
                    mt="-2rem"
                >
                    <Button
                        colorScheme="blue"
                        borderRadius="full"
                        size={["md","md","lg","lg"]}
                        onClick={() => handle1kClick("food")}
                    >
                       <TbCurrencyNaira/> 1,000
                    </Button>
                    <Button
                        size={["md","md","lg","lg"]}
                        colorScheme="blue"
                        borderRadius="full"                        
                        onClick={() => handle2kClick("food")}
                    >
                       <TbCurrencyNaira/> 2,000
                    </Button>
                    <Button
                        size={["md","md","lg","lg"]}
                        colorScheme="blue"
                        borderRadius="full"
                        onClick={() => handle3kClick("food")}
                    >
                       <TbCurrencyNaira/> 3,000
                    </Button>
                </HStack>
                <HStack
                    gap={["0.5rem","0.6rem","1rem","1rem"]}
                >
                    <Button
                        size={["md","md","lg","lg"]}
                        colorScheme="blue"
                        borderRadius="full"
                        onClick={() => handle5kClick("food")}
                    >
                       <TbCurrencyNaira/> 5,000
                    </Button>
                    <Button
                        size={["md","md","lg","lg"]}
                        colorScheme="blue"
                        borderRadius="full"
                        onClick={() => handle10kClick("food")}
                    >
                       <TbCurrencyNaira/> 10,000
                    </Button>
                </HStack>
                <Flex
                    mt="1rem"
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
                            value={food}
                            onChange={handleInputChange}
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
                mr={["13rem","13rem","20.6rem","21rem"]}
                color={header}
            >
             1 of 5
            </Text>
            <Button 
                colorScheme='blue'
                borderRadius="full" mr={3}
                size={["md","md","md","md"]}
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
         size={["sm","sm","lg","lg"]}
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
                  To obtain an accurate result, please enter the actual amount of money spent.
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
                    fontSize={["1.4rem","1.4rem","1.7rem","2rem"]} 
                    color={header}
                    mr="0.1rem"
                    >
                        <IoBusOutline/>
                    </Text>
                    <Text 
                    fontSize={["2.2rem","2.2rem","2.7rem","3rem"]}
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
                gap="1.5rem"
            >
                <HStack
                    gap={["0.5rem","0.6rem","1rem","1rem"]}
                    mt="-2rem"
                >
                    <Button
                        colorScheme="blue"
                        borderRadius="full"
                        size={["md","md","lg","lg"]}
                        onClick={() => handle1kClick("transit")}
                    >
                       <TbCurrencyNaira/> 1,000
                    </Button>
                    <Button
                        size={["md","md","lg","lg"]}
                        colorScheme="blue"
                        borderRadius="full"
                        onClick={() => handle2kClick("transit")}
                    >
                       <TbCurrencyNaira/> 2,000
                    </Button>
                    <Button
                        size={["md","md","lg","lg"]}
                        colorScheme="blue"
                        borderRadius="full"
                        onClick={() => handle3kClick("transit")}
                    >
                       <TbCurrencyNaira/> 3,000
                    </Button>
                </HStack>
                <HStack
                    gap={["0.5rem","0.6rem","1rem","1rem"]}
                >
                    <Button
                        size={["md","md","lg","lg"]}
                        colorScheme="blue"
                        borderRadius="full"
                        onClick={() => handle5kClick("transit")}
                    >
                       <TbCurrencyNaira/> 5,000
                    </Button>
                    <Button
                        size={["md","md","lg","lg"]}
                        colorScheme="blue"
                        borderRadius="full"
                        onClick={() => handle10kClick("transit")}
                    >
                       <TbCurrencyNaira/> 10,000
                    </Button>
                </HStack>
                <Flex
                    mt="1rem"
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
                            value={transit}
                            onChange={handleInputChange}
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
                mr={["13rem","13rem","20.6rem","21rem"]}
                color={header}
            >
             2 of 5
            </Text>
            <Button 
                colorScheme='blue'
                borderRadius="full" mr={3}
                size={["md","md","md","md"]}
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
         size={["sm","sm","lg","lg"]}
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
                  To obtain an accurate result, please enter the actual amount of money spent.
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
                    fontSize={["1.4rem","1.4rem","1.7rem","2rem"]} 
                    color={header}
                    mr="0.1rem"
                    >
                    <IoWifi/>
                    </Text>
                    <Text 
                    fontSize={["2.2rem","2.2rem","2.7rem","3rem"]}
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
                gap="1.5rem"
            >
                <HStack
                    gap={["0.5rem","0.6rem","1rem","1rem"]}
                    mt="-2rem"
                >
                    <Button
                        colorScheme="blue"
                        borderRadius="full"
                        size={["md","md","lg","lg"]}
                        onClick={() => handle1kClick("data")}
                    >
                       <TbCurrencyNaira/> 1,000
                    </Button>
                    <Button
                        size={["md","md","lg","lg"]}
                        colorScheme="blue"
                        borderRadius="full"
                        onClick={() => handle2kClick("data")}
                    >
                       <TbCurrencyNaira/> 2,000
                    </Button>
                    <Button
                        size={["md","md","lg","lg"]}
                        colorScheme="blue"
                        borderRadius="full"
                        onClick={() => handle3kClick("data")}
                    >
                       <TbCurrencyNaira/> 3,000
                    </Button>
                </HStack>
                <HStack
                    gap={["0.5rem","0.6rem","1rem","1rem"]}
                >
                    <Button
                        size={["md","md","lg","lg"]}
                        colorScheme="blue"
                        borderRadius="full"
                        onClick={() => handle5kClick("data")}
                    >
                       <TbCurrencyNaira/> 5,000
                    </Button>
                    <Button
                        size={["md","md","lg","lg"]}
                        colorScheme="blue"
                        borderRadius="full"
                        onClick={() => handle10kClick("data")}
                    >
                       <TbCurrencyNaira/> 10,000
                    </Button>
                </HStack>
                <Flex
                    mt="1rem"
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
                            value={data}
                            onChange={handleInputChange}
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
                mr={["13rem","13rem","20.6rem","21rem"]}
                color={header}
            >
             3 of 5
            </Text>
            <Button 
                colorScheme='blue'
                borderRadius="full" mr={3}
                size={["md","md","md","md"]}
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
         size={["sm","sm","lg","lg"]}
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
                  To obtain an accurate result, please enter the actual amount of money spent.
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
                    fontSize={["1.4rem","1.4rem","1.7rem","2rem"]} 
                    color={header}
                    mr="0.1rem"
                    >
                    <BiTransferAlt/>
                    </Text>
                    <Text 
                    fontSize={["2.2rem","2.2rem","2.7rem","3rem"]} 
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
                gap="1.5rem"
            >
                <HStack
                    gap={["0.5rem","0.6rem","1rem","1rem"]}
                    mt="-2rem"
                >
                    <Button
                        colorScheme="blue"
                        borderRadius="full"
                        size={["md","md","lg","lg"]}
                        onClick={() => handle1kClick("transfers")}
                    >
                       <TbCurrencyNaira/> 1,000
                    </Button>
                    <Button
                        size={["md","md","lg","lg"]}
                        colorScheme="blue"
                        borderRadius="full"
                        onClick={() => handle2kClick("transfers")}
                    >
                       <TbCurrencyNaira/> 2,000
                    </Button>
                    <Button
                        size={["md","md","lg","lg"]}
                        colorScheme="blue"
                        borderRadius="full"
                        onClick={() => handle3kClick("transfers")}
                    >
                       <TbCurrencyNaira/> 3,000
                    </Button>
                </HStack>
                <HStack
                    gap={["0.5rem","0.6rem","1rem","1rem"]}
                >
                    <Button
                        size={["md","md","lg","lg"]}
                        colorScheme="blue"
                        borderRadius="full"
                        onClick={() => handle5kClick("transfers")}
                    >
                       <TbCurrencyNaira/> 5,000
                    </Button>
                    <Button
                        size={["md","md","lg","lg"]}
                        colorScheme="blue"
                        borderRadius="full"
                        onClick={() => handle10kClick("transfers")}
                    >
                       <TbCurrencyNaira/> 10,000
                    </Button>
                </HStack>
                <Flex
                    mt="1rem"
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
                            
                            value={transfers}
                            onChange={handleInputChange}
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
                mr={["13rem","13rem","20.6rem","21rem"]}
                color={header}
            >
             4 of 5
            </Text>
            <Button 
                colorScheme='blue'
                borderRadius="full" mr={3}
                size={["md","md","md","md"]}
                onClick={modal5.onOpen}
            >
              Next
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

         {/* Others Modal */}
      <Modal 
         closeOnOverlayClick={false} 
         isOpen={modal5.isOpen}
         onClose={modal5.onClose}
         isCentered
         size={["sm","sm","lg","lg"]}
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
                  To obtain an accurate result, please enter the actual amount of money spent.
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
                    fontSize={["1.4rem","1.4rem","1.7rem","2rem"]} 
                    color={header}
                    mr="0.1rem"
                    >
                    <BiDotsHorizontalRounded/>
                    </Text>
                    <Text 
                    fontSize={["2.2rem","2.2rem","2.7rem","3rem"]} 
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
                gap="1.5rem"
            >
                <HStack
                    gap={["0.5rem","0.6rem","1rem","1rem"]}
                    mt="-2rem"
                >
                    <Button
                        colorScheme="blue"
                        borderRadius="full"
                        size={["md","md","lg","lg"]}
                        onClick={() => handle1kClick("others")}
                    >
                       <TbCurrencyNaira/> 1,000
                    </Button>
                    <Button
                        size={["md","md","lg","lg"]}
                        colorScheme="blue"
                        borderRadius="full"
                        onClick={() => handle2kClick("others")}
                    >
                       <TbCurrencyNaira/> 2,000
                    </Button>
                    <Button
                        size={["md","md","lg","lg"]}
                        colorScheme="blue"
                        borderRadius="full"
                        onClick={() => handle3kClick("others")}
                    >
                       <TbCurrencyNaira/> 3,000
                    </Button>
                </HStack>
                <HStack
                    gap={["0.5rem","0.6rem","1rem","1rem"]}
                >
                    <Button
                        size={["md","md","lg","lg"]}
                        colorScheme="blue"
                        borderRadius="full"
                        onClick={() => handle5kClick("others")}
                    >
                       <TbCurrencyNaira/> 5,000
                    </Button>
                    <Button
                        size={["md","md","lg","lg"]}
                        colorScheme="blue"
                        borderRadius="full"
                        onClick={() => handle10kClick("others")}
                    >
                       <TbCurrencyNaira/> 10,000
                    </Button>
                </HStack>
                <Flex
                    mt="1rem"
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
                            value={others}
                            onChange={handleInputChange}
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
                mr={["13rem","13rem","20.6rem","21rem"]}
                color={header}
            >
             5 of 5
            </Text>
            <Button 
                colorScheme='blue'
                borderRadius="full" mr={3}
                size={["md","md","md","md"]}
                onClick={modal6.onOpen}
            >
              Next
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>


         {/* Success Modal */}
      <Modal 
        closeOnOverlayClick={false} 
        isOpen={modal6.isOpen}
        onClose={modal6.onClose}
        size={["sm","sm","lg","lg"]}
        blockScrollOnMount={false}
        isCentered
        >
        <ModalOverlay />
        <ModalContent>
          {/* <ModalHeader>Modal Title</ModalHeader> */}
          {/* <ModalCloseButton /> */}
          <ModalBody>
           <Flex
            justifyContent="center"
            alignItems="center"
            flexDir="column"
            mb={["3rem","3rem","5rem","8rem"]}
           >
              <Text
              fontSize={["6rem","6rem","7rem","7rem"]}
              mt={["7rem","7rem","7rem","9rem"]}
              color="#1ca8e2"
             >
              <BsFillCheckCircleFill/>
             </Text>
              <Heading
                size={["md","md","lg","lg"]}
                mt="2rem"
              >
                Successful!
              </Heading>

              <Flex
                mt={["7rem","7rem","6rem","6rem"]}
                mb={["2rem","2rem","2rem","-2rem"]}
              >
                <motion.div
                   whileInView={{ y: 0, opacity: 1}}
                   initial={{ y: 100, opacity: 0 }}
                   viewport={{ once: true }}
                   whileHover={{ scale: 1.1 }}
                   transition={{ type: "spring", stiffness: 200, damping: 10 }}
                >
                  <Button 
                    bg={completed}
                    borderRadius="1rem 0 1rem 0"
                    w={["8rem","10rem","10rem","12rem"]}
                    h={["3.8rem","3rem","4rem","4rem"]}
                    onClick={handleSubmit}
                    color="white"
                    fontWeight={700}
                    _hover={{
                      bg: '#718aff',
                    }}
                  >
                    Close
                  </Button>
                </motion.div>
              </Flex>
           </Flex>
          </ModalBody>

          {/* <ModalFooter>
            <Flex
              justifyContent="center"
              alignItems="center"
            >
            
            </Flex>
          </ModalFooter> */}
        </ModalContent>
      </Modal>

    </Flex>
  )
}

export default InputModal