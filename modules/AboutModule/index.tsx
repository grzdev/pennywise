/* eslint-disable react/no-unescaped-entities */
import { 
  Flex,
  Heading,
  Container,
  useColorModeValue,
  Box,
  VStack,
  Text
} from '@chakra-ui/react'
import React from 'react'
import Image from 'next/image'
import AboutImg from "../../images/people-communicating1.png"
import AboutImg2 from "../../images/aboutpic.png"
import { motion } from 'framer-motion'

const About = () => {
  const headerBg = useColorModeValue("#EEF4FC","#256EC1")
  const header = useColorModeValue("#0F60D6","whitre")
  const textColor = useColorModeValue("white","#b6b6b6")
  // const secondDivCOlor = useColorModeValue("#e6f1ff","#333f55")
  const secondDivCOlor = useColorModeValue("linear-gradient(45deg, #262d45 0%, #3261ff 100%)","#333f55")



  return (
    <Box
      overflowX="hidden"
    >
      <Container
        centerContent
        maxW="container.xl"
        max-width="100%"
      >
        <Flex
          mt={["6rem","6rem","4rem", "4rem"]}
          flexDir={["column", "column", "column", "row"]}
          justifyContent={["center","","","flex-start"]}
          alignItems={["center","","","flex-start"]}
          ml={["", "", "", "12rem"]}
        >
          <VStack
            mt={["5rem", "3rem", "7rem", "10rem"]}
          >
            <Flex
              ml={["","","","28rem"]}
            >
              <motion.div
                animate={{ y: 0 }}
                initial={{ y: 150 }}
                transition={{ duration: 0.8 }}
              >
                <Flex
                  bg={headerBg}
                  w="10rem"
                  h="2rem"
                  borderRadius="full"
                  justifyContent="center"
                  alignItems="center"
                  ml={["","","","-18.5rem"]}
                  mb={["1.4rem","1.4rem","1.4rem","1rem"]}
                >
                  <Heading
                    size="md"
                    color={header}
                    mt="-0.25rem"
                    
                  >
                    Mission
                  </Heading>
                </Flex>
              </motion.div>
            </Flex>

            <motion.div
              animate={{ y: 0 }}
              initial={{ y: 150 }}
              transition={{ duration: 1.1 }}
            >
              <Heading
                size="2xl"
                w={["21.5rem", "21.5rem", "30rem", "30rem"]}
                lineHeight={["3rem", "3rem", "3.6rem", "3.5rem"]}
                // ml={["","","","-3rem"]}
                fontWeight={600}
                textAlign={["center"]}
                fontFamily="'Rubik', sans-serif"
              >
                To help everyone better manage and track their finances.
              </Heading>
            </motion.div>

              <motion.div
                animate={{ y: 0 }}
                initial={{ y: 150 }}
                transition={{ duration: 1.1 }}
              >
                <Text
                  fontWeight={500}
                  color={textColor}
                  fontSize={["1.1rem", "1.1rem", "1.1rem", "1.3rem"]}
                  mb={["0.4rem", "0.4rem", "0.4rem", "2.5rem"]}
                  w={["18rem", "18rem", "22rem", "23.6rem"]}
                  justifyContent="center"
                  alignItems="center"
                  textAlign={["center"]}
                 fontFamily="'Ubuntu', sans-serif"
                  mt={["","","","1rem"]}
                >
                  Take control of your finances with our budget feature.
                </Text>
              </motion.div>
          </VStack>

          <Box
              // ml={["0.2rem", "4rem", "3rem", "-1.8rem"]}
              w={["22rem", "22rem", "50rem", "60rem"]}
              mt={["2rem", "4rem", "-3rem", "-2rem"]}
            >
              <motion.div
                animate={{ y: 0 }}
                initial={{ y: 150 }}
                transition={{ duration: 1.1 }}
              >
                <Image
                  src={AboutImg}
                  alt=""
                  placeholder="blur"
                  priority
                />
              </motion.div>
            </Box>
        </Flex>

        <Flex
            flexDir={["column-reverse", "column-reverse", "column-reverse", "row"]}
            mt={["4rem","4rem","6rem","3rem"]}
            mb="12rem"
            bg={secondDivCOlor}
            overflow="hidden"
            // w={["30rem","50rem","70rem ","96rem"]}
            boxShadow="2xl"
            borderRadius="1rem 0 1rem 0"
            w={["22rem","22rem","45rem ","80rem"]}
            h={["37rem","37rem","38rem","44rem"]}
            justifyContent={["center","center","center","center"]}
            alignItems={["center","center","center","center"]}
          >
            <VStack
              w={["","","",""]}
              h={["18rem","","","25rem"]}
              borderRadius="1.2rem"
              mt={["-6rem", "-8rem", "-6rem", "-2rem"]}
            >
              <Heading
                size="2xl"
                w={["20rem", "20rem", "25rem", "30rem"]}
                lineHeight={["2rem", "4.5rem", "4.5rem", "3rem"]}
                mb={["2rem","","",""]}
                color="white"
                textAlign={["center"]}
                fontFamily="'Roboto', sans-serif"
              >
                A Short Story
              </Heading>

              <Flex
              >
                <Text
                  color={textColor}
                  fontSize={["1.1rem", "1.1rem", "1.3rem", "1.5rem"]}
                  mb={["0.4rem", "0.4rem", "0.4rem", "2rem"]}
                  w={["15rem", "15rem", "30rem", "30.6rem"]}
                  justifyContent="center"
                  alignItems="center"
                  textAlign={["center"]}
                  fontFamily="'Ubuntu', sans-serif"
                >
                I had just finished a plate of Item 7 in Ilorin when the post Item clarity hit me.<br/><br/>
                The amount of money I spent that day could feed a primary student at King's College for a week.<br/><br/>
                " This no be life ", I said to myself. That night, I grabbed my laptop and began to code.
                </Text>
              </Flex>
            </VStack>

          </Flex>
      </Container>
    </Box>
  )
}

export default About