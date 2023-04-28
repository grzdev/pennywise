/* eslint-disable react/jsx-no-undef */
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Button, Flex, Heading, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger, Stack, Table, Tbody, Td, Text, Th, Thead, Tr, useColorModeValue } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { TbCurrencyNaira } from 'react-icons/tb';
import { useSelector } from 'react-redux';
import { selectMyObject } from 'redux/slices/dailyInputSlice';
import {
  collection,
  query,
  where,
  onSnapshot,
  addDoc,
  DocumentData,
} from "firebase/firestore";
import { db } from 'config/firebase';

interface DateTimeProps {
  className?: string;
}

interface DateTimeState {
  dateTime: Date;
}

const AnalyticsContent = ({ className }: DateTimeProps) => {
  const divColor = useColorModeValue("white","#222636")
  const secondDivColor = useColorModeValue("linear-gradient(to right, #536976, #292e49)","#292c3d")
  const divGradient = useColorModeValue("linear-gradient(to bottom, #505285 0%, #585e92 12%, #65689f 25%, #7474b0 37%, #7e7ebb 50%, #8389c7 62%, #9795d4 75%, #a2a1dc 87%, #b5aee4 100%);","linear-gradient(to right, #6a85b6 0%, #bac8e0 100%);")
  const divColor2 = useColorModeValue("#EDF2F7", "#353b54")
  const header2 = useColorModeValue("white", "white")
  const borderColor = useColorModeValue("black","white")
  const bgGradient = useColorModeValue("linear-gradient(to right, #162961, #3969b9)","linear-gradient(to right, #28355e, #4e67b6);")

  const myObject = useSelector(selectMyObject)
  const Sum = myObject.food + myObject.data + myObject.others + myObject.transfers + myObject.transit


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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const dateOptions: Intl.DateTimeFormatOptions = { weekday: 'long', month: 'long', day: 'numeric' };
  const timeOptions: Intl.DateTimeFormatOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric' };


  const [data, setData] = useState<DocumentData | null>(null);

  useEffect(() => {
    // Set up a query that listens for new documents added to the collection
    const dataCollection = collection(db, "test3");
    const queryRef = query(
      dataCollection,
      where("date", "==", state.dateTime.toLocaleDateString("en-US", dateOptions))
    );
    const unsubscribe = onSnapshot(queryRef, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          setData(change.doc.data() ?? null);
          unsubscribe();
        }
      });
    });

    // Add a new document to the collection
    const userData = {
      food: myObject.food,
      transit: myObject.transit,
      data: myObject.data,
      transfers: myObject.transfers,
      others: myObject.others,
      date: state.dateTime.toLocaleDateString("en-US", dateOptions),
    };
    addDoc(dataCollection, userData);
  }, [dateOptions, myObject.data, myObject.food, myObject.others, myObject.transfers, myObject.transit, state.dateTime]);
  

  return (
    <Flex
    flexDir="column"
  >
    <Flex
      w={["18rem","18rem","33rem","55rem"]}
      h={["4rem","4rem","5rem","5rem"]}
      boxShadow="lg"
      borderRadius="1rem 0 1rem 0"
      mt="2rem"
      bg= {bgGradient}
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        gap={["","","4rem","23rem"]}
        alignItems="center"
      >
        <Heading
          size={["","","md","md"]}
          mr={["1rem","","2rem",""]}
          ml={["","","1.5rem",""]}
          color="white"
        >
          {state.dateTime.toLocaleDateString('en-US', dateOptions)}
        </Heading>
        
        <Flex
          alignItems="center"
          >
          <Heading
           size={["","","md","md"]}
           color="white" 
           mr={["","","0.1rem","0.5rem"]}
           display={{ base: 'none', md: 'block' }}
          >
            Total: 
          </Heading>
          <Flex
            alignItems="center"
          >
            <Heading
              size={["","","lg","lg"]}
              mr={["","","-0.1rem","-0.2rem"]}
              mt={["","","0.2rem","0.2rem"]}
              display={{ base: 'none', md: 'block' }}
              color="white" 
            >
              <TbCurrencyNaira/> 
            </Heading>
            <Heading
              size={["","","lg","lg"]}
              display={{ base: 'none', md: 'block' }}
              color="white" 
            >
             {Sum}
            </Heading>


            <Popover
            >
              <PopoverTrigger>
                <Button
                  variant="ghost"
                  >
                    <Heading
                    size={["lg","","lg","lg"]}
                    color="white" 
                    >                          
                    <ChevronRightIcon/>
                    </Heading>
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                  <Flex>
                  <Table variant="simple">
                    <Thead>
                      <Tr>
                        <Th>Catergories</Th>
                        <Th>Prices</Th>
                      </Tr>
                    </Thead>
                    {data ? (

                    <Tbody>
                      <Tr>
                        <Td fontWeight={600}>Food</Td>
                        <Td
                          display="flex"
                          flexDir="row"
                          fontWeight={600}
                        >
                          <Text
                            fontSize={["1.2rem","1.2rem","1.2rem","1.3rem"]}
                          >
                            <TbCurrencyNaira/>
                          </Text>
                         {data.food}
                        </Td>
                      </Tr>
                      <Tr>
                        <Td fontWeight={600}>Transit</Td>
                        <Td
                          display="flex"
                          flexDir="row"
                          fontWeight={600}
                        >
                          <Text
                            fontSize={["1.2rem","1.2rem","1.2rem","1.3rem"]}
                          >
                            <TbCurrencyNaira/>
                          </Text>
                         {data.transit}
                        </Td>
                      </Tr>
                      <Tr>
                        <Td fontWeight={600}>Data</Td>
                        <Td
                          display="flex"
                          flexDir="row"
                          fontWeight={600}
                        >
                          <Text
                            fontSize={["1.2rem","1.2rem","1.2rem","1.3rem"]}
                          >
                            <TbCurrencyNaira/>
                          </Text>
                         {data.data}
                        </Td>
                      </Tr>
                      <Tr>
                        <Td fontWeight={600}>Transfers</Td>
                        <Td
                          display="flex"
                          flexDir="row"
                          fontWeight={600}
                        >
                          <Text
                            fontSize={["1.2rem","1.2rem","1.2rem","1.3rem"]}
                          >
                            <TbCurrencyNaira/>
                          </Text>
                         {data.transfers}
                        </Td>
                      </Tr>
                      <Tr>
                        <Td fontWeight={600}>Others</Td>
                        <Td
                          display="flex"
                          flexDir="row"
                          fontWeight={600}
                        >
                          <Text
                            fontSize={["1.2rem","1.2rem","1.2rem","1.3rem"]}
                          >
                            <TbCurrencyNaira/>
                          </Text>
                         {data.others}
                        </Td>
                      </Tr>
                      <Tr
                        // display={{ base: 'flex', md: 'none' }}
                      >
                        <Td fontWeight={700}>Total:</Td>
                        <Td
                          display="flex"
                          flexDir="row"
                          fontWeight={700}
                        >
                          <Text
                            fontSize={["1.2rem","1.2rem","1.2rem","1.3rem"]}
                          >
                            <TbCurrencyNaira/>
                          </Text>
                         {Sum}
                        </Td>
                      </Tr>
                    </Tbody>
                    ) : (
                      <Text>Loading...</Text>
                    )}
                  </Table>

                  {/* {data ? (
                    <Stack spacing={2}>
                      <Text>
                        <b>Food:</b> {data.food}
                      </Text>
                      <Text>
                        <b>Transit:</b> {data.transit}
                      </Text>
                      <Text>
                        <b>Data:</b> {data.data}
                      </Text>
                      <Text>
                        <b>Transfers:</b> {data.transfers}
                      </Text>
                      <Text>
                        <b>Others:</b> {data.others}
                      </Text>
                    </Stack>
                  ) : (
                    <Text>Loading...</Text>
                  )} */}
           </Flex>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  </Flex>
  )
}

export default AnalyticsContent