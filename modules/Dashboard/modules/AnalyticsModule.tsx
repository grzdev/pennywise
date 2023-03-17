/* eslint-disable react/no-unescaped-entities */
import { 
  Container, 
  Divider, 
  Flex, 
  Heading, 
  Stat, 
  StatArrow, 
  StatHelpText, 
  Text, 
  useColorModeValue 
} from '@chakra-ui/react'
import React from 'react'
import Head from "next/head"
import { TriangleUpIcon } from "@chakra-ui/icons"
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


const AnalyticsModule = () => {
  const divColor = useColorModeValue("white","#222636")
  const secondDivColor = useColorModeValue("linear-gradient(to right, #536976, #292e49)","#292c3d")
  const divGradient = useColorModeValue("linear-gradient(to bottom, #505285 0%, #585e92 12%, #65689f 25%, #7474b0 37%, #7e7ebb 50%, #8389c7 62%, #9795d4 75%, #a2a1dc 87%, #b5aee4 100%);","linear-gradient(to right, #6a85b6 0%, #bac8e0 100%);")
  const header = useColorModeValue("#777777", "white")
  const header2 = useColorModeValue("white", "white")
  const bgGradient = useColorModeValue("linear-gradient(to right, #536976, #292e49)","linear-gradient(to right, #4b79a1, #283e51);")

  const myObject = useSelector(selectMyObject)
  const Sum = myObject.food + myObject.data + myObject.others + myObject.transfers + myObject.transit
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
        mt={["1.5rem","1.5rem","4rem","5rem"]}
        >
        <Flex
          w={["21rem","21rem","34rem","40rem"]}
          h={["35rem","30rem","39rem","34rem"]}
          borderRadius="1rem 0 1rem 0"
          bg= {divColor}
          // bgGradient= {divGradient}
          // mb="5rem"
          boxShadow="lg"
          justifyContent="center"
          alignItems="center"
          flexDir="column"
        >
          <Flex
            flexDir="row"
            mb={["2rem","0.3rem","2rem","1rem"]}
            
            >
            <Flex
              mr={["1.2rem","1rem","7rem","12rem"]}
            >
              <Heading
                size={["xs","xs","md","md"]}
                color={header}
              >
                Last week's expense
              </Heading>
            </Flex>
            <Flex
              alignItems="center"
              color={header}
              fontWeight={500}
            >
              <Stat>
                <StatHelpText>
                  <StatArrow type='increase' />
                  23.36% last week
                </StatHelpText>
              </Stat>
              {/* <Text
                mt="-0.3rem"
              >
                <TriangleUpIcon/>
              </Text> */}
              {/* <Text
                fontSize={["0.7rem","1rem","1rem","1rem"]}
              >
                10% from last week
              </Text> */}
            </Flex>
          </Flex>
          <Flex
            w={["19rem","20rem","30rem","35rem"]}
            h={["21rem","21rem","25rem","20rem"]}
          >
            <InputBarchart/>
          </Flex>

          <Divider
            mt={["2rem","2rem","2rem","2rem"]}
          />

          <Flex 
            alignItems="center"
            mt={["1.9rem","1.9rem","2rem","2rem"]}
            color={header}
          >
            <Heading
              size={["sm","sm","md","md"]}
              mr={["2.5rem","2.5rem ","11rem","13rem"]}
            >
              Total Amount Spent
            </Heading>
            <Flex
              alignItems="center"
            >
              <Heading
                size={["xs","xs","md","md"]}
                mt={["0.1rem","0.1rem","-0.1rem","0.3rem"]}
                color="#21c902" 
              >
                <TbCurrencyNaira/>
              </Heading>
              <Heading
               size={["xs","xs","sm","md"]}
              >
                {Sum}
              </Heading>
            </Flex>
          </Flex>
        </Flex>

        <Flex
          w={["21rem","21rem","34rem","30rem"]}
          h={["24.5rem","24.5rem","29rem","34rem"]}
          // bgGradient= {divGradient}
          // ml={["","","","2rem"]}
          bg={bgGradient}
          borderRadius="1rem 0 1rem 0"
          boxShadow="lg"
          // justifyContent="center"
          alignItems="center"
          flexDir="column"
          mb={["8rem","4rem","4rem","0.1rem"]}
          color={header2}
        >
          <Heading
            color={header2}
            mt={["2.4rem","2.4rem","3rem","2rem"]}
            size={["md","md","md","md"]}
          >
            Most spent on categories
          </Heading>
          
          <Flex
            flexDir="row"
            alignItems="center"
          >

            <Flex
              flexDir="column"
              mr={["-4rem","-4rem","-7rem","-8rem"]}
              mt={["2.5rem","2.5rem","3rem","4rem"]}
            >
              <Flex
                alignItems="center"
              >
                <Text
                  fontSize={["1.5rem","1.5rem","1.8rem","1.8rem"]}
                  mr={["0.5rem","0.5rem","1rem","1rem"]}
                  color="#64c0ff"
                >
                  <IoFastFoodSharp/>
                </Text>
                <Heading
                  mr={["7rem","7rem","14rem","30rem"]}
                  size={["sm","sm","md","md"]}
                >
                  Food
                </Heading>
              </Flex>

              <Flex
                  alignItems="center"
                  mt={["1.6rem","1.6rem","2rem","2rem"]}
              >
                  <Text
                    fontSize={["1.5rem","1.5rem","1.8rem","1.8rem"]}
                    mr={["0.5rem","0.5rem","1rem","1rem"]}
                    color="#FF9232"
                  >
                    <IoBusOutline/>
                  </Text>
                  <Heading
                    mr={["7rem","7rem","14rem","30rem"]}
                    size={["sm","sm","md","md"]}
                  >
                    Transit
                  </Heading>
                </Flex>

                <Flex
                  alignItems="center"
                  mt={["1.6rem","1.6rem","2rem","2rem"]}
                >
                  <Text
                    fontSize={["1.5rem","1.5rem","1.8rem","1.8rem"]}
                    mr={["0.5rem","0.5rem","1rem","1rem"]}
                    color="#0de90d"
                  >
                    <IoWifi/>
                  </Text>
                  <Heading
                    mr={["7rem","7rem","14rem","30rem"]}
                    size={["sm","sm","md","md"]}
                  >
                    Data
                  </Heading>
                </Flex>

                <Flex
                  alignItems="center"
                  mt={["1.6rem","1.6rem","2rem","2rem"]}
                >
                  <Text
                    fontSize={["1.5rem","1.5rem","1.8rem","1.8rem"]}
                    mr={["0.5rem","0.5rem","1rem","1rem"]}
                    color="#ff3fb7"
                  >
                    <BiTransferAlt/>
                  </Text>
                  <Heading
                    mr={["7rem","7rem","14rem","30rem"]}
                    size={["sm","sm","md","md"]}
                  >
                    Transfers
                  </Heading>
                </Flex>

                <Flex
                  alignItems="center"
                  mt={["1.6rem","1.6rem","2rem","2rem"]}
                >
                  <Text
                    fontSize={["1.5rem","1.5rem","1.8rem","1.8rem"]}
                    mr={["0.5rem","0.5rem","1rem","1rem"]}
                    color="#5a5eff"
                  >
                    <BiDotsHorizontalRounded/>
                  </Text>
                  <Heading
                    mr={["7rem","7rem","14rem","30rem"]}
                    size={["sm","sm","md","md"]}
                  >
                    Others
                  </Heading>
                </Flex>
            </Flex>
            
            <Flex
              alignItems="center"
              flexDir="column"
              mt={["1rem","1rem","1rem","3rem"]}
            >
              <Flex
                mt={["1.6rem","1.6rem","2rem","1rem"]}
              >
                <Text
                mt={["0.2rem","0.1rem","0.1rem","0.3rem"]}
                fontSize={['1.1rem','1.1rem','1.5rem','1.1rem']}
                >
                  <TbCurrencyNaira/>
                </Text>
                <Text
                  fontSize={["1rem","1rem","1.2rem","1.1rem"]}
                  fontWeight={600}
                >
                  {myObject.food}
                </Text>
              </Flex>

              <Flex
               mt={["1.6rem","1.6rem","2rem","2.3rem"]}
              >
                <Text
                mt={["0.2rem","0.1rem","0.1rem","0.3rem"]}
                fontSize={['1.1rem','1.1rem','1.5rem','1.1rem']}
                >
                  <TbCurrencyNaira/>
                </Text>
                <Text
                  fontSize={["1rem","1rem","1.2rem","1.1rem"]}
                  fontWeight={600}
                >
                  {myObject.data}
                </Text>
              </Flex>

              <Flex
                mt={["1.6rem","1.6rem","2rem","2.3rem"]}
              >
                <Text
                mt={["0.2rem","0.1rem","0.1rem","0.3rem"]}
                fontSize={['1.1rem','1.1rem','1.5rem','1.1rem']}
                >
                  <TbCurrencyNaira/>
                </Text>
                <Text
                  fontSize={["1rem","1rem","1.2rem","1.1rem"]}
                  fontWeight={600}
                >
                  {myObject.transit}
                </Text>
              </Flex>

              <Flex
                mt={["1.6rem","1.6rem","2rem","2.3rem"]}
              >
                <Text
                mt={["0.2rem","0.1rem","0.1rem","0.3rem"]}
                fontSize={['1.1rem','1.1rem','1.5rem','1.1rem']}
                >
                  <TbCurrencyNaira/>
                </Text>
                <Text
                  fontSize={["1rem","1rem","1.2rem","1.1rem"]}
                  fontWeight={600}
                >
                  {myObject.transfers}
                </Text>
              </Flex>

              <Flex
                mt={["1.6rem","1.6rem","2rem","2rem"]}
              >
                <Text
                mt={["0.2rem","0.1rem","0.1rem","0.3rem"]}
                fontSize={['1.1rem','1.1rem','1.5rem','1.1rem']}
                >
                  <TbCurrencyNaira/>
                </Text>
                <Text
                  fontSize={["1rem","1rem","1.2rem","1.1rem"]}
                  fontWeight={600}
                >
                  {myObject.others}
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex> 
      </Flex>
    </Container>
  )
}

export default AnalyticsModule