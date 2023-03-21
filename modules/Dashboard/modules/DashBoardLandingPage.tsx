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
 import InputModal from '../components/input-modal';
 import { useDispatch, useSelector } from 'react-redux';
 import { RootState } from 'redux/store';
 import { selectMyObject } from "../../../redux/slices/dailyInputSlice"
 import { motion } from 'framer-motion';
 import InputPiechart from '../components/piechart';
import { FaGem } from 'react-icons/fa';

 interface DateTimeProps {
  className?: string;
}

interface DateTimeState {
  dateTime: Date;
}
const DashBoardLandingPage = ({ className }: DateTimeProps) => {
  
  const header = useColorModeValue("white","white")
  const SecondBox = useColorModeValue("#407adf","#70a1c8")
  const addButton = useColorModeValue("#0050d6","#1c5dd0")
  const color = useColorModeValue("#ff003d","#ff003d")
  const button = useColorModeValue("#4aafe9","#e3379b")
  const bg = useColorModeValue("#FF3CAC","#667eea")
  const bgGradient = useColorModeValue("linear-gradient(to right, #162961, #3969b9)","linear-gradient(to right, #28355e, #28355e);")

  const [myState, setMyState] = useState('');

  //Retrieved state
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
          mt={["2.5rem","2.5rem","3rem","4rem"]}
          ml={["1rem","2rem","2rem","2rem"]}
        >
          <Heading
            size={["lg","lg","xl","xl"]}
          >
            Hey👋
          </Heading>
          <Text
            fontWeight={500}
            mt="-0.2rem"
            fontSize={["0.8rem","0.8rem","1rem","1rem"]}
          >
            {/* What did you spend on today? */}
          </Text>
        </Flex>

        <Flex
          alignItems="center"
          justifyContent="center"
          mt={["1rem","1rem","1.5rem","2rem"]}
        >
          <Flex
            w={["20rem","20rem","33rem","60rem"]}
            h={["32rem","32rem","35rem","32rem"]}
            bg= {bgGradient}
            borderRadius="1rem 0 1rem 0"
            boxShadow="2xl"
            display={{ base: 'none', md: 'block' }} 
          >
            <Flex
              flexDir="column"
            >
              <Flex
                flexDir="row"
                p={["2rem","2rem","2.8rem","3rem"]}
                gap={["8.5rem","8.5rem","16.8rem","43rem"]}
                color="white"
                >
                <Flex
                  flexDir="column"
                  alignItems="center"
                  w={["","","7rem",""]}
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
                  >
                    <Heading
                      size={["lg","xl","xl","2xl"]}
                      mr="-0.1rem"
                    >
                      <TbCurrencyNaira/>
                    </Heading>
                    <Heading
                      size={["md","lg","lg","xl"]}
                      mt={["-0.01rem","0.1rem","-0.1rem",""]}
                    >
                      {myObject.food === 0 ? (
                        <p>XXX</p>
                      ) : (
                        
                        <p>{Sum}</p>
                      )}
                    </Heading>
                  </Flex>
                </Flex>
                

                <Flex>
                  <Text
                    fontSize={["1.9rem","1.9rem","2.1rem","2.5rem"]}
                    mt={["0.4rem","0.4rem","",""]}
                  >
                    <FaGem/>
                  </Text>
                </Flex>
              </Flex>

              <Flex
                mt={["1rem","-1.2rem","-1rem","-4rem"]}
                alignItems="center"
                justifyContent="center"
                w={["","","",""]}
              >
                <InputPiechart />
              </Flex>

              <Flex
                justifyContent="center"
                alignItems="center"
                mt={["3.8rem","4.3rem","3rem","2rem"]}
                gap={["7.3rem","7rem","15rem","38rem"]}
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

          <MobileNav/>          

          {/* <Flex
            w={["","","","33rem"]}
            h={["","","","30rem"]}
            bg= {bgGradient}
            borderRadius="1rem 0 1rem 0"
          >

          </Flex> */}
        </Flex>

        {/* <Divider
          orientation='horizontal'
          w="100%"
          mt={["10rem","10rem","3rem","3rem"]}
        /> */}
      </Flex>
    </>
  )
}

const MobileNav = () =>{
  const bgGradient2 = useColorModeValue("#white","#28355e")
  const bgGradient = useColorModeValue("linear-gradient(to right, #162961, #3969b9)","linear-gradient(to right, #28355e, #28355e);")
  const myObject = useSelector(selectMyObject)
  
  const [myState, setMyState] = useState('');;
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


  return(
    <Flex
      flexDir="column"
      gap="2rem"
      display={{ base: 'flex', md: 'none' }}
    >
      <Flex
        w="21.5rem"
        h="18.5rem"
        bg= {bgGradient}
        borderRadius="1rem 0 1rem 0"
        flexDir="column"
        color="white"
        boxShadow="2xl"
      >
        <Flex
          p="2rem"
          gap="7rem"
        >
          <Heading
            size="md"
          >
           {state.dateTime.toLocaleDateString('en-US', dateOptions)}
          </Heading>

          <Text
            fontSize="1.6rem"
          >
            <FaGem/>
          </Text>
        </Flex>

        <Flex
          flexDir="column"
          mt="5rem"
          p="2rem"
        >
          <Heading
            size="sm"
          >
           Total spent
          </Heading>
          <Flex
            textAlign="center"
            alignItems="center"
            ml="-0.5rem"
          >
            <Heading
              size="2xl"
              mr="-0.4rem"
            >
              <TbCurrencyNaira/>
            </Heading>
            <Heading
              size="xl"
            >  
              {myObject.food === 0 ? (
                <p>XXX</p>
              ) : (
                
                <p>{Sum}</p>
              )}
            </Heading>
          </Flex>
        </Flex>
      </Flex>

      <Flex
        w="21.5rem"
        h="28rem"
        bg= {bgGradient2}
        borderRadius="1rem 0 1rem 0"
        mb="12rem"
        boxShadow="2xl"
        flexDir="column"
      >
        <Flex
          flexDir="column"
          alignItems="center"
          justifyContent="center"
          mt="4rem"
        >
          <Heading
          >
            <InputPiechart />
          </Heading>
        </Flex>

        <Flex
          mt="1.5rem"
          ml="15.5rem"
        >
          <InputModal/>
        </Flex>
      </Flex>
    </Flex>
  )
}
export default DashBoardLandingPage