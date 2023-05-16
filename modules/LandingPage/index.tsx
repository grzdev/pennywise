/* eslint-disable react/no-unescaped-entities */
import { 
    Container, 
    Flex, 
    Heading, 
    HStack, 
    Text, 
    VStack, 
    Box, 
    Button,
    Input,
    ScaleFade,
    Fade, 
  } from '@chakra-ui/react'
  import { Inter } from '@next/font/google'
  import Image from 'next/image'
  import DivPicture1 from '../../images/picredo1.png'
  import DivPicture2 from '../../images/person-working5.png'
  import DivPic3 from '../../images/budgetpic1.png'
  import React, { useState } from 'react'
  import { VscGraph } from 'react-icons/vsc'
  import Link from 'next/link'
  import { useEffect } from 'react'
  import { ChevronRightIcon } from "@chakra-ui/icons"
  import { useColorModeValue } from '@chakra-ui/react'
  import { motion, useScroll } from "framer-motion"
  
const LandingPage = () => {
  const buttonColor = useColorModeValue("linear-gradient( 135deg, #FFA6B7 10%, #1E2AD2 100%)","linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)")
  const textColor = useColorModeValue("#6a6a6a","#b6b6b6")
  const buttonTextColor = useColorModeValue("white","white")
  const divColor = useColorModeValue("#2469BE","#3d99ff")
  const vsgraph = useColorModeValue("#b1d2ff","#b1d2ff")
  const learnmore = useColorModeValue("#97c3ff","#97c3ff")
  const divColor2 = useColorModeValue("linear-gradient( 135deg, #FFA6B7 10%, #1E2AD2 100%)","linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)")
  const signUp = useColorModeValue("#3289ff","#3289ff")
  const headerBg = useColorModeValue("#EEF4FC","white")
  const pgBg = useColorModeValue("#EEF4FC","#EEF4FC")

  const secondDivCOlor = useColorModeValue("linear-gradient(45deg, #262d45 0%, #3261ff 100%)","#333f55")

  const { scrollYProgress } = useScroll();
  return (
    <Box
      overflowX="auto"
    >
      <Container
        centerContent
        maxW="container.xl"
        max-width="100%"
      >
        <Flex
          mt={["8rem", "1rem", "4rem" ,"4rem"]}
          flexDir={["column", "column", "column", "row"]}
          ml={["","","","7rem"]}
        >
          <VStack
          >
            <motion.div
              animate={{ y: 0 }}
              initial={{ y: 150 }}
              transition={{ duration: 0.8 }}
            >
                <Heading
                  size="3xl"
                  w={["20rem", "20rem", "30rem", "30rem"]}
                  lineHeight={["3.9rem", "4.5rem", "4.5rem", "4.5rem"]}
                  mb="0.8rem"
                  mt={["3rem", "10rem", "10rem", "10rem"]}
                  // ml={["", "", "", "6rem"]}
                  textAlign={["center"]}
                  fontFamily="'Roboto', sans-serif"
                >
                  {/* Keep Tabs On Your Daily Spendings. */}
                  Keep track of your daily expenditures.
                </Heading>
            </motion.div>

            <Flex
            >
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
                  
                >
                  PennyWise assists users in meeting their financial goals by keeping track of their everyday spending.
                </Text>
              </motion.div>
            </Flex>
            <Flex
            >
              <motion.div
                animate={{ y: 0 }}
                initial={{ y: 150 }}
                transition={{ duration: 1.3 }}
                whileHover={{ scale: 1.1 , transition: { duration: 0.3 }}}
                // whileHover={{ scale: 1.1 }}
                // transition={{ type: "spring", stiffness: 400, damping: 10 }}
                whileTap={{ scale: 0.8 , transition: { duration: 0.2 }}}
              >
                <Link href="signup">
                  <Button
                    size="lg"
                    h="3.5rem"
                    variant='solid'
                    bg={buttonColor}
                    boxShadow="2xl"
                    color={buttonTextColor}
                    mt={["2rem", "1.3rem", "1.3rem", "-1.3rem"]}
                    borderRadius="1rem 0 1rem 0"
                    _hover={{
                      bg: '#7858ff',
                    }}
                  >
                    Sign up for free
                  </Button>
                </Link>
              </motion.div>
            </Flex>
          </VStack>
          
          <Box
            // ml={["0.2rem", "4rem", "3rem", "1rem"]}
            mr={["","","","1rem"]}
            w={["21rem", "20rem", "40rem", "51rem"]}
            mt={["5.5rem", "5.5rem", "3rem", "-1rem"]}
          >
            <motion.div
              animate={{ x: 0 }}
              initial={{ x: 150 }}
              transition={{ duration: 1  }}
            >  
              <Image
                src={DivPicture1}
                alt=""
                priority
                placeholder="blur"
              />
            </motion.div>
          </Box>
        </Flex>
        <Flex
          justifyContent={["center","center","center","center"]}
          alignItems={["center","center","center","center"]}
          mt={["9rem", "9rem", "6rem","6rem"]}
          mb={["","","","8rem"]}
          flexDir={["column", "column", "column", "column"]}
          bg={secondDivCOlor}
          w={["21.5rem","21.5rem","45rem ","80rem"]}
          h={["28rem","28rem","35rem","40rem"]}
          borderRadius="1rem 0 1rem 0"
          boxShadow="2xl"
        >
          <motion.div
             whileInView={{ y: 0, opacity: 1}}
             initial={{ y: 150, opacity: 0 }}
             transition={{ duration: 0.8  }}
             viewport={{ once: true }}
          >  
            <Flex
              // mr={["","","","1.7rem"]}
              mt={["9rem","","","9rem"]}
              // ml={["","","","10rem"]}
            >
                <Text
                  fontSize={["6rem","7rem","8rem","10rem"]}
                  color={vsgraph}
                >
                  <VscGraph
                  />
                </Text>
            </Flex>
          </motion.div>
            <VStack
            >
              <motion.div
                 whileInView={{ y: 0, opacity: 1}}
                 initial={{ y: 150, opacity: 0 }}
                 transition={{ duration: 0.9  }}
                 viewport={{ once: true }}
              >
                <Heading
                  size={["xl","xl","2xl","2xl"]}
                  w={["18rem", "17rem", "30rem", "35rem"]}
                  noOfLines={[3,3,3,2]}
                  mt={["1rem","1rem","","0.1rem"]}
                  lineHeight={["3.5rem","3.5rem","4rem","4rem"]}
                  textAlign={["center"]}
                  fontFamily="monospace"
                  color={headerBg}
                >
                  PennyWise offers you effective budgeting.
                </Heading>
              </motion.div>
              <Fade
                in={true}
              >
              </Fade>
              <motion.div
                whileInView={{ y: 0, opacity: 1}}
                initial={{ y: 150, opacity: 0 }}
                transition={{ duration: 0.9  }}
                viewport={{ once: true }}
                >
                  <Text
                    color={learnmore}
                    fontWeight={500}
                    fontSize="1.1rem"
                    mt={["1rem", "-0.4rem", "1.8rem", "2rem"]}
                    mb={["10rem","","",""]}
                  >
                    <Link
                      href="/about"
                    >
                      Learn more <ChevronRightIcon/>
                    </Link>
                  </Text>
              </motion.div>
            </VStack>
        </Flex>
        <Flex
          flexDir={["column", "column", "column", "row"]}
        >
          <Box
            w={["21rem", "21rem", "40rem", "51rem"]}
            mt={["8rem", "", "8rem", "1rem"]}
            ml={["","","","-7rem"]}
          >
            <motion.div
              animate={{ x: 0 }}
              initial={{ x: -150 }}
              transition={{ duration: 1  }}
            >
              <Image
                src={DivPicture2}
                alt=""
                placeholder="blur"
                priority
              />
            </motion.div>
          </Box>

          <Flex
            w={["","","",""]}
            h={["18rem","","","25rem"]}
            borderRadius="1.2rem"
            mt={["0.1rem", "5rem", "-2rem", "11rem"]}
            flexDir="column"
            justifyContent="center"
            alignItems="center"
            ml={["","","","4rem"]}
          >
            <motion.div
              whileInView={{ y: 0, opacity: 1}}
              initial={{ y: 100, opacity: 0 }}
              transition={{ duration: 0.9  }}
              viewport={{ once: true }}
              >
              <Heading
                size="2xl"
                w={["20rem", "20rem", "22rem", "25rem"]}
                lineHeight={["3rem", "4.5rem", "3.2rem", "3.4rem"]}
                mb="1rem"
                // ml={["", "", "", "6rem"]}
                textAlign={["center"]}
                fontFamily="'Poppins', sans-serif"
              >
                Make a note of <br/>  your weekly <br/> expenses.
              </Heading>
            </motion.div>

            <Flex
            >
              <motion.div
                whileInView={{ y: 0, opacity: 1}}
                initial={{ y: 100, opacity: 0 }}
                transition={{ duration: 1  }}
                viewport={{ once: true }}
              >
                <Text
                  fontWeight={500}
                  color={textColor}
                  fontSize={["1.1rem", "1.1rem", "1.1rem", "1.3rem"]}
                  mb={["0.4rem", "0.4rem", "0.4rem", "2rem"]}
                  w={["18rem", "18rem", "24rem", "23.6rem"]}
                  justifyContent="center"
                  alignItems="center"
                  textAlign={["center"]}
                  // fontFamily="'DM Sans',sans-serif "
                fontFamily="'Ubuntu', sans-serif"
                >
                  You will be given a detailed information page with the specific amount
                  you spent and what you spent it on.
                </Text>
              </motion.div>
            </Flex>
          </Flex>

        </Flex>
        
        <Flex
          justifyContent={["center","center","center","center"]}
          alignItems={["center","center","center","center"]}
          mt={["9rem", "9rem", "6rem","11rem"]}
          mb={["","","","8rem"]}
          flexDir={["column", "column", "column", "column"]}
          boxShadow="2xl"
          bg={secondDivCOlor}
          w={["21.5rem","21.5rem","45rem ","80rem"]}
          h={["34rem","34rem","40rem","40rem"]}
          borderRadius="1rem 0 1rem 0"
        >
          <Flex
            w={["21rem", "21rem", "40rem", "35rem"]}
            mt={["-3rem","-3rem","-4rem","-4rem"]}
            // mb={["","","","-4rem"]}
          >
            <motion.div
              animate={{ x: 0 }}
              initial={{ x: 150 }}
              transition={{ duration: 1  }}
            >
              <Image
                src={DivPic3}
                alt=""
              />
            </motion.div>
          </Flex>
          <Flex
            alignItems="center"
            justifyContent="center"
          >
            <motion.div
              whileInView={{ y: 0, opacity: 1}}
              initial={{ y: 100, opacity: 0 }}
              transition={{ duration: 1  }}
              viewport={{ once: true }}
            >
              <Heading
                textAlign="center"
                color="white"
                size="2xl"
                lineHeight={["3rem", "3rem", "3.5rem", "4rem"]}
                w={["15rem", "15rem", "35rem", "35rem"]}
                mt={["","","-2rem",""]}
                fontFamily="monospace"
              >
                {/* Take control of your finances. */}
                Make wise financial decisions.
              </Heading>
            </motion.div>
          </Flex>
        </Flex>

        <Flex
          w={["21.5rem","21.5rem","45rem ","80rem"]}
          h={["20rem","20rem","20rem","15rem"]}
          bg={divColor2}
          mt={["14rem","14rem","12rem","5rem"]}
          mb={["12rem","7rem","7rem","7rem"]}
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
              noOfLines={1}
              w={["","","","20rem"]}
              size={["lg","lg","xl","xl"]}
            >
              Sign up for free.
            </Heading>
            <Heading
              color="white"
              noOfLines={1}
              w={["","","","25rem"]}
              size={["lg","lg","xl","xl"]}
              >
              Start tracking today.
            </Heading>
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
                  size={["md","lg","lg","lg"]}
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

export default LandingPage