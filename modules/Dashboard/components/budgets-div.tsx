import { Button, Flex, Heading, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Progress, Text, useColorModeValue } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { AiOutlineDelete } from 'react-icons/ai';
import { TbCurrencyNaira } from 'react-icons/tb'
import { useDispatch } from 'react-redux';
import { deleteExpense } from 'redux/slices/budgetSlice';

interface Expense {
    id: string;
    category: string;
    amount: number;
    date: string;
  };
  
const BudgetDiv = ({id, category, amount, date }:  Expense) => {

  const deleteIcon = useColorModeValue("red", "white")
  const bgGradient = useColorModeValue("#EDF2F7","linear-gradient(to right, #28355e, #4e67b6);")


  const dispatch = useDispatch();

  const handleDeleteExpense = () => {
    dispatch(deleteExpense(id));
  };

  return (
    <Flex
    >
    <Flex
      w={["18rem","18rem","25rem","24rem"]}
      h={["9rem","9rem","10rem","10rem"]}
      bg={bgGradient}
      mt={["1.6rem","1.6rem","2rem","2rem"]}
      mb="1rem"
      boxShadow="lg"
      borderRadius="1rem 0 1rem 0"
      justifyContent="center"
      alignItems="center"
      flexDir="column"
      >
             {/* <Progress 
                value={100}
                w={["14rem","14rem","20rem","19rem"]}
                borderRadius="1rem 0 1rem 0"
            />  */}

        <Flex
            flexDir="row"
            gap={["5rem","5rem","8rem","8rem"]}
        >
            <Flex
                flexDir="column"
                gap={["0.5rem","0.5rem","0.5rem","0.5rem"]}
            >
                <Heading
                    size={["xs","xs","sm","sm"]}
                >
                    Sun, March 30
                </Heading>
                <Heading
                    size={["lg","lg","xl","xl"]}
                >
                    {category}
                </Heading>
                <Flex>
                    <Heading
                        size={["lg","lg","xl","xl"]}
                        mt={["0.05rem","0.05rem","0.05rem","0.05rem"]}
                    >
                        <TbCurrencyNaira/>
                    </Heading>
                    <Heading
                    size={["md","md","lg","lg"]}
                    >
                        {amount}
                    </Heading>
                </Flex>
                
            </Flex>
            <Flex
                mt={["1.4rem","1.4rem","1.9rem","2rem"]}
            >
                <Button
                    onClick={()=> handleDeleteExpense()}
                    variant="ghost"
                    fontSize={["1.4rem","1.4rem","1.6rem","1.6rem"]}
                    color={deleteIcon}
                    fontWeight={700}
                >
                    <AiOutlineDelete/>
                </Button>
            </Flex>
        </Flex>
    </Flex> 
</Flex>
  )
}

export default BudgetDiv