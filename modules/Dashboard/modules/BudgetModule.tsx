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
import BudgetModal from '../components/budget-input-modal'

const BudgetModule = () => {
  const bgGradient = useColorModeValue("linear-gradient(to right, #536976, #292e49)","")
  const bg = useColorModeValue("linear-gradient(to right, #457fca 0%, #5691c8 100%)","")  
  const secondBg = useColorModeValue("white","")
  const thirdBg = useColorModeValue("white","")
  const food = useColorModeValue("#d61212","")
  const transit = useColorModeValue("#d77000","")
  const data = useColorModeValue("#008eff","")
  const transfers = useColorModeValue("#03af00","")

  return (
    <Flex
      alignItems="center"
      flexDir={["column","column","column","row"]}
      justifyContent="center"
      gap={["3rem","3rem","4.5rem","5rem"]}
      mt={["1rem","1rem","0.1rem","2rem"]}
    >
      <Flex
        // w={["21rem","20rem","34rem","0rem"]}
        w={["20rem","20rem","30rem","40rem"]}
        h={["22rem","22rem","25rem","34rem"]}
        mt={["","","3rem","4rem"]}
        boxShadow="lg"
        // justifyContent="center"
        borderRadius="1rem 0 1rem 0"
        alignItems="center"
        flexDir="column"
        bg={bgGradient}
        color="white"
        
      >
        <Heading
          mt={["3rem","3rem","2.5rem","5rem"]}
          size={["md","md","lg","xl"]}
          mb={["","","","3.5rem"]}
        >
          My Budget
        </Heading>
        <Heading
          mt={["4rem","4rem","4.5rem","9rem"]}
          // mt={["","","","8rem"]}
          size={["xs","xs","sm","sm"]}
          ml={["0.2rem","0.2rem","0.4rem","0.5rem"]}
        >
          Total
        </Heading>
        <Flex
          mt={["0.2rem","0.2rem","0.4rem","0.1rem"]}
        >
          <Heading
            mt={["0.13rem","0.2rem","0.2rem","0.3rem"]}
            size={["md","md","lg","xl"]}
          >
            <TbCurrencyNaira color="#d1d1d1" />
          </Heading>
          <Heading
            size={["md","md","lg","xl"]}
          >
            30,000
          </Heading>
        </Flex>
        <Flex
          mt={["5rem","5rem","6rem","8rem"]}
        >
         <BudgetModal/>
        </Flex>
      </Flex>

      <Flex
       w={["20rem","20rem","40rem","20rem"]}
       h={["12rem","12rem","15rem","34rem"]}
       mt={["-1.5rem","-1.5rem","-1rem","4rem"]}
       mb={["5rem","5rem","5rem","0.1rem"]}
       boxShadow="lg" 
       borderRadius="1rem 0 1rem 0"
       bg={secondBg}
       alignItems="center"
      //  justifyContent="center"
       flexDir={["row","row","row","column"]}
       overflowY={["hidden","hidden","hidden","scroll"]}
       overflowX={["scroll","scroll","scroll","hidden"]}
        gap={["0.6rem","0.6rem","0.4rem",""]}
      >
        <Flex
          width={["12rem","12rem","14rem","16rem"]}
          h={["8rem","8rem","10rem","8rem"]}
          boxShadow="lg" 
          borderRadius="1rem 0 1rem 0"
          bg={thirdBg}
          ml={["1.5rem","1.5rem","2rem","0.1rem"]}
          mt={["","","","2rem"]}
          flexDir="column"
          >
          <Heading
            size={["sm","sm","md","md"]}
            mt={["1rem","1rem","1rem","1rem"]}
            ml={["1rem","1rem","1rem","1rem"]}
            color={food}
          >
            Food
          </Heading>

          <Flex
            mt={["2rem","2rem","3rem","1.5rem"]}
            ml={["0.7rem","0.7rem","1rem","1rem"]}
          >
            <Flex
              mr={["3rem","3rem","6.5rem","8.5rem"]}
            >
              <Flex
                mt={["0.15rem","0.15rem","0.3rem","0.21rem"]}
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
              mr={["0.7rem","0.7rem","1rem","1rem"]}
            >
              <Flex
                mt={["0.15rem","0.15rem","0.3rem","0.21rem"]}
              >
                <TbCurrencyNaira/>
              </Flex>
              <Text
                fontWeight={600}
              >
                200
              </Text>
            </Flex>

          </Flex>
            <Flex
              ml={["1.2rem","1.2rem","1.3rem","1.6rem"]}
              mt="0.4rem"
              w={["7.6rem","7.6rem","11.5rem","13rem"]}
              alignItems="center"
              align="center"
            >
              <Slider
                mb="1rem"
              >
                <SliderTrack>
                  <SliderFilledTrack
                   bg={food}
                  />
                </SliderTrack>
                <SliderThumb/>
              </Slider>
            </Flex>
        </Flex>

        <Flex
          width={["12rem","12rem","14rem","16rem"]}
          h={["8rem","8rem","10rem","8rem"]}
          boxShadow="lg" 
          borderRadius="1rem 0 1rem 0"
          bg={thirdBg}
          ml={["1.5rem","1.5rem","2rem","0.1rem"]}
          mr={["1.5rem","1.5rem","2rem","0.1rem"]}
          mt={["","","","2rem"]}
          flexDir="column"
          >
          <Heading
            size={["sm","sm","md","md"]}
            mt={["1rem","1rem","1rem","1rem"]}
            ml={["1rem","1rem","1rem","1rem"]}
            color={data}
          >
            Data
          </Heading>

          <Flex
            mt={["2rem","2rem","3rem","1.5rem"]}
            ml={["0.7rem","0.7rem","1rem","1rem"]}
          >
            <Flex
              mr={["3rem","3rem","6.5rem","8.5rem"]}
            >
              <Flex
                mt={["0.15rem","0.15rem","0.3rem","0.21rem"]}
                >
                <TbCurrencyNaira/>
              </Flex>
              <Text
                fontWeight={600}
              >
                250
              </Text>
            </Flex>

            <Flex
              mr={["0.7rem","0.7rem","1rem","1rem"]}
            >
              <Flex
                mt={["0.15rem","0.15rem","0.3rem","0.21rem"]}
              >
                <TbCurrencyNaira/>
              </Flex>
              <Text
                fontWeight={600}
              >
                800
              </Text>
            </Flex>

          </Flex>
            <Flex
              ml={["1.2rem","1.2rem","1.3rem","1.6rem"]}
              mt="0.4rem"
              w={["7.6rem","7.6rem","11.5rem","13rem"]}
              alignItems="center"
              align="center"
            >
              <Slider
                mb="1rem"
              >
                <SliderTrack>
                  <SliderFilledTrack
                   bg={data}
                  />
                </SliderTrack>
                <SliderThumb/>
              </Slider>
            </Flex>
        </Flex>

        <Flex
          width={["12rem","12rem","14rem","16rem"]}
          h={["8rem","8rem","10rem","8rem"]}
          boxShadow="lg" 
          borderRadius="1rem 0 1rem 0"
          bg={thirdBg}
          ml={["1.5rem","1.5rem","2rem","0.1rem"]}
          mr={["1.5rem","1.5rem","2rem","0.1rem"]}
          mt={["","","","2rem"]}
          flexDir="column"
          >
          <Heading
            size={["sm","sm","md","md"]}
            mt={["1rem","1rem","1rem","1rem"]}
            ml={["1rem","1rem","1rem","1rem"]}
            color={transit}
          >
            Transit
          </Heading>

          <Flex
            mt={["2rem","2rem","3rem","1.5rem"]}
            ml={["0.7rem","0.7rem","1rem","1rem"]}
          >
            <Flex
              mr={["3rem","3rem","6.5rem","8.5rem"]}
            >
              <Flex
                mt={["0.15rem","0.15rem","0.3rem","0.21rem"]}
                >
                <TbCurrencyNaira/>
              </Flex>
              <Text
                fontWeight={600}
              >
                400
              </Text>
            </Flex>

            <Flex
              mr={["0.7rem","0.7rem","1rem","1rem"]}
            >
              <Flex
                mt={["0.15rem","0.15rem","0.3rem","0.21rem"]}
              >
                <TbCurrencyNaira/>
              </Flex>
              <Text
                fontWeight={600}
              >
                1000
              </Text>
            </Flex>

          </Flex>
            <Flex
              ml={["1.2rem","1.2rem","1.3rem","1.6rem"]}
              mt="0.4rem"
              w={["7.6rem","7.6rem","11.5rem","13rem"]}
              alignItems="center"
              align="center"
            >
              <Slider
                mb="1rem"
              >
                <SliderTrack>
                  <SliderFilledTrack
                   bg={transit}
                  />
                </SliderTrack>
                <SliderThumb/>
              </Slider>
            </Flex>
        </Flex>

        <Flex
          width={["12rem","12rem","14rem","16rem"]}
          h={["8rem","8rem","10rem","8rem"]}
          boxShadow="lg" 
          borderRadius="1rem 0 1rem 0"
          bg={thirdBg}
          ml={["1.5rem","1.5rem","2rem","0.1rem"]}
          mr={["1.5rem","1.5rem","2rem","0.1rem"]}
          mt={["","","","2rem"]}
          mb={["","","","2rem"]}
          flexDir="column"
          >
          <Heading
            size={["sm","sm","md","md"]}
            mt={["1rem","1rem","1rem","1rem"]}
            ml={["1rem","1rem","1rem","1rem"]}
            color={transfers}
          >
            Transfers
          </Heading>

          <Flex
            mt={["2rem","2rem","3rem","1.5rem"]}
            ml={["0.7rem","0.7rem","1rem","1rem"]}
          >
            <Flex
              mr={["3rem","3rem","6.5rem","8.5rem"]}
            >
              <Flex
                mt={["0.15rem","0.15rem","0.3rem","0.21rem"]}
                >
                <TbCurrencyNaira/>
              </Flex>
              <Text
                fontWeight={600}
              >
                900
              </Text>
            </Flex>

            <Flex
              mr={["0.7rem","0.7rem","1rem","1rem"]}
            >
              <Flex
                mt={["0.15rem","0.15rem","0.3rem","0.21rem"]}
              >
                <TbCurrencyNaira/>
              </Flex>
              <Text
                fontWeight={600}
              >
                2000
              </Text>
            </Flex>

          </Flex>
            <Flex
              ml={["1.2rem","1.2rem","1.3rem","1.6rem"]}
              mt="0.4rem"
              w={["7.6rem","7.6rem","11.5rem","13rem"]}
              alignItems="center"
              align="center"
            >
              <Slider
                mb="1rem"
              >
                <SliderTrack>
                  <SliderFilledTrack
                   bg={transfers}
                  />
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