/* eslint-disable react/no-unescaped-entities */
import { 
  Container, 
  Divider, 
  Flex, 
  Heading, 
  Text, 
  useColorModeValue 
} from '@chakra-ui/react'
import React from 'react'
import { 
  BarChart, 
  Bar, 
  Cell, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';
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


const AnalyticsModule = () => {
  const divColor = useColorModeValue("white","#292c3d")
  const divGradient = useColorModeValue("linear-gradient(to bottom, #505285 0%, #585e92 12%, #65689f 25%, #7474b0 37%, #7e7ebb 50%, #8389c7 62%, #9795d4 75%, #a2a1dc 87%, #b5aee4 100%);","linear-gradient(to right, #6a85b6 0%, #bac8e0 100%);")
  const header = useColorModeValue("#777777", "white")

  const data = [
    {
      name: 'M',
      Food: 2000,
      Transit: 500,
      Data: 250,
      Transfers: 1000,
      Others: 750,
    },
    {
      name: 'T',
      Food: 2500,
      Transit: 500,
      Data: 550,
      Transfers: 1500,
      Others: 900,
    },
    {
      name: 'W',
      Food: 1500,
      Transit: 400,
      Data: 500,
      Transfers: 500,
      Others: 300,
    },
    {
      name: 'T',
      Food: 500,
      Transit: 500,
      Data: 1000,
      Transfers: 2000,
      Others: 750,
    },
    {
      name: 'F',
      Food: 2000,
      Transit: 1000,
      Data: 2000,
      Transfers: 1000,
      Others: 3500,
    },
    {
      name: 'S',
      Food: 3000,
      Transit: 100,
      Data: 3050,
      Transfers: 1500,
      Others: 150,
    },
    {
      name: 'S',
      Food: 1000,
      Transit: 100,
      Data: 1050,
      Transfers: 1000,
      Others: 750,
    },
  ];


  return (
    <Container
      centerContent
    >
      <Flex
        justifyContent="center"
        alignItems="center"
        flexDir="column"
        >
        <Flex
          w={["21rem","20rem","34rem","60rem"]}
          h={["35rem","30rem","39rem","34rem"]}
          borderRadius="1rem 1rem 0 1rem"
          bg= {divColor}
          // bgGradient= {divGradient}
          mt={["1.5rem","1.5rem","4rem","4rem"]}
          mb="5rem"
          boxShadow="xl"
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
                size={["xs","xs","md","lg"]}
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
              <Text
                mt="-0.3rem"
              >
                <TriangleUpIcon/>
              </Text>
              <Text
                fontSize={["0.7rem","1rem","1rem","1rem"]}
              >
                10% from last week
              </Text>
            </Flex>
          </Flex>
          <Flex
            w={["19rem","20rem","30rem","50rem"]}
            h={["21rem","21rem","25rem","20rem"]}
          >
            <ResponsiveContainer 
              width="100%" 
              height="100%"
            >
              <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 10,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="2 2" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Food" stackId="a" fill="#2897e4"/>
                <Bar dataKey="Transit" stackId="a" fill="#ff9232" />
                <Bar dataKey="Data" stackId="a" fill="#36cf36" />
                <Bar dataKey="Transfers" stackId="a" fill="#f00096" />
                <Bar dataKey="Others" stackId="a" fill="#1e21a8" />
              </BarChart>
            </ResponsiveContainer>
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
              size={["sm","sm","md","lg"]}
              mr={["2.5rem","2.5rem ","11rem","13rem"]}
            >
              Total Amount Spent
            </Heading>
            <Flex
              alignItems="center"
            >
              <Heading
                size={["xs","xs","md","lg"]}
                mt={["0.1rem","0.1rem","-0.1rem","0.2rem"]}
                color="#21c902" 
              >
                <TbCurrencyNaira/>
              </Heading>
              <Heading
               size={["xs","xs","sm","lg"]}
              >
                20,000
              </Heading>
            </Flex>
          </Flex>
        </Flex>

        <Flex
          w={["21rem","21rem","34rem","60rem"]}
          h={["25rem","25rem","30rem","30rem"]}
          // bgGradient= {divGradient}
          bg={divColor}
          borderRadius="1rem 1rem 0 1rem"
          boxShadow="xl"
          // justifyContent="center"
          alignItems="center"
          flexDir="column"
          mb="20rem"
          color={header}
        >
          <Heading
            color={header}
            mt={["2.4rem","2.4rem","3rem","2rem"]}
            size={["md","md","lg","lg"]}
          >
            Most spent on categories
          </Heading>
          
          <Flex
            flexDir="row"
            alignItems="center"
          >

            <Flex
              flexDir="column"
              mr={["-1.7rem","-1.7rem","-3rem","8rem"]}
              mt={["2.5rem","2.5rem","3rem","2rem"]}
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
                  size={["sm","sm","md","lg"]}
                >
                  Food
                </Heading>
              </Flex>

              <Flex
                  alignItems="center"
                  mt={["1.6rem","1.6rem","2rem","1rem"]}
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
                    size={["sm","sm","md","lg"]}
                  >
                    Transit
                  </Heading>
                </Flex>

                <Flex
                  alignItems="center"
                  mt={["1.6rem","1.6rem","2rem","1rem"]}
                >
                  <Text
                    fontSize={["1.5rem","1.5rem","1.8rem","1.8rem"]}
                    mr={["0.5rem","0.5rem","1rem","1rem"]}
                    color="#36CF36"
                  >
                    <IoWifi/>
                  </Text>
                  <Heading
                    mr={["7rem","7rem","14rem","30rem"]}
                    size={["sm","sm","md","lg"]}
                  >
                    Data
                  </Heading>
                </Flex>

                <Flex
                  alignItems="center"
                  mt={["1.6rem","1.6rem","2rem","1rem"]}
                >
                  <Text
                    fontSize={["1.5rem","1.5rem","1.8rem","1.8rem"]}
                    mr={["0.5rem","0.5rem","1rem","1rem"]}
                    color="#f00096"
                  >
                    <BiTransferAlt/>
                  </Text>
                  <Heading
                    mr={["7rem","7rem","14rem","30rem"]}
                    size={["sm","sm","md","lg"]}
                  >
                    Transfers
                  </Heading>
                </Flex>

                <Flex
                  alignItems="center"
                  mt={["1.6rem","1.6rem","2rem","1rem"]}
                >
                  <Text
                    fontSize={["1.5rem","1.5rem","1.8rem","1.8rem"]}
                    mr={["0.5rem","0.5rem","1rem","1rem"]}
                    color="#2f33ff"
                  >
                    <BiDotsHorizontalRounded/>
                  </Text>
                  <Heading
                    mr={["7rem","7rem","14rem","30rem"]}
                    size={["sm","sm","md","lg"]}
                  >
                    Others
                  </Heading>
                </Flex>
            </Flex>
            
            <Flex
              alignItems="center"
              flexDir="column"
              mt={["1rem","1rem","1rem","1.5rem"]}
            >
              <Flex
                mt={["1.6rem","1.6rem","2rem","1rem"]}
              >
                <Text
                mt={["0.2rem","0.1rem","0.1rem","0.3rem"]}
                fontSize={['1.1rem','1.1rem','1.5rem','1.7rem']}
                >
                  <TbCurrencyNaira/>
                </Text>
                <Text
                  fontSize={["1rem","1rem","1.2rem","1.6rem"]}
                  fontWeight={600}
                >
                  20,000
                </Text>
              </Flex>

              <Flex
               mt={["1.6rem","1.6rem","2rem","1rem"]}
              >
                <Text
                mt={["0.2rem","0.1rem","0.1rem","0.3rem"]}
                fontSize={['1.1rem','1.1rem','1.5rem','1.7rem']}
                >
                  <TbCurrencyNaira/>
                </Text>
                <Text
                  fontSize={["1rem","1rem","1.2rem","1.6rem"]}
                  fontWeight={600}
                >
                  10,000
                </Text>
              </Flex>

              <Flex
                mt={["1.6rem","1.6rem","2rem","1rem"]}
              >
                <Text
                mt={["0.2rem","0.1rem","0.1rem","0.3rem"]}
                fontSize={['1.1rem','1.1rem','1.5rem','1.7rem']}
                >
                  <TbCurrencyNaira/>
                </Text>
                <Text
                  fontSize={["1rem","1rem","1.2rem","1.6rem"]}
                  fontWeight={600}
                >
                  5,000
                </Text>
              </Flex>

              <Flex
                mt={["1.6rem","1.6rem","2rem","1rem"]}
              >
                <Text
                mt={["0.2rem","0.1rem","0.1rem","0.3rem"]}
                fontSize={['1.1rem','1.1rem','1.5rem','1.7rem']}
                >
                  <TbCurrencyNaira/>
                </Text>
                <Text
                  fontSize={["1rem","1rem","1.2rem","1.6rem"]}
                  fontWeight={600}
                >
                  6,000
                </Text>
              </Flex>

              <Flex
                mt={["1.6rem","1.6rem","2rem","1rem"]}
              >
                <Text
                mt={["0.2rem","0.1rem","0.1rem","0.3rem"]}
                fontSize={['1.1rem','1.1rem','1.5rem','1.7rem']}
                >
                  <TbCurrencyNaira/>
                </Text>
                <Text
                  fontSize={["1rem","1rem","1.2rem","1.6rem"]}
                  fontWeight={600}
                >
                  9,000
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