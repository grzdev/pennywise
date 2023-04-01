/* eslint-disable react/jsx-no-undef */
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Button, Flex, Heading, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger, Table, Tbody, Td, Text, Th, Thead, Tr, useColorModeValue } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { TbCurrencyNaira } from 'react-icons/tb';
import { useSelector } from 'react-redux';
import { selectMyObject } from 'redux/slices/dailyInputSlice';

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
    <Flex
    flexDir="column"
  >
    <Flex
      w={["18rem","18rem","33rem","55rem"]}
      h={["4rem","4rem","5rem","5rem"]}
      boxShadow="lg"
      borderRadius="1rem 0 1rem 0"
      mt="2rem"
      bg= {divColor2}
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
              size={["","","lg","lg"]}
              display={{ base: 'none', md: 'block' }}
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
                         {myObject.food}
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
                         {myObject.transit}
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
                         {myObject.data}
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
                         {myObject.transfers}
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
                         {myObject.others}
                        </Td>
                      </Tr>
                      <Tr
                        display={{ base: 'flex', md: 'none' }}
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
                  </Table>
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