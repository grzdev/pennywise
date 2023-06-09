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
import Image from 'next/image'
import Notfound from "../../../images/notfound.png"

interface Expense {
  id: string;
  category: string;
  amount: number;
  date: string;
}

const BudgetModule = () => {
  //ColorMode
  const bgGradient = useColorModeValue("linear-gradient(to right, #162961, #3969b9)","linear-gradient(to right, #28355e, #4e67b6);")
  const divColor2 = useColorModeValue("white", "#222636")


  //Redux state
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
        h={["25rem","25rem","34rem","34rem"]}
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
        {expense && expense.length > 0 ? (
          <Flex
            flexDir="column"
          >
            {expense.map((budget) => (
              <BudgetDiv
                key={budget.id}
                id={budget.id}
                category={budget.category}
                amount={budget.amount}
                date={budget.date} 
                isDone={false}
                selectedDate={budget.selectedDate}              />
            ))}
          </Flex>
        ) : (
          <Flex
            flexDir="column"
            justifyContent="center"
            alignItems="center"
          >
            <Flex
              w={["","","",""]}
              mt={["2rem","2rem","2rem","3rem"]}
              ml={["2rem","2rem","2rem","2rem"]}
            >
              <Image
                src={Notfound}
                alt=""
              />
            </Flex>
            <Heading
              mt={["-2rem","-2rem","-2rem","-2rem"]}
              size={["md","md","lg","lg"]}
            >
              Nothing to see here yet.
            </Heading>
          </Flex>
        )}    
      </Flex>
    </Flex>
    </>
  )
}

export default BudgetModule