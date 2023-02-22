import { 
  Flex, 
  Button, 
  Box, 
  Text, 
  SimpleGrid, 
  useColorModeValue, 
  Heading,
  Divider
} from '@chakra-ui/react'
import React from 'react'
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
import { 
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend
 } from "recharts"

// interface Props {
//     children?: React.ReactNode
// }

const DashBoardLandingPage = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const { user, logout } = useAuth()
  const header = useColorModeValue("#dedede","white")
  const SecondBox = useColorModeValue("#407adf","#70a1c8")
  const pieColor = useColorModeValue("#3361b1","#757eb0")
  const addButton = useColorModeValue("#0050d6","#1c5dd0")
  const color = useColorModeValue("#ff003d","#ff003d")

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
    <Flex
      flexDir="column"
    >
      <Flex
        flexDir="column"
        mt={["1.5rem","2rem","3rem","4rem"]}
        ml={["1rem","2rem","2rem","2rem"]}
      >
        <Heading>
          Dami👋,
        </Heading>
        <Text
          fontWeight={600}
          mt="-0.4rem"
        >
          What did you spend on today?
        </Text>
      </Flex>
      <Flex
        alignItems="center"
        justifyContent="center"
        mt={["1rem","2rem","1.5rem","2rem"]}
        // ml={["0.1rem","","-10rem","-2rem"]}
        mb="3rem"
       >  

        <Flex
          w={["20rem","20rem","33rem","60rem"]}
          h={["25rem","25rem","35rem","30rem"]}
          bg={SecondBox}
          borderRadius="1rem 1rem 0 1rem"
          // boxShadow= "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px"
          // boxShadow= "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"
          boxShadow= "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px"
          flexDir="column"
          // justifyContent="center"
          alignItems="center"
         >
          <Flex
            p={["3","3","4","5"]}
            color={header}
           >
            <Flex
             mr={["15rem","15rem","25rem","51rem"]}
            >
              <Text 
                fontSize={["1.7rem","1.7rem","2rem","3rem"]
              }>
                <HiCash/>
              </Text>
            </Flex>
            <Flex>
              <Text
                fontSize={["1.6rem","1.6rem","2rem","3rem"]}
              >
                <MdTrackChanges/>
              </Text>
            </Flex>
          </Flex>

          <Flex
            flexDir="column"
            alignItems="center"
            justifyContent="center"
            mt={["-1rem","-2rem","0.2rem","-3rem"]}
            color={header}
            >
            <Heading
              size={["sm","sm","lg","xl"]}
            >
              Total amount spent:
            </Heading>

            <Flex
              flexDir="row"
            >
              <Heading
                textAlign="center"
                color="#41ff00" 
                size={["sm","sm","lg","xl"]}
                mt={["0.1rem","0.1rem","-0.1rem","0.2rem"]}
              >
              <TbCurrencyNaira/>
              </Heading>
              <Heading
               size={["sm","sm","md","lg"]}
              >
                5,000
              </Heading>
            </Flex>
          </Flex>

          <Flex
            mt={["0.2rem","0.2rem","0.1rem","1rem"]}
          >
            <PieChart 
              width={250} 
              height={250}
            >
              <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill={pieColor} />
              <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
            </PieChart>
          </Flex>

          <Flex
            mt={["","","2.6rem","-2rem"]}
            >
            <Text
              color={header} 
              fontWeight={700}
              mr={["10.6rem","11rem","21rem","48rem"]}
              mt={["1.2rem","1rem","2rem",""]}
              fontSize="0.9rem"
            >
              13th Feb
            </Text>
            <Flex
              borderRadius="4rem 4rem 0 4rem"
              w={["3rem","3rem","5rem","5rem"]}
              h={["3rem","3rem","5rem","5rem"]}
              bg="#ff003d"
              mt={["0.4rem","-0.6rem","-0.4rem","-0.7rem"]}
              justifyContent="center"
              alignItems="center"
            >
              <Text>
                <AddIcon color="white" fontSize="1.3rem"/>
              </Text>
            </Flex>
          </Flex>


        </Flex>

      </Flex>

      <Divider
        orientation='horizontal'
        w="100%"
        mt={["2rem","2rem","2rem","2rem"]}
      />

      {/* <Flex
        mt={["","","","5rem"]}
      >

      </Flex> */}
    </Flex>
  )
}

export default DashBoardLandingPage