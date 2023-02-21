import { 
  Flex, 
  Button, 
  Box, 
  Text, 
  SimpleGrid, 
  useColorModeValue, 
  Heading
} from '@chakra-ui/react'
import React from 'react'
import router from "next/router";
import { useAuth } from 'context/AuthContext';
import { AddIcon } from "@chakra-ui/icons"
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
  const firstBox = useColorModeValue("white","white")
  const SecondBox = useColorModeValue("#3361b1","#757eb0")
  const pieColor = useColorModeValue("#4a80b8","#757eb0")
  const addButton = useColorModeValue("#0050d6","#1c5dd0")
  const color = useColorModeValue("white","white")

  const data01 = [
    {
      "name": "Group A",
      "value": 400
    },
    {
      "name": "Group B",
      "value": 300
    },
    {
      "name": "Group C",
      "value": 300
    },
    {
      "name": "Group D",
      "value": 200
    },
    {
      "name": "Group E",
      "value": 278
    },
    {
      "name": "Group F",
      "value": 189
    }
  ];
  const data02 = [
    {
      "name": "Group A",
      "value": 2400
    },
    {
      "name": "Group B",
      "value": 4567
    },
    {
      "name": "Group C",
      "value": 1398
    },
    {
      "name": "Group D",
      "value": 9800
    },
    {
      "name": "Group E",
      "value": 3908
    },
    {
      "name": "Group F",
      "value": 4800
    }
  ];
      
  

  return (
    <Flex
      flexDir="column"
    >
      <Flex
        flexDir="column"
        mt={["1rem","2rem","2rem","2rem"]}
        ml={["1rem","2rem","2rem","2rem"]}
      >
        <Heading>
          Dami👋
        </Heading>
        <Text
          fontWeight={600}
        >
          What did you spend on today?
        </Text>
      </Flex>
      <Flex
        alignItems="center"
        justifyContent="center"
        mt={["3rem","2rem","4rem","5rem"]}
        ml={["0.1rem","","-10rem","-2rem"]}
      >  
        <SimpleGrid
          // columns={6}
        >
          <Flex
            flexDir={["column","column", "column" , "column"]}
            gap={["2rem","3rem","4rem","4rem"]}
            // w={["","","","90rem"]}
          >
            <Flex
              flexDir="row"
              borderRadius="1rem"
              alignItems="center"
              justifyContent="center"        
            >
              <Flex
                w={["9rem","9rem","10rem","10rem"]}
                h={["9rem","9rem","10rem","10rem"]}
                color="white"
                bg={firstBox}
                borderRadius="0.7rem 0 0 0"
                justifyContent="center"
                alignItems="center"
              >
                <PieChart 
                  width={100} 
                  height={100}
                >
                <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill={pieColor} />
                {/* <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label /> */}
              </PieChart>

              </Flex>
              <Box
                color="black"
                w={["15rem","15rem","20rem","20rem"]}
                bg={SecondBox}
                h={["9rem","15rem","10rem","10rem"]}
                borderRadius="0 0.7rem 0.7rem 0"
              >

              </Box>
            </Flex>

            <Flex
              flexDir="row"
              borderRadius="1rem"
              alignItems="center"
              justifyContent="center"        
            >
              <Flex
                w={["9rem","9rem","10rem","10rem"]}
                h={["9rem","9rem","10rem","10rem"]}
                color="white"
                bg={firstBox}
                borderRadius="0.7rem 0 0 0"
                justifyContent="center"
                alignItems="center"
              >
                <PieChart 
                  width={100} 
                  height={100}
                >
                <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill={pieColor} />
                {/* <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label /> */}
              </PieChart>

              </Flex>
              <Box
                color="black"
                w={["15rem","15rem","20rem","20rem"]}
                bg={SecondBox}
                h={["9rem","15rem","10rem","10rem"]}
                borderRadius="0 0.7rem 0.7rem 0"
              >

              </Box>
            </Flex>
            

            <Flex
              flexDir="row"
              alignItems="center"
              justifyContent="center"
        
            >
              <Flex
                w={["9rem","9rem","10rem","10rem"]}
                h={["9rem","9rem","10rem","10rem"]}
                bg={firstBox}
                color="white"
                borderRadius="0.7rem 0 0 0"
                justifyContent="center"
                alignItems="center"
              >
                <PieChart 
                  width={100} 
                  height={100}
                >
                  <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill={pieColor} />
                  {/* <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label /> */}
                </PieChart>
              </Flex>
              <Box
                color="black"
                w={["15rem","15rem","20rem","20rem"]}
                bg={SecondBox}
                h={["9rem","15rem","10rem","10rem"]}
                borderRadius="0 0.7rem 0.7rem 0"
              >

              </Box>
            </Flex>
          </Flex>
        </SimpleGrid>

      </Flex>

      <Flex
        w={["4rem","5rem","5rem","6rem"]}
        h={["4rem","5rem","5rem","6rem"]}
        bg={addButton}
        borderRadius="full"
        ml={["21rem","","36rem","70rem"]}
        mt={["37rem","","38rem","35rem"]}
        justifyContent="center"
        alignItems="center"
        position="fixed"
      >
        <AddIcon color={color} fontSize="2rem"/>
      </Flex>
    </Flex>
  )
}

export default DashBoardLandingPage