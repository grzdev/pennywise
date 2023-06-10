import { Button, Checkbox, Flex, Heading, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverFooter, PopoverHeader, PopoverTrigger, Progress, Text, useColorModeValue, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { AiOutlineDelete } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { TbCurrencyNaira } from 'react-icons/tb'
import { useDispatch, useSelector } from 'react-redux';
import { deleteExpense, toggleBudgetDone } from 'redux/slices/budgetSlice';
import { RootState } from 'redux/store';
import { motion, useScroll } from "framer-motion"

interface Expense {
    id: string;
    category: string;
    amount: number;
    date: string;
    isDone: boolean;
    selectedDate: string;
  };
  
const BudgetDiv = ({id, category, amount, date, selectedDate }:  Expense) => {
  //Colomode
  const deleteIcon = useColorModeValue("red", "white")
  const bgGradient = useColorModeValue("#EDF2F7","linear-gradient(to right, #28355e, #4e67b6);")
  const bgGradient2 = useColorModeValue("#bfbfbf","#171923")
  const defaultGradient = useColorModeValue("#747474","#bfbfbf")


  const dispatch = useDispatch();

  //Delete
  const toast = useToast()
  const handleDeleteExpense = () => {
    dispatch(deleteExpense(id));
    toast({
        title: 'Budget deleted',
        position: 'top',
        // description: "See you tomorrow.",
        status: 'success',
        duration: 5000,
        isClosable: true,
        // variant: "left-accent",
      })
  };

  // Getting the budget done status from the state
    const isDone = useSelector((state: RootState) => {
      const budget = state.budget.expenses.find((expense) => expense.id === id);
      return budget ? budget.isDone : false;
    });

    const handleCheckboxChange = () => {
      dispatch(toggleBudgetDone(id));
    };

  // Format the date to "Sun, June 30"
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'short',
      month: 'long',
      day: 'numeric',
    };
    return date.toLocaleDateString('en-US', options);
  };

  const formatDate2 = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'short',
      month: 'long',
      day: 'numeric',
    };
    return date.toLocaleDateString('en-US', options);
  };


  return (
    <Flex
    >
     <motion.div
        animate={{ y: 0 }}
        initial={{ y: 150 }}
        transition={{ duration: 0.8 }}
     >  
        <Flex
        w={["18rem","18rem","25rem","24rem"]}
        h={["6.5rem","9rem","10rem","8.5rem"]}
        bg={ isDone ? bgGradient2 : bgGradient}
        mt={["1.3rem","1.6rem","1.6rem","1.6rem"]}
        mb="0.6rem"
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
                // gap={["5rem","5rem","8rem","8rem"]}
                gap="auto"
                w={["15rem","","20rem","20rem"]}
            >
                <Flex
                    flexDir="column"
                    gap={["0.5rem","0.5rem","0.5rem","0.5rem"]}

                >
                    <Heading
                        size={["xs","xs","sm","sm"]}
                        textDecor={isDone ? "line-through" : "none"}
                        color={isDone? defaultGradient : "default"}
                    >
                        {formatDate(date)}
                    </Heading>
                    <Heading
                        size={["md","md","lg","lg"]}
                        textDecor={isDone ? "line-through" : "none"}
                        color={isDone? defaultGradient : "default"}
                    >
                        {category}
                    </Heading>
                    <Flex>
                        <Heading
                            size={["md","md","lg","lg"]}
                            mt={["0.05rem","0.05rem","0.05rem","0.05rem"]}
                            textDecor={isDone ? "line-through" : "none"}
                            color={isDone? defaultGradient : "default"}
                        >
                            <TbCurrencyNaira/>
                        </Heading>
                        <Heading
                        size={["sm","sm","md","md"]}
                        textDecor={isDone ? "line-through" : "none"}
                        color={isDone? defaultGradient : "default"}
                        mt={["0.12rem","0.12rem","0.2rem","0.2rem"]}
                        >
                            {amount}
                        </Heading>
                    </Flex>
                    
                </Flex>
                <Flex
                    mt={["1.4rem","1.4rem","1.9rem","2rem"]}
                    ml="auto"
                >
                    <Popover>
                        <PopoverTrigger>
                            <Button
                                variant="ghost"
                            >
                                <Text
                                    fontSize={["1.3rem","1.3rem","1.5rem","1.5rem"]}
                                >
                                    <BsInfoCircle/>
                                </Text>
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent>
                            <PopoverArrow />
                            <PopoverCloseButton />
                            <PopoverHeader
                                fontSize={["1.2rem","1.2rem","1.3rem","1.3rem"]}
                                fontWeight={600}
                            >
                                More Info
                            </PopoverHeader>
                            <PopoverBody>
                                <Flex
                                    flexDir="row"
                                    gap={["6rem","6rem","6rem","6rem"]}
                                >
                                    <Text
                                    fontSize={["1.1rem","1.1rem","1.1rem","1.1rem"]}
                                    fontWeight={500} 
                                    >
                                        From:
                                    </Text>
                                    <Text
                                        fontSize={["1.1rem","1.1rem","1.1rem","1.1rem"]}
                                        fontWeight={500}
                                    >
                                    {formatDate2(date)}
                                    </Text>
                                </Flex>
                                <Flex
                                    flexDir="row"
                                    gap={["7.5rem","7.5rem","7.5rem","7.5rem"]}
                                    mt={["0.5rem","0.5rem","0.5rem","0.5rem"]}
                                >
                                    <Text
                                        fontSize={["1.1rem","1.1rem","1.1rem","1.1rem"]}
                                        fontWeight={500}
                                    >
                                        To:
                                    </Text>
                                    <Text
                                        fontSize={["1.1rem","1.1rem","1.1rem","1.1rem"]}
                                        fontWeight={500}
                                    >
                                        {selectedDate}
                                    </Text>
                                </Flex>
                            </PopoverBody>
                            <PopoverFooter>
                                <Flex
                                    justifyContent="center"
                                    alignItems="center"
                                    gap="1rem"
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
                                    <Checkbox
                                        size={["lg","lg","lg","lg"]}
                                        isChecked={isDone} 
                                        onChange={handleCheckboxChange}
                                    >
                                        Done
                                    </Checkbox>
                                </Flex>
                            </PopoverFooter>
                        </PopoverContent>
                    </Popover>
                </Flex>
            </Flex>
        </Flex> 
    </motion.div>
</Flex>
  )
}

export default BudgetDiv