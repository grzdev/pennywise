/* eslint-disable react/no-unescaped-entities */
import { 
  Container,  
  Flex, 
  Heading, 
  useColorModeValue 
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Head from "next/head"
import { useSelector } from 'react-redux'
import Image from 'next/image'
import Notfound from "../../../images/notfound.png"
import AnalyticsContent from '../components/analytics-content'
import MobileNav from '../components/mobile-nav'
import { RootState } from 'redux/store'

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

const AnalyticsModule = ({ className }: DateTimeProps) => {
  //ColorMode
  const divColor = useColorModeValue("white","#222636")

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

  //Redux state
  const items = useSelector((state: RootState) => state.number.items);
  const sumOfCategoriesById: { [id: number]: number } = {};
  const sumOfCategories = items.reduce(
    (total, item) => total + item.food + item.data + item.transit + item.transfers + item.others,
    0
  );

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
          {sumOfCategories === 0 ? (
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