/* eslint-disable react/no-unescaped-entities */
import { 
  Button,
  Container, 
  Divider, 
  Flex, 
  Heading, 
  Popover, 
  PopoverArrow, 
  PopoverBody, 
  PopoverCloseButton, 
  PopoverContent, 
  PopoverHeader, 
  PopoverTrigger, 
  Stat, 
  StatArrow, 
  StatHelpText, 
  Table, 
  Tbody, 
  Td, 
  Text, 
  Th, 
  Thead, 
  Tr, 
  useColorModeValue 
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Head from "next/head"
import { ChevronRightIcon, TriangleUpIcon } from "@chakra-ui/icons"
import { TbCurrencyNaira } from "react-icons/tb"
import { 
  BiTransferAlt, 
  BiDotsHorizontalRounded } from "react-icons/bi"
import { 
  IoFastFoodOutline, 
  IoBusOutline,
  IoFastFoodSharp, 
  IoWifi 
} from "react-icons/io5"
import InputBarchart from '../components/barchart';
import { useSelector } from 'react-redux'
import { selectMyObject } from 'redux/slices/dailyInputSlice'
import Image from 'next/image'
import Notfound from "../../../images/notfound.png"

interface DateTimeProps {
  className?: string;
}

interface DateTimeState {
  dateTime: Date;
}

const AnalyticsModule = ({ className }: DateTimeProps) => {
  const divColor = useColorModeValue("white","#222636")
  const secondDivColor = useColorModeValue("linear-gradient(to right, #536976, #292e49)","#292c3d")
  const divGradient = useColorModeValue("linear-gradient(to bottom, #505285 0%, #585e92 12%, #65689f 25%, #7474b0 37%, #7e7ebb 50%, #8389c7 62%, #9795d4 75%, #a2a1dc 87%, #b5aee4 100%);","linear-gradient(to right, #6a85b6 0%, #bac8e0 100%);")
  const divColor2 = useColorModeValue("#EDF2F7", "#353b54")
  const header2 = useColorModeValue("white", "white")
  const bgGradient = useColorModeValue("linear-gradient(to right, #162961, #3969b9)","linear-gradient(to right, #28355e, #28355e);")
  const borderColor = useColorModeValue("black","white")
  
  const myObject = useSelector(selectMyObject)
  const Sum = myObject.food + myObject.data + myObject.others + myObject.transfers + myObject.transit

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

  return (
    <Container
      centerContent
    >
       <Head>
            <title>Analytics</title>
            <meta name="description" content="" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
      <Flex
        justifyContent="center"
        alignItems="center"
        flexDir={["column","column","column","row"]}
        gap={["3rem","3rem","4rem","5rem"]}
        mt={["0.5rem","1.5rem","4rem","5rem"]}
        >
        <Flex
          w={["21rem","21rem","38rem","61rem"]}
          h={["28rem","30rem","38rem","35rem"]}
          borderRadius="1rem 0 1rem 0"
          bg= {divColor}
          // bgGradient= {divGradient}
          // mb="5rem"
          boxShadow="lg"
          // justifyContent="center"
          alignItems="center"
          flexDir="column"
          overflowY="scroll"
          overflowX="hidden"
        >
          {Sum === 0 ? (
            <Flex
              justifyContent="center"
              alignItems="center"
              flexDir="column"
            >
              <Flex
                w={["25rem","25rem","34rem","35rem"]}
                justifyContent="center"
                alignItems="center"
                mt={["2rem","","3rem","1rem"]}
                ml={["2rem","","3rem","3rem"]}
              >
                <Image
                  src={Notfound}
                  alt=""
                />
              </Flex>
              <Heading
                ml={["1rem","","3rem","-1rem"]}
                mt={["-3rem","","-3rem","-3rem"]}
                size={["md","md","lg","lg"]}
              >
                Nothing to see here yet.
              </Heading>
            </Flex>
          ): (
          <Flex
            flexDir="column"
          >
            <Flex
              w={["18rem","18rem","33rem","55rem"]}
              h={["4rem","4rem","5rem","5rem"]}
              boxShadow="lg"
              borderRadius="1rem 0 1rem 0"
              mt="2rem"
              // border="0.1px solid black"
              // mt="2rem"
              bg= {divColor2}
              justifyContent="center"
              alignItems="center"
            >
              <Flex
                gap={["","","2rem","23rem"]}
                alignItems="center"
              >
                <Heading
                  size={["","","md","md"]}
                  mr={["3rem","","",""]}
                >
                  {state.dateTime.toLocaleDateString('en-US', dateOptions)}
                </Heading>
                
                <Flex
                  alignItems="center"
                >
                  <Heading
                   size={["","","md","md"]}
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
                    >
                      <TbCurrencyNaira/> 
                    </Heading>
                    <Heading
                      size={["","","md","md"]}
                      display={{ base: 'none', md: 'block' }}
                    >
                     {Sum}
                    </Heading>
  

                    <Popover
                      // closeOnBlur={false}
                    >
                      <PopoverTrigger>
                        <Button
                          variant="ghost"
                          >
                            <Heading
                            size={["lg","","lg","lg"]}
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
                          <Table variant="striped">
                            <Thead>
                              <Tr>
                                <Th>Catergories</Th>
                                <Th>Prices</Th>
                              </Tr>
                            </Thead>
                            <Tbody>
                              <Tr>
                                <Td fontWeight={700}>Food</Td>
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
                                 {myObject.food}
                                </Td>
                              </Tr>
                              <Tr>
                                <Td fontWeight={700}>Transit</Td>
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
                                 {myObject.transit}
                                </Td>
                              </Tr>
                              <Tr>
                                <Td fontWeight={700}>Data</Td>
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
                                 {myObject.data}
                                </Td>
                              </Tr>
                              <Tr>
                                <Td fontWeight={700}>Transfers</Td>
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
                                 {myObject.transfers}
                                </Td>
                              </Tr>
                              <Tr>
                                <Td fontWeight={700}>Others</Td>
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
                                 {myObject.others}
                                </Td>
                              </Tr>
                            </Tbody>
                          </Table>
                   </Flex>
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex> )}
        </Flex>

      </Flex>
    </Container>
  )
}

export default AnalyticsModule