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
// import { RootState } from 'redux/store'
import { add10k, add1k, add2k, add3k, add5k, InputData, onChange, selectMyObject } from 'redux/slices/dailyInputSlice'
import { RiInformationLine } from 'react-icons/ri'
import { BsFillCheckCircleFill, BsInfo } from 'react-icons/bs'
import { createSelector } from '@reduxjs/toolkit'
import { motion } from 'framer-motion'
import { db } from 'config/firebase'
import Image from "next/image"
import CompletedImg from "../../../images/check1.png"
import { addDoc, collection, doc, getDocs, limit, onSnapshot, orderBy, query, setDoc, Timestamp, where } from "firebase/firestore";

interface DateTimeProps {
  className?: string;
}

interface DateTimeState {
  dateTime: Date;
}


const InputModal = () => {

  //Colormode change
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





  //Toast
  const toast = useToast()



  

  // Onchange function
  const dispatch = useDispatch();
  const myObject = useSelector(selectMyObject);
  const handleNumberChange = (name: keyof InputData, value: number) => {
    dispatch(onChange({ name, value }));
  }




  //Funtional modal buttons

  //add 1k
  const handleAdd1kFood = (name: keyof InputData, value: number) => {
    dispatch(add1k({ name : "food", value })),
    modal2.onOpen()
  };
  const handleAdd1kTransit = (name: keyof InputData, value: number) => {
    dispatch(add1k({ name : "transit", value })),
    modal3.onOpen()
  };
  const handleAdd1kData = (name: keyof InputData, value: number) => {
    dispatch(add1k({ name : "data", value })),
    modal4.onOpen()
  };
  const handleAdd1kTransfers = (name: keyof InputData, value: number) => {
    dispatch(add1k({ name : "transfers", value })),
    modal5.onOpen()
  };
  const handleAdd1kOthers = (name: keyof InputData, value: number) => {
    dispatch(add1k({ name : "others", value })),
    modal6.onOpen()
  };




   //add 2k
   const handleAdd2kFood = (name: keyof InputData, value: number) => {
    dispatch(add2k({ name : "food", value })),
    modal2.onOpen()
  };
  const handleAdd2kTransit = (name: keyof InputData, value: number) => {
    dispatch(add2k({ name : "transit", value })),
    modal3.onOpen()
  };
  const handleAdd2kData = (name: keyof InputData, value: number) => {
    dispatch(add2k({ name : "data", value })),
    modal4.onOpen()
  };
  const handleAdd2kTransfers = (name: keyof InputData, value: number) => {
    dispatch(add2k({ name : "transfers", value })),
    modal5.onOpen()
  };
  const handleAdd2kOthers = (name: keyof InputData, value: number) => {
    dispatch(add2k({ name : "others", value })),
    modal6.onOpen()
  };




  //add 3k
  const handleAdd3kFood = (name: keyof InputData, value: number) => {
    dispatch(add3k({ name : "food", value })),
    modal2.onOpen()
  };
  const handleAdd3kTransit =(name: keyof InputData, value: number) => {
    dispatch(add3k({ name : "transit", value })),
    modal3.onOpen()
  };
  const handleAdd3kData = (name: keyof InputData, value: number) => {
    dispatch(add3k({ name : "data", value })),
    modal4.onOpen()
  };
  const handleAdd3kTransfers = (name: keyof InputData, value: number) => {
    dispatch(add3k({ name : "transfers", value })),
    modal5.onOpen()
  };
  const handleAdd3kOthers = (name: keyof InputData, value: number) => {
    dispatch(add3k({ name : "others", value })),
    modal6.onOpen()
  };





  //add 5k
  const handleAdd5kFood = (name: keyof InputData, value: number) => {
    dispatch(add5k({ name : "food", value })),
    modal2.onOpen()
  };
  const handleAdd5kTransit = (name: keyof InputData, value: number) => {
    dispatch(add5k({ name : "transit", value })),
    modal3.onOpen()
  };
  const handleAdd5kData = (name: keyof InputData, value: number) => {
    dispatch(add5k({ name : "data", value })),
    modal4.onOpen()
  };
  const handleAdd5kTransfers = (name: keyof InputData, value: number) => {
    dispatch(add5k({ name : "transfers", value })),
    modal5.onOpen()
  };
  const handleAdd5kOthers = (name: keyof InputData, value: number) => {
    dispatch(add5k({ name : "others", value })),
    modal6.onOpen()
  };





  //add 10k
  const handleAdd10kFood = (name: keyof InputData, value: number) => {
    dispatch(add10k({ name : "food", value })),
    modal2.onOpen()
  };
  const handleAdd10kTransit = (name: keyof InputData, value: number) => {
    dispatch(add10k({ name : "transit", value })),
    modal3.onOpen()
  };
  const handleAdd10kData = (name: keyof InputData, value: number) => {
    dispatch(add10k({ name : "data", value })),
    modal4.onOpen()
  };
  const handleAdd10kTransfers = (name: keyof InputData, value: number) => {
    dispatch(add10k({ name : "transfers", value })),
    modal5.onOpen()
  };
  const handleAdd10kOthers = (name: keyof InputData, value: number) => {
    dispatch(add10k({ name : "others", value })),
    modal6.onOpen()
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



  //Modal Save function
   const handleAddInput = async () => {
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

    const dataCollection = collection(db, "test3")
    const userData = {
      food: myObject.food,
      transit: myObject.transit,
      data: myObject.data,
      transfers: myObject.transfers,
      others: myObject.others,
      date: state.dateTime.toLocaleDateString('en-US', dateOptions)
    };

    // update state
    const queryRef = query(dataCollection, where("date", "==", userData.date))
    const querySnapshot = await getDocs(queryRef);
    if (!querySnapshot.empty) {
      const docRef = doc(db, "test3", querySnapshot.docs[0].id);
      await setDoc(docRef, userData, { merge: true });
      console.log("Fields updated successfully!");
    } else {
      // If a document with the current date does not exist, create a new document
      await addDoc(dataCollection, userData );
      console.log("New document created successfully!");
    }

  }


//   const dataCollection = collection(db, "test3");
//   const userData = {
//     food: myObject.food,
//     transit: myObject.transit,
//     data: myObject.data,
//     transfers: myObject.transfers,
//     others: myObject.others,
//     date: state.dateTime.toLocaleDateString('en-US', dateOptions)
//   };

// // Set up a query that listens for new documents added to the collection
//   const queryReff = query(dataCollection, where("date", "==", userData.date));
//   const unsubscribe = onSnapshot(queryReff, (snapshot) => {
//     snapshot.docChanges().forEach((change) => {
//       if (change.type === "added") {
//         // Log the newly added document data
//         console.log(change.doc.data());
//         unsubscribe();
//       }
//     });
//   });

  
  


  

  return (
    <Flex>
      <motion.div
        whileInView={{ y: 0, opacity: 1}}
        initial={{ y: 100, opacity: 0 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
      >
        {/* {myObject.food === 0 ? ( */}
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
        {/* ) : (
          <Button
          w={["4rem","5rem","6rem","7rem"]}
          h={["2.8rem","2.8rem","3.2rem","3.8rem"]}
          borderRadius="1rem 0 1rem 0"
          bg={button}
          _hover={{
          bg: "#718aff"
          }}
        >
          <Text
            color={addIcon} 
            fontSize={["1.1rem","1.1rem","1.3rem","1.4rem"]}
            fontWeight={900}
          >
            <CheckIcon/>
          </Text>
        </Button>
        )} */}
        
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
                        // h={["2rem","","",""]}
                        value={myObject.food}
                        onClick={()=> handleAdd1kFood("food", myObject.food)}
                    >
                       <TbCurrencyNaira/> 1,000
                    </Button>
                    <Button
                        size={["md","md","lg","lg"]}
                        colorScheme="blue"
                        borderRadius="full"
                        value={myObject.food}
                        onClick={()=> handleAdd2kFood("food", myObject.food)}
                    >
                       <TbCurrencyNaira/> 2,000
                    </Button>
                    <Button
                        size={["md","md","lg","lg"]}
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
                        size={["md","md","lg","lg"]}
                        colorScheme="blue"
                        borderRadius="full"
                        value={myObject.food}
                        onClick={()=> handleAdd5kFood("food", myObject.food)}
                        
                    >
                       <TbCurrencyNaira/> 5,000
                    </Button>
                    <Button
                        size={["md","md","lg","lg"]}
                        colorScheme="blue"
                        borderRadius="full"
                        value={myObject.food}
                        onClick={()=> handleAdd10kFood("food", myObject.food)}
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
                        value={myObject.transit}
                        onClick={()=> handleAdd1kTransit("transit", myObject.transit)}
                    >
                       <TbCurrencyNaira/> 1,000
                    </Button>
                    <Button
                        size={["md","md","lg","lg"]}
                        colorScheme="blue"
                        borderRadius="full"
                        value={myObject.transit}
                        onClick={()=> handleAdd2kTransit("transit", myObject.transit)}
                    >
                       <TbCurrencyNaira/> 2,000
                    </Button>
                    <Button
                        size={["md","md","lg","lg"]}
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
                        size={["md","md","lg","lg"]}
                        colorScheme="blue"
                        borderRadius="full"
                        value={myObject.transit}
                        onClick={()=> handleAdd5kTransit("transit", myObject.transit)}
                    >
                       <TbCurrencyNaira/> 5,000
                    </Button>
                    <Button
                        size={["md","md","lg","lg"]}
                        colorScheme="blue"
                        borderRadius="full"
                        value={myObject.transit}
                        onClick={()=> handleAdd10kTransit("transit", myObject.transit)}
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
                        value={myObject.data}
                        onClick={()=> handleAdd1kData("data", myObject.data)}
                    >
                       <TbCurrencyNaira/> 1,000
                    </Button>
                    <Button
                        size={["md","md","lg","lg"]}
                        colorScheme="blue"
                        borderRadius="full"
                        value={myObject.data}
                        onClick={()=> handleAdd2kData("data", myObject.data)}
                    >
                       <TbCurrencyNaira/> 2,000
                    </Button>
                    <Button
                        size={["md","md","lg","lg"]}
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
                        size={["md","md","lg","lg"]}
                        colorScheme="blue"
                        borderRadius="full"
                        value={myObject.data}
                        onClick={()=> handleAdd5kData("data", myObject.data)}
                    >
                       <TbCurrencyNaira/> 5,000
                    </Button>
                    <Button
                        size={["md","md","lg","lg"]}
                        colorScheme="blue"
                        borderRadius="full"
                        value={myObject.data}
                        onClick={()=> handleAdd10kData("data", myObject.data)}
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
                        value={myObject.transfers}
                        onClick={()=> handleAdd1kTransfers("transfers", myObject.transfers)}
                    >
                       <TbCurrencyNaira/> 1,000
                    </Button>
                    <Button
                        size={["md","md","lg","lg"]}
                        colorScheme="blue"
                        borderRadius="full"
                        value={myObject.transfers}
                        onClick={()=> handleAdd2kTransfers("transfers", myObject.transfers)}
                    >
                       <TbCurrencyNaira/> 2,000
                    </Button>
                    <Button
                        size={["md","md","lg","lg"]}
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
                        size={["md","md","lg","lg"]}
                        colorScheme="blue"
                        borderRadius="full"
                        value={myObject.transfers}
                        onClick={()=> handleAdd5kTransfers("transfers", myObject.transfers)}
                    >
                       <TbCurrencyNaira/> 5,000
                    </Button>
                    <Button
                        size={["md","md","lg","lg"]}
                        colorScheme="blue"
                        borderRadius="full"
                        value={myObject.transfers}
                        onClick={()=> handleAdd10kTransfers("transfers", myObject.transfers)}
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
                        value={myObject.others}
                        onClick={()=> handleAdd1kOthers("others", myObject.others)}
                    >
                       <TbCurrencyNaira/> 1,000
                    </Button>
                    <Button
                        size={["md","md","lg","lg"]}
                        colorScheme="blue"
                        borderRadius="full"
                        value={myObject.others}
                        onClick={()=> handleAdd2kOthers("others", myObject.others)}
                    >
                       <TbCurrencyNaira/> 2,000
                    </Button>
                    <Button
                        size={["md","md","lg","lg"]}
                        colorScheme="blue"
                        borderRadius="full"
                        value={myObject.others}
                        onClick={()=> handleAdd3kOthers("others", myObject.others)}
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
                        value={myObject.others}
                        onClick={()=> handleAdd5kOthers("others", myObject.others)}
                    >
                       <TbCurrencyNaira/> 5,000
                    </Button>
                    <Button
                        size={["md","md","lg","lg"]}
                        colorScheme="blue"
                        borderRadius="full"
                        value={myObject.others}
                        onClick={()=> handleAdd10kOthers("others", myObject.others)}
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
                    onClick={handleAddInput}
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