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
  PopoverFooter
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
 import InputModal from '../components/input-modal';

// interface Props {
//     children?: React.ReactNode
// }

const DashBoardLandingPage = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const { user, logout } = useAuth()

  const { onOpen, onClose, isOpen } = useDisclosure()
  const firstFieldRef = React.useRef(null)
  
  const header = useColorModeValue("white","white")
  const SecondBox = useColorModeValue("#407adf","#70a1c8")
  const pieColor = useColorModeValue("#3e4ce2","#c42abe")
  const pieColor2 = useColorModeValue("#6ea4ff","#4bbdff")
  const addButton = useColorModeValue("#0050d6","#1c5dd0")
  const color = useColorModeValue("#ff003d","#ff003d")
  const button = useColorModeValue("#4aafe9","#e3379b")
  const bg = useColorModeValue("#FF3CAC","#667eea")
  const bgGradient = useColorModeValue("linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)","linear-gradient(135deg, #667eea 0%, #764ba2 100%)")
  // linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%) BLUE TO PURPLE
// background-image: linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%);
// background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);background-color: #8BC6EC;
// background-image: linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%);background-color: #21D4FD;
// background-image: linear-gradient(19deg, #21D4FD 0%, #B721FF 100%);
// background-image: linear-gradient(180deg, #52ACFF 25%, #FFE32C 100%);
// background-image: linear-gradient(45deg, #FA8BFF 0%, #2BD2FF 52%, #2BFF88 90%);






  
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
        // ml={["0.1rem","","-10rem","-2rem"]}
        mb="7rem"
       >  

        <Flex
          w={["20rem","20rem","33rem","60rem"]}
          h={["30rem","25rem","35rem","30rem"]}
          // background= {bg}
          bg= {bgGradient}
          borderRadius="1rem 0 1rem 0"
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
            mt={["0.5rem","-2rem","0.2rem","-3rem"]}
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
                color={header} 
                size={["sm","sm","lg","xl"]}
                // mt={["0.1rem","0.1rem","-0.1rem","-1rem"]}
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
            mt={["1.8rem","1.8rem","1.5rem","1rem"]}
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
            mt={["2.6rem","2rem","1.4rem","-2rem"]}
            >
            <Text
              color={header} 
              fontWeight={700}
              mr={["13.4rem","11rem","24.7rem","52rem"]}
              mt={["1.35rem","1rem","2rem",""]}
              fontSize={["0.8rem","0.8rem","0.9rem","0.9rem"]}
              ml={["","","","1rem"]}
            >
              13th Feb
            </Text>
          </Flex>
            <Flex
              mt={["-2.1rem","-2.1rem","-1.7rem","-2rem"]}
              ml={["14.7rem","15rem","26.3rem","53rem"]}
            >
              <InputModal/>
            </Flex>
        </Flex>

      </Flex>

      <Divider
        orientation='horizontal'
        w="100%"
        mt={["2rem","2rem","2rem","2rem"]}
        // mb={["7rem","7rem","8rem","9rem"]}
      />

      {/* <Flex
        mt={["","","","5rem"]}
      >

      </Flex> */}
    </Flex>
  )
}

export default DashBoardLandingPage