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
import AnalyticsContent from '../components/analytics-content'
import MobileNav from '../components/mobile-nav'

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

  // const result = Object.keys(myObject).map((key: string | number) => {
  //   return {
  //     key: key,
  //     value: myObject[key]
  //   }
  // })

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
        mt={["1rem","1.5rem","4rem","5rem"]}
        >
        
        <MobileNav/>
        
        <Flex
          w={["21rem","21rem","39rem","62rem"]}
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
            <AnalyticsContent />
          )}
        </Flex>

      </Flex>
    </Container>
  )
}

export default AnalyticsModule