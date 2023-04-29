import { 
  Button,
  Container, 
  Flex, 
  Heading, 
  Slider, 
  SliderFilledTrack, 
  SliderThumb, 
  SliderTrack, 
  Text, 
  useColorModeValue
} from '@chakra-ui/react'
import React from 'react'
import Head from "next/head"
import { AddIcon } from "@chakra-ui/icons"
import { TbCurrencyNaira } from 'react-icons/tb'
import BudgetModal from '../components/budget-input-modal'
import BudgetDiv from '../components/budgets-div'
import { useSelector } from 'react-redux'
import { selectExpense } from 'redux/slices/budgetSlice'
import MobileNav from '../components/mobile-nav'

const BudgetModule = () => {
  const bgGradient = useColorModeValue("linear-gradient(to right, #162961, #3969b9)","linear-gradient(to right, #28355e, #4e67b6);")
  const bg = useColorModeValue("linear-gradient(to right, #457fca 0%, #5691c8 100%)","")  
  const divColor2 = useColorModeValue("white", "#222636")
  const secondBg = useColorModeValue("white","#222636")
  const thirdBg = useColorModeValue("white","#32384f")
  const food = useColorModeValue("#d61212","#d61212")
  const transit = useColorModeValue("#d77000","#d77000")
  const data = useColorModeValue("#008eff","#008eff")
  const transfers = useColorModeValue("#03af00","#03af00")
// background-image: linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%);


const expense = useSelector(selectExpense)

  return (
    <>
    <Head>
            <title>Your Budget</title>
            <meta name="description" content="" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    <Flex
      alignItems="center"
      flexDir={["column","column","column","row"]}
      justifyContent="center"
      gap={["3rem","3rem","4.5rem","5rem"]}
      mt={["1rem","1rem","0.1rem","1rem"]}
    >
      <MobileNav/>

      <Flex
        h={["22rem","22rem","33rem","34rem"]}
        w={["21rem","21rem","34rem","40rem"]}
        mt={["-1rem","2rem","5rem","4rem"]}
        boxShadow="lg"
        borderRadius="1rem 0 1rem 0"
        alignItems="center"
        flexDir="column"
        bg={bgGradient}
        color="white"
        
      >
        <Heading
          size={["lg","lg","xl","xl"]}
          mt={["4rem","4rem","7rem","7rem"]}
          mb={["4rem","4rem","2rem","3.5rem"]}
        >
          My Budgets
        </Heading>
        
        <Flex
          mt={["5rem","5rem","11rem","10rem"]}
        >
         <BudgetModal id={''}/>
        </Flex>
      </Flex>

      <Flex
        w={["21rem","21rem","34rem","30rem"]}
        bg= {divColor2}
        h={["25rem","25rem","30rem","34rem"]}
        mt={["-1rem","-1rem","-1rem","4rem"]}
        boxShadow="lg"
        borderRadius="1rem 0 1rem 0"
        // justifyContent="center"
        mb={["6rem","6rem","2rem","0.1rem"]}
        overflowY="scroll"
        flexDir="column"
          // overflowX="hidden"
        alignItems="center"
      >
        {/* <BudgetDiv/> */}
        {expense?.map((budget)=>(
          <BudgetDiv
            key={budget.id} 
            id={budget.id} 
            category={budget.category} 
            amount={budget.amount} 
            date={budget.date}                     
            />
        ))}
      </Flex>
    </Flex>
    </>
  )
}

export default BudgetModule