import { Button, Flex, Heading, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Progress, useColorModeValue } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { TbCurrencyNaira } from 'react-icons/tb'

interface DateTimeProps {
    className?: string;
  }
  
  interface DateTimeState {
    dateTime: Date;
  }

const BudgetDiv = ({ className }: DateTimeProps) => {

  const divColor2 = useColorModeValue("#EDF2F7", "#28355E")

  const [state, setState] = useState<DateTimeState>({
    dateTime: new Date(),
  });
 
  useEffect(() => {
    const interval = setInterval(() => {
      setState({ dateTime: new Date() });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const dateOptions: Intl.DateTimeFormatOptions = { weekday: 'short', month: 'long', day: 'numeric' };
  const timeOptions: Intl.DateTimeFormatOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric' };

  return (
    <Flex
        flexDir="column"
    >
    <Flex
      w={["18rem","18rem","25rem","24rem"]}
      h={["10rem","10rem","10rem","10rem"]}
      bg={divColor2}
      mt={["2rem","2rem","2rem","3rem"]}
      boxShadow="lg"
      borderRadius="1rem 0 1rem 0"
      justifyContent="center"
      alignItems="center"
      flexDir="column"
      >
        <Flex
            gap={["7rem","7rem","10rem","9rem"]}
            // mt={["","","","1.5rem"]}
        >
            <Heading
                size={["md","md","lg","lg"]}
            >
                Food
            </Heading>

            
            <Flex>
                <Heading
                size={["lg","lg","lg","lg"]}
                mt={["0.1rem","0.1rem","0.2rem","0.2rem"]}
                >
                    <TbCurrencyNaira/>
                </Heading>
                <Heading
                size={["md","md","lg","lg"]}
                >
                    3000
                </Heading>
            </Flex>
        </Flex>

        <Flex
            mt={["2rem","2rem","2rem","2rem"]}
        >
            <Progress 
                value={100}
                w={["14rem","14rem","20rem","19rem"]}
                borderRadius="1rem 0 1rem 0"
            />
        </Flex>

        <Flex
            gap={["7rem","7rem","11rem","11rem"]}
            mt={["1rem","1rem","1rem","1rem"]}
        >
            <Heading
                size={["","","sm","sm"]}
            >
                {state.dateTime.toLocaleDateString('en-US', dateOptions)}
            </Heading>

            <Heading
                size={["","","sm","sm"]}
            >
                60%
            </Heading>
        </Flex>
    </Flex>

    <Flex
      w={["18rem","18rem","25rem","24rem"]}
      h={["10rem","10rem","10rem","10rem"]}
      bg={divColor2}
      mt={["2rem","2rem","2rem","3rem"]}
      boxShadow="lg"
      borderRadius="1rem 0 1rem 0"
      justifyContent="center"
      alignItems="center"
      flexDir="column"
      >
        <Flex
            gap={["7rem","7rem","10rem","9rem"]}
            // mt={["","","","1.5rem"]}
        >
            <Heading
                size={["md","md","lg","lg"]}
            >
                Food
            </Heading>

            
            <Flex>
                <Heading
                size={["lg","lg","lg","lg"]}
                mt={["0.1rem","0.1rem","0.2rem","0.2rem"]}
                >
                    <TbCurrencyNaira/>
                </Heading>
                <Heading
                size={["md","md","lg","lg"]}
                >
                    3000
                </Heading>
            </Flex>
        </Flex>

        <Flex
            mt={["2rem","2rem","2rem","2rem"]}
        >
            <Progress 
                value={100}
                w={["14rem","14rem","20rem","19rem"]}
                borderRadius="1rem 0 1rem 0"
            />
        </Flex>

        <Flex
            gap={["7rem","7rem","11rem","11rem"]}
            mt={["1rem","1rem","1rem","1rem"]}
        >
            <Heading
                size={["","","sm","sm"]}
            >
                {state.dateTime.toLocaleDateString('en-US', dateOptions)}
            </Heading>

            <Heading
                size={["","","sm","sm"]}
            >
                60%
            </Heading>
        </Flex>
    </Flex>

    
    </Flex>
  )
}

export default BudgetDiv