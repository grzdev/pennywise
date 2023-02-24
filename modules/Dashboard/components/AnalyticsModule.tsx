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


const AnalyticsModule = () => {
  const divColor = useColorModeValue("white","#171923")
  const divGradient = useColorModeValue("linear-gradient(to top, #505285 0%, #585e92 12%, #65689f 25%, #7474b0 37%, #7e7ebb 50%, #8389c7 62%, #9795d4 75%, #a2a1dc 87%, #b5aee4 100%);","linear-gradient(to top, #6a85b6 0%, #bac8e0 100%);")
  const header = useColorModeValue("#777777", "white")

  const data = [
    {
      name: 'M',
      Food: 2000,
      Transportation: 500,
      Data: 250,
      Transfers: 1000,
      Others: 750,
    },
    {
      name: 'T',
      Food: 2500,
      Transportation: 500,
      Data: 550,
      Transfers: 1500,
      Others: 900,
    },
    {
      name: 'W',
      Food: 1500,
      Transportation: 400,
      Data: 500,
      Transfers: 500,
      Others: 300,
    },
    {
      name: 'T',
      Food: 500,
      Transportation: 500,
      Data: 1000,
      Transfers: 2000,
      Others: 750,
    },
    {
      name: 'F',
      Food: 2000,
      Transportation: 1000,
      Data: 2000,
      Transfers: 1000,
      Others: 3500,
    },
    {
      name: 'S',
      Food: 3000,
      Transportation: 100,
      Data: 3050,
      Transfers: 1500,
      Others: 150,
    },
    {
      name: 'S',
      Food: 1000,
      Transportation: 100,
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
        >
        <Flex
          w={["21rem","20rem","34rem","60rem"]}
          h={["35rem","30rem","39rem","34rem"]}
          borderRadius="1rem 1rem 0 1rem"
          bg= {divColor}
          // bgGradient= {divGradient}
          mt={["3rem","3rem","4rem","4rem"]}
          mb="1 0rem"
          boxShadow="2xl"
          justifyContent="center"
          alignItems="center"
          flexDir="column"
        >
          <Flex
            flexDir="row"
            mb={["2rem","1rem","2rem","1rem"]}
            
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
            // mt={["","","","2rem"]}
            // mr={["","","","-2rem"]}
            // justifyContent="center"
            // alignItems="center"
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
                <Bar dataKey="Food" stackId="a" fill="#2897e4" />
                <Bar dataKey="Transportation" stackId="a" fill="#ff9232" />
                <Bar dataKey="Data" stackId="a" fill="#36cf36" />
                <Bar dataKey="Transfers" stackId="a" fill="#e4292a" />
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
      </Flex>
    </Container>
  )
}

export default AnalyticsModule