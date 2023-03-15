import { 
  Flex, 
  Button, 
  Box, 
  Text, 
  SimpleGrid, 
  useColorModeValue, 
  Heading,
  Divider,
  Popover,
  PopoverTrigger,
  useDisclosure,
  PopoverContent,
  PopoverHeader,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  PopoverFooter,
  others
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import router from "next/router";
import { MdTrackChanges } from "react-icons/md"
import { useAuth } from 'context/AuthContext';
import { AddIcon } from "@chakra-ui/icons"
import { HiCash } from "react-icons/hi"
import { TbCurrencyNaira } from "react-icons/tb"
import { 
  ChevronLeftIcon, 
  ChevronRightIcon, 
  MoonIcon, 
  SunIcon 
} from '@chakra-ui/icons';
import { useColorMode } from '@chakra-ui/react';
import Head from 'next/head'
import { 
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend
 } from "recharts"
 import InputModal from '../components/input-modal';
 import { useDispatch, useSelector } from 'react-redux';
 import { RootState } from 'redux/store';
 import { selectMyObject } from "../../../redux/slices/dailyInputSlice"
 import { motion } from 'framer-motion';

 interface DateTimeProps {
  className?: string;
}

interface DateTimeState {
  dateTime: Date;
}
const DashBoardLandingPage = ({ className }: DateTimeProps) => {
  
  const header = useColorModeValue("white","white")
  const SecondBox = useColorModeValue("#407adf","#70a1c8")
  const pieColor = useColorModeValue("#8ab7ff","#8ab4ff")
  const pieColor2 = useColorModeValue("#8ab7ff","#8ab4ff")
  const addButton = useColorModeValue("#0050d6","#1c5dd0")
  const color = useColorModeValue("#ff003d","#ff003d")
  const button = useColorModeValue("#4aafe9","#e3379b")
  const bg = useColorModeValue("#FF3CAC","#667eea")
  const bgGradient = useColorModeValue("linear-gradient(to right, #162961, #3969b9)","linear-gradient(to right, #6289ff, #28355e);")


  const myObject = useSelector(selectMyObject);
  const Sum = myObject.food + myObject.transit + myObject.data + myObject.transfers + myObject.others

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

  const dateOptions: Intl.DateTimeFormatOptions = { weekday: 'short', month: 'long', day: 'numeric' };
  const timeOptions: Intl.DateTimeFormatOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
 
  //PieChart data
  const data01 = [
    {
      "name": "Food",
      "value": 2000
    },
    {
      "name": "Transportation",
      "value": 500
    },
    {
      "name": "Data",
      "value": 500
    },
    {
      "name": "Mobile Transfers",
      "value": 1000
    },
    {
      "name": "Others",
      "value": 500
    }
  ];
  const data02 = [
    {
      "name": "Food",
      "value": 2000
    },
    {
      "name": "Transportation",
      "value": 500
    },
    {
      "name": "Data",
      "value": 500
    },
    {
      "name": "Mobile Transfers",
      "value": 1000
    },
    {
      "name": "Others",
      "value": 500
    },
  ];


  return (
    <>
       <Head>
            <title>Dashboard</title>
            <meta name="description" content="" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
      <Flex
        flexDir="column"
      >
        <Flex
          flexDir="column"
          mt={["0.8rem","2rem","3rem","4rem"]}
          ml={["1rem","2rem","2rem","2rem"]}
        >
          <Heading
            size={["lg","lg","xl","xl"]}
          >
            Dami👋,
          </Heading>
          <Text
            fontWeight={500}
            mt="-0.2rem"
            fontSize={["0.8rem","0.8rem","1rem","1rem"]}
          >
            What did you spend on today?
          </Text>
        </Flex>

        <Flex
          alignItems="center"
          justifyContent="center"
          mt={["1rem","2rem","1.5rem","2rem"]}
        >
          <Flex
            w={["20rem","20rem","33rem","60rem"]}
            h={["30rem","25rem","35rem","32rem"]}
            bg= {bgGradient}
            borderRadius="1rem 0 1rem 0"
          >
            <Flex
              flexDir="column"
            >
              <Flex
                flexDir="row"
                p={["2rem","2rem","3rem","3rem"]}
                gap={["8.5rem","8.5rem","16.8rem","43rem"]}
                color="white"
                >
                <Flex
                  flexDir="column"
                  alignItems="center"
                  // justifyContent="center"
                  w={["","","7rem",""]}
                  // ml={["","","-8rem",""]}  
                >
                  <Heading
                    size={["sm","sm","md","md"]}
                    mb="0.2rem"
                  >
                    Total spent
                  </Heading>
                  <Flex
                    textAlign="center"
                    alignItems="center"
                    // ml={["","","","-1rem"]
                  >
                    <Heading
                      size={["lg","xl","xl","2xl"]}
                      mr="-0.4rem"
                    >
                      <TbCurrencyNaira/>
                    </Heading>
                    <Heading
                      size={["md","lg","lg","xl"]}
                      mt={["-0.1rem","0.1rem","-0.1rem",""]}
                    >
                      {Sum}
                    </Heading>
                  </Flex>
                </Flex>
                

                <Flex>
                  <Text
                    fontSize={["1.9rem","1.9rem","3rem","3rem"]}
                    mt={["0.4rem","0.4rem","",""]}
                  >
                    <MdTrackChanges/>
                  </Text>
                </Flex>
              </Flex>

              <Flex
                mt={["-1.2rem","-1.2rem","-1rem","-4rem"]}
                alignItems="center"
                justifyContent="center"
                w={["","","",""]}
              >
                <PieChart 
                  width={250} 
                  height={250}
                >
                  <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={32} fill={pieColor} />
                  <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={42} outerRadius={75} fill={pieColor2} label />
                </PieChart>
              </Flex>

              <Flex
                justifyContent="center"
                alignItems="center"
                mt={["4.3rem","2rem","3rem","2rem"]}
                gap={["6.5rem","2.4rem","15rem","38rem"]}
                ml={["1rem","","","1.7rem"]}
              >
                <Heading
                  fontSize={["0.8rem","0.8rem","1rem","1.3rem"]}
                  color="white"
                >
                  {state.dateTime.toLocaleDateString('en-US', dateOptions)}
                </Heading>

                <InputModal/>
              </Flex>
            </Flex>

          </Flex>
        </Flex>

        <Divider
          orientation='horizontal'
          w="100%"
          mt={["5rem","5rem","3rem","3rem"]}
        />

        {/* <Flex
          mt={["","","","5rem"]}
        >

        </Flex> */}
      </Flex>
    </>
  )
}

export default DashBoardLandingPage