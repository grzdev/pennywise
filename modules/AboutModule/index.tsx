/* eslint-disable react/no-unescaped-entities */
import { 
  Flex,
  Heading,
  Container,
  useColorModeValue,
  Box,
  VStack,
  Text,
  Button
} from '@chakra-ui/react'
import React from 'react'
import Image from 'next/image'
import AboutImg from "../../images/people-communicating1.png"
import AboutImg2 from "../../images/aboutpic.png"
import { motion } from 'framer-motion'
import Link from 'next/link'


const About = () => {
  const headerBg = useColorModeValue("#EEF4FC","#256EC1")
  const header = useColorModeValue("#0F60D6","whitre")
  const textColor = useColorModeValue("#6a6a6a","#b6b6b6")
  const textColor2 = useColorModeValue("white","#b6b6b6")
  const divColor2 = useColorModeValue("linear-gradient( 135deg, #FFA6B7 10%, #1E2AD2 100%)","linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)")
  // const secondDivCOlor = useColorModeValue("#e6f1ff","#333f55")
  const secondDivCOlor = useColorModeValue("linear-gradient(45deg, #262d45 0%, #3261ff 100%)","#333f55")
  const signUp = useColorModeValue("#3289ff","#3289ff")



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
            mt={["3rem", "3rem", "3rem", "10rem"]}
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
          </VStack>

          <Box
              // ml={["0.2rem", "4rem", "3rem", "-1.8rem"]}
              w={["24rem", "24  rem", "50rem", "60rem"]}
              mt={["-2rem", "1rem", "-5rem", "-2rem"]}
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
            mt={["1rem","3rem","1rem","1rem"]}
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
              mt={["-7.5rem", "-8rem", "-6rem", "-2rem"]}
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
                  color={textColor2}
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
                "This no be life", I said to myself. That night, I grabbed my laptop and began to code.
                </Text>
              </Flex>
            </VStack>

          </Flex>

          <Flex
          w={["21.5rem","21.5rem","45rem ","80rem"]}
          h={["20rem","20rem","20rem","15rem"]}
          bg={divColor2}
          mt={["-5rem","-5rem","-3rem","-3rem"]}
          mb={["7rem","7rem","4rem","4rem"]}
          borderRadius="1rem 0 1rem 0"
          boxShadow="2xl"
          justifyContent="center"
          alignItems="center"
          flexDir={["column","column","column","row"]}
        >
          <Flex
            mr={["","","","10rem"]}
            flexDir={["column","column","column","column"]}
          >
            <Heading
              color="white"
              // noOfLines={1}
              w={["18rem","18rem","30rem","34rem"]}
              size={["lg","lg","xl","xl"]}
              textAlign="center"
            >
              Manage your finances with our budget feature.
            </Heading>
            {/* <Heading
              color="white"
              noOfLines={1}
              w={["","","","25rem"]}
              size={["lg","lg","xl","xl"]}
              >
              Start tracking today.
            </Heading> */}
          </Flex>

          <Flex
            flexDir={["column","column","column","row"]}
            justifyContent="center"
            alignItems="center"
            mt={["2rem","","",""]}
          >
            <motion.div
              whileInView={{ y: 0, opacity: 1}}
              initial={{ y: 100, opacity: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link href="/signup">
                <Button
                  size={["lg","lg","lg","lg"]}
                  h="4rem"
                  variant='solid'
                  bg={signUp}
                  color="white"
                  mt={["0.1rem","","","-2rem"]}
                  borderRadius="1rem 0 1rem 0"
                  _hover={{
                    bg: '#308DFF',
                  }}
                >
                  Get started
                </Button>
              </Link>
            </motion.div>
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}

export default About