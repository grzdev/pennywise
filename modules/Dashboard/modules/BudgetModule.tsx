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
import { AddIcon } from "@chakra-ui/icons"
import { TbCurrencyNaira } from 'react-icons/tb'

const BudgetModule = () => {
  const bgGradient = useColorModeValue("linear-gradient(to right, #536976, #292e49)","")
  const bg = useColorModeValue("#9a9a9a","")
  // background: linear-gradient(to right, #536976, #292e49); BLACK
  // background: linear-gradient(to right, #0052d4, #4364f7, #6fb1fc) BLUE
  

  return (
    <Flex
      alignItems="center"
      flexDir="row"
      justifyContent="center"
      gap="5rem"
    >
      <Flex
        // w={["21rem","20rem","34rem","0rem"]}
        w={["","","","40rem"]}
        h={["35rem","30rem","39rem","34rem"]}
        mt={["","","","4rem"]}
        boxShadow="lg"
        // justifyContent="center"
        borderRadius="1rem 0 1rem 0"
        alignItems="center"
        flexDir="column"
        bg={bgGradient}
        color="white"
        
      >
        <Heading
          mt={["","","","3rem"]}
        >
          My Budget
        </Heading>
        <Heading
          mt={["","","","5rem"]}
          size={["","","","sm"]}
        >
          Total
        </Heading>
        <Flex
          mt={["","","","1rem"]}
        >
          <Heading
            mt={["","","","0.3rem"]}
          >
            <TbCurrencyNaira/>
          </Heading>
          <Heading>
            30,000
          </Heading>
        </Flex>
        <Flex
          mt={["","","","8rem"]}
        >
          <Button
            // size={["","","","lg"]}
            width={["","","","9rem"]}
            height={["","","","3rem"]}
            borderRadius="1rem 0 1rem 0"
            bg={bg}
          >
            <AddIcon color="white" fontSize="1.2rem" fontWeight={900}/>
          </Button>
        </Flex>
      </Flex>

      <Flex
       w={["","","","20rem"]}
       h={["35rem","30rem","39rem","34rem"]}
       mt={["","","","4rem"]}
       boxShadow="lg" 
       borderRadius="1rem 0 1rem 0"
       bg="white"
       alignItems="center"
      //  justifyContent="center"
       flexDir={["row","row","row","column"]}
      >
        <Flex
          w={["","","","16rem"]}
          h={["","","","8rem"]}
          boxShadow="lg" 
          borderRadius="1rem 0 1rem 0"
          bg="white"
          mt={["","","","2rem"]}
          flexDir="column"
          >
          <Heading
            size={["","","","md"]}
            mt={["","","","1rem"]}
            ml={["","","","1rem"]}
          >
            Food
          </Heading>

          <Flex
            mt={["","","","1.5rem"]}
            ml={["","","","1rem"]}
          >
            <Flex
              mr="auto"
            >
              <Flex
                mt={["","","","0.21rem"]}
                >
                <TbCurrencyNaira/>
              </Flex>
              <Text
                fontWeight={600}
              >
                500
              </Text>
            </Flex>

            <Flex
              mr={["","","","1rem"]}
            >
              <Flex
                mt={["","","","0.21rem"]}
              >
                <TbCurrencyNaira/>
              </Flex>
              <Text
                fontWeight={600}
              >
                500
              </Text>
            </Flex>

          </Flex>
            <Flex
              ml={["","","","1.6rem"]}
              mt={["","","","0.4rem"]}
              w={["","","","13rem"]}
              alignItems="center"
              align="center"
            >
              <Slider>
                <SliderTrack>
                  <SliderFilledTrack/>
                </SliderTrack>
                <SliderThumb/>
              </Slider>
            </Flex>
        </Flex>

        <Flex
          w={["","","","16rem"]}
          h={["","","","8rem"]}
          boxShadow="lg" 
          borderRadius="1rem 0 1rem 0"
          bg="white"
          mt={["","","","2rem"]}
          flexDir="column"
          >
          <Heading
            size={["","","","md"]}
            mt={["","","","1rem"]}
            ml={["","","","1rem"]}
          >
            Transit
          </Heading>

          <Flex
            mt={["","","","1.5rem"]}
            ml={["","","","1rem"]}
          >
            <Flex
              mr="auto"
            >
              <Flex
                mt={["","","","0.21rem"]}
                >
                <TbCurrencyNaira/>
              </Flex>
              <Text
                fontWeight={600}
              >
                500
              </Text>
            </Flex>

            <Flex
              mr={["","","","1rem"]}
            >
              <Flex
                mt={["","","","0.21rem"]}
              >
                <TbCurrencyNaira/>
              </Flex>
              <Text
                fontWeight={600}
              >
                500
              </Text>
            </Flex>

          </Flex>
            <Flex
              ml={["","","","1.6rem"]}
              mt={["","","","0.4rem"]}
              w={["","","","13rem"]}
              alignItems="center"
              align="center"
            >
              <Slider>
                <SliderTrack>
                  <SliderFilledTrack/>
                </SliderTrack>
                <SliderThumb/>
              </Slider>
            </Flex>
        </Flex>

        <Flex
          w={["","","","16rem"]}
          h={["","","","8rem"]}
          boxShadow="lg" 
          borderRadius="1rem 0 1rem 0"
          bg="white"
          mt={["","","","2rem"]}
          flexDir="column"
          >
          <Heading
            size={["","","","md"]}
            mt={["","","","1rem"]}
            ml={["","","","1rem"]}
          >
            Data
          </Heading>

          <Flex
            mt={["","","","1.5rem"]}
            ml={["","","","1rem"]}
          >
            <Flex
              mr="auto"
            >
              <Flex
                mt={["","","","0.21rem"]}
                >
                <TbCurrencyNaira/>
              </Flex>
              <Text
                fontWeight={600}
              >
                500
              </Text>
            </Flex>

            <Flex
              mr={["","","","1rem"]}
            >
              <Flex
                mt={["","","","0.21rem"]}
              >
                <TbCurrencyNaira/>
              </Flex>
              <Text
                fontWeight={600}
              >
                500
              </Text>
            </Flex>

          </Flex>
            <Flex
              ml={["","","","1.6rem"]}
              mt={["","","","0.4rem"]}
              w={["","","","13rem"]}
              alignItems="center"
              align="center"
            >
              <Slider>
                <SliderTrack>
                  <SliderFilledTrack/>
                </SliderTrack>
                <SliderThumb/>
              </Slider>
            </Flex>
        </Flex>

        
       
      </Flex>
    </Flex>
  )
}

export default BudgetModule