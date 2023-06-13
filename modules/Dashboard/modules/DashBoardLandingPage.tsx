/* eslint-disable react/no-unescaped-entities */
import { 
  Flex, 
  Button, 
  Box, 
  Text, 
  SimpleGrid, 
  useColorModeValue, 
  Heading,
  Divider,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { TbCurrencyNaira } from "react-icons/tb"
import { 
  MoonIcon, 
  SunIcon 
} from '@chakra-ui/icons';
import { useColorMode } from '@chakra-ui/react';
import Head from 'next/head'
 import InputModal from '../components/input-modal';
 import { useDispatch, useSelector } from 'react-redux';
 import { selectMyObject } from "../../../redux/slices/dailyInputSlice"
 import { motion } from 'framer-motion';
 import InputPiechart from '../components/piechart';
import { FaGem } from 'react-icons/fa';
import { auth } from 'config/firebase';
import { RiMenu4Line } from 'react-icons/ri';
import Link from 'next/link';
import { IoExitOutline } from 'react-icons/io5';
import LogoutModal from '../components/logout-modal';
import { RootState } from 'redux/store';

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
}

const DashBoardLandingPage = ({ className }: DateTimeProps) => {
  
  //ColorMode
  const bgGradient = useColorModeValue("linear-gradient(to right, #162961, #3969b9)","linear-gradient(to right, #28355e, #4e67b6);")
  const headerColor = useColorModeValue("#070D59","#c6dbfb")

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

  //Get display name from Firebase
  const user = auth.currentUser
  const displayName = user?.displayName


  //Get time of the day
  const currentDate = new Date();
  const currentHour = currentDate.getHours();

  let timeOfDay: string;

  if (currentHour >= 5 && currentHour < 12) {
    timeOfDay = "morning";
  } else if (currentHour >= 12 && currentHour < 18) {
    timeOfDay = "afternoon";
  } else {
    timeOfDay = "evening";
  }

 
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onClose, onOpen } = useDisclosure()
  const logout = useColorModeValue("red","#C6dbfb")
  
  //Redux state
  const items = useSelector((state: RootState) => state.number.items);
  const sumOfCategoriesById: { [id: number]: number } = {};
  const sumOfCategories = items.reduce(
    (total, item) => total + item.food + item.data + item.transit + item.transfers + item.others,
    0
  );

  items.forEach((item: Item) => {
    const id = item.id || 0;
    const sumOfCategories =
      item.food + item.data + item.transit + item.transfers + item.others;

    if (sumOfCategoriesById[id]) {
      sumOfCategoriesById[id] += sumOfCategories;
    } else {
      sumOfCategoriesById[id] = sumOfCategories;
    }
  });

  const calculateSum = (item: Item) => {
    return item.food + item.data + item.transit + item.transfers + item.others;
  };
  const totalSum = useSelector((state: RootState) => state.number.totalSum);
  
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
          flexDir="row"
          gap="auto"
          mt={["2rem","0rem","1.2rem","2rem"]}
          ml={["0.7rem","","",""]}
        >
          <Flex
            flexDir="column"
          >
            <Heading
              size={["lg","lg","xl","xl"]}
            >
            {displayName ? (
                <Text>Hey {displayName.split(' ')[0]},</Text>
              ) : (
                <Text>Hey,</Text>
              )}
            </Heading>
            <Text
              fontWeight={500}
              mt="0.1rem"
              fontSize={["0.8rem","0.8rem","1rem","1rem"]}
            >
              {/* What did you spend on today? */}
              {timeOfDay === "morning" && <h1>Good morning, have a productive day ⛅</h1>}
              {timeOfDay === "afternoon" && <h1>Wash your hands, its lunch time 🍲!</h1>}
              {timeOfDay === "evening" && <h1>Have a good evening ✨</h1>}
            </Text>
          </Flex>

            {/* mobile nav */}
            <Flex
                ml="auto"
                display={{ base: 'flex', md: 'none' }}
            >
              <Button  variant="ghost" onClick={onOpen}>
                <Text
                  fontSize="1.5rem"
                >
                <RiMenu4Line/>  
                </Text>
              </Button>
              <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
              >
                <DrawerOverlay />
                <DrawerContent>
                  <DrawerCloseButton mt="2.8rem" mr="1rem" fontSize="1.1rem" />
                  <DrawerHeader>
                    <Flex
                      justifyContent="center"
                      alignItems="center"
                      mr="10.5rem"
                      mt="2.4rem" 
                    >
                        <Flex
                          mt={["0.1rem", "-0.2rem", "-0.1rem", "-0.1rem"]}
                        >
                          <Text
                            mt="0.1rem"
                            fontSize="1.4rem"
                          >
                            <FaGem
                              color={headerColor}
                            />
                          </Text>
                        </Flex>
                        <Heading
                          size={["sm","sm","md","md"]}
                          ml="0.2rem"
                          fontFamily="'Lato', sans-serif"
                          color={headerColor}
                        >
                          pennywise
                        </Heading>
                    </Flex>
                  </DrawerHeader>

                  <DrawerBody>
                    <Flex
                      flexDir="column"
                      gap="1.2rem"
                      mt="4rem"
                    >
                      <Link
                        href="/dashboard"
                      >
                        <Text
                          fontSize="1.3rem"
                        >
                          dashboard
                        </Text>
                      </Link>

                      <Divider/>

                      <Link
                        href="/analytics"
                      >
                        <Text
                          fontSize="1.3rem"
                        >
                          analytics
                        </Text>
                      </Link>

                      <Divider/>

                      <Link
                        href="/budget"
                      >
                        <Text
                          fontSize="1.3rem"
                        >
                          budget
                        </Text>
                      </Link>

                      <Divider/>

                    </Flex>
                  </DrawerBody>

                  <DrawerFooter>
                    <Flex
                      gap="11rem"
                    >
                      <Flex>
                        <LogoutModal/>
                      </Flex>
                      <Button 
                        onClick={toggleColorMode}
                      >
                        {colorMode === 'light' ? <MoonIcon/> : <SunIcon/>}
                      </Button>
                    </Flex>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </Flex>
        </Flex>

        <Flex
          alignItems="center"
          justifyContent="center"
          mt={["1.7rem","1rem","1.5rem","2rem"]}
        >
          <Flex
            w={["20rem","20rem","33rem","60rem"]}
            h={["32rem","32rem","36.5rem","34rem"]}
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
                      {totalSum === 0 ? (
                        <p>XXX</p>
                      ) : (
                        <p>
                          {/* {items.map((item: Item)=>(
                            <div key={item.id}>
                             {calculateSum(item)}
                            </div>
                          ))} */}
                          {totalSum}
                        </p>
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
                // mt={["-1rem","2rem","-1.5rem","-4rem"]}
                mt={["1rem","1rem","-1.5rem","-4rem"]}
                alignItems="center"
                justifyContent="center"
                w={["","","",""]}
              >
                <InputPiechart />
              </Flex>

              <Flex
                justifyContent="center"
                alignItems="center"
                mt={["3.8rem","4.3rem","4rem","2rem"]}
                gap={["7.3rem","7rem","15rem","38rem"]}
                ml={["1rem","","","1rem"]}
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

        </Flex>

      </Flex>
    </>
  )
}

const MobileNav = () =>{
  const bgGradient2 = useColorModeValue("white","#28355e")
  const bgGradient = useColorModeValue("linear-gradient(to right, #162961, #3969b9)","linear-gradient(to right, #28355e, #4e67b6);")
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

  //Redux state
  const totalSum = useSelector((state: RootState) => state.number.totalSum);
  const items = useSelector((state: RootState) => state.number.items);
  const sumOfCategories = items.reduce(
    (total, item) => total + item.food + item.data + item.transit + item.transfers + item.others,
    0
  );
  const calculateSum = (item: Item) => {
    return item.food + item.data + item.transit + item.transfers + item.others;
  };

  return(
    <Flex
      flexDir="column"
      gap="2rem"
      display={{ base: 'flex', md: 'none' }}
    >
      <Flex
        w="21rem"
        h="19rem"
        bg= {bgGradient}
        borderRadius="1rem 0 1rem 0"
        flexDir="column"
        color="white"
        boxShadow="xl"
      >
        <Flex
          p="2rem"
        >
          <Heading
            size="xs"
          >
           {state.dateTime.toLocaleDateString('en-US', dateOptions)}
          </Heading>

          <Text
            fontSize="1.4rem"
            ml="auto"
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
              mr="-0.2rem"
            >
              <TbCurrencyNaira/>
            </Heading>
            <Heading
              size="xl"
            >  
              {totalSum === 0 ? (
                <p>XXX</p>
              ) : (
                <p>
                  {/* {items.map((item: Item)=>(
                    <div key={item.id}>
                     {calculateSum(item)}
                    </div>
                  ))} */}
                  {totalSum}
                </p>
              )}
            </Heading>
          </Flex>
        </Flex>
      </Flex>

      <Flex
        w="21rem"
        h="26.5rem"
        bg= {bgGradient2}
        borderRadius="1rem 0 1rem 0"
        mb="8rem"
        boxShadow="lg"
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
          ml="14rem"
        >
          <InputModal/>
        </Flex>
      </Flex>
    </Flex>
  )
}
export default DashBoardLandingPage