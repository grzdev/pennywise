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
  import SavingImage from '../../images/mainpic4.png'
  import GrapgImage from '../../images/pic2.png'
  import React from 'react'
  import { VscGraph } from 'react-icons/vsc'
  import Link from 'next/link'
  import { ChevronRightIcon } from "@chakra-ui/icons"
  import { useColorModeValue } from '@chakra-ui/react'

const LandingPage = () => {
  const buttonColor = useColorModeValue("linear-gradient( 135deg, #FFA6B7 10%, #1E2AD2 100%)","linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)")
  const textColor = useColorModeValue("grey","#b6b6b6")
  const buttonTextColor = useColorModeValue("white","white")
  const divColor = useColorModeValue("#2469BE","#3d99ff")
  const vsgraph = useColorModeValue("#b1d2ff","#b1d2ff")
  const learnmore = useColorModeValue("#97c3ff","#32384f")
  const divColor2 = useColorModeValue("linear-gradient( 135deg, #FFA6B7 10%, #1E2AD2 100%)","linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)")
  const signUp = useColorModeValue("#4e99ff","#73aeff")
  // const secondDivCOlor = useColorModeValue("#e6f1ff","")
  const headerBg = useColorModeValue("#EEF4FC","white")
  const pgBg = useColorModeValue("#EEF4FC","#4b4b4b")

  const secondDivCOlor = useColorModeValue("#262d45","linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)")
// background-image: linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%);
// background-image: linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%); 
// background-image: linear-gradient(19deg, #21D4FD 0%, #B721FF 100%);
// background-image: linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%);
// background-image: linear-gradient(180deg, #A9C9FF 0%, #FFBBEC 100%);
// background-image: linear-gradient( 135deg, #FFA6B7 10%, #1E2AD2 100%);
// background-image: linear-gradient( 135deg, #6B73FF 10%, #000DFF 100%);
// background-image: linear-gradient( 135deg, #97ABFF 10%, #123597 100%);





  return (
    <>
    <main>
      <Container
        centerContent
        maxW="container.lg"
      >
        <Flex
          mt={["3rem", "1rem"]}
          flexDir={["column", "column", "column", "row"]}
          ml={["","","","7rem"]}
        >
          <VStack
          >
            <Fade
              in={true}
            >
              <Heading
                size="3xl"
                w={["20rem", "30rem", "30rem", "30rem"]}
                lineHeight={["3.9rem", "4.5rem", "4.5rem", "4.5rem"]}
                mb="0.6rem"
                mt={["6rem", "10rem", "10rem", "12rem"]}
                ml={["", "", "", "6rem"]}
                textAlign={["center", "initial"]}
                fontFamily="'Roboto', sans-serif"
              >
                Keep Tabs On Your Daily Spendings.
              </Heading>
            </Fade>

            <Flex
            >
              <Fade
                in={true}
              >
                <Text
                  fontWeight={500}
                  color={textColor}
                  fontSize={["1.1rem", "1.1rem", "1.1rem", "1.2rem"]}
                  mb={["0.4rem", "0.4rem", "0.4rem", "2rem"]}
                  w={["18rem", "30rem", "30rem", "23.6rem"]}
                  justifyContent="center"
                  alignItems="center"
                  textAlign={["center", "initial"]}
                  fontFamily="'DM Sans',sans-serif "
                >
                  TrackDaily helps customers achieve their budget goals by storing the 
                  amount they spend on a daily basis,
                </Text>
              </Fade>
            </Flex>
            <Flex
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
                    bg: '#308DFF',
                  }}
                >
                  Sign up for free
                </Button>
              </Link>
            </Flex>
          </VStack>
          
          <Box
            ml={["0.2rem", "4rem", "3rem", "1rem"]}
            w={["27rem", "40rem", "40rem", "51rem"]}
            mt={["2rem", "", "3rem", "4rem"]}
          >
            <Image
              src={SavingImage}
              alt=""
            />
          </Box>
        </Flex>
        <Flex
          justifyContent={["center","center","center","center"]}
          alignItems={["center","center","center","center"]}
          mt={["9rem", "9rem", "6rem","6rem"]}
          mb={["","","","8rem"]}
          flexDir={["column", "column", "column", "row"]}
          bg={secondDivCOlor}
          w={["30rem","50rem","70rem ","100rem"]}
          h={["35rem","30rem","35rem","40rem"]}
        >
          <Flex
            mr={["","","","1.7rem"]}
            mt={["9rem","","","1rem"]}
            ml={["","","","10rem"]}
          >
            <VscGraph
              fontSize="5rem"
              color={vsgraph}
            />
          </Flex>
            <VStack
            >
              <Fade
                in={true}
              >
                <Heading
                  size="xl"
                  w={["20rem", "30rem", "30rem", "45rem"]}
                  noOfLines={[3,3,3,1]}
                  mt={["1rem","","","10rem"]}
                  lineHeight={["2rem", "4.5rem", "2rem", "2.3rem"]}
                  mb={["0.2rem", "-0.4rem", "-0.4rem", "0.2rem"]}
                  ml={["", "", "", "-15rem"]}
                  textAlign={["center", "initial"]}
                  fontFamily="'poppins', sans-serif"
                  color={headerBg}
                >
                  We will help you economize efficiently.
                </Heading>
              </Fade>
              <Fade
                in={true}
              >
                <Text
                  fontWeight={500}
                  color={pgBg}
                  fontSize={["1.1rem", "1.1rem", "1.1rem", "1.3rem"]}
                  mb={["0.4rem", "0.4rem", "0.4rem", "3rem"]}
                  w={["18rem", "30rem", "30rem", "60rem"]}
                  noOfLines={[6,6,6,2]}
                  justifyContent="center"
                  alignItems="center"
                  textAlign={["center", "initial"]}
                  fontFamily="'poppins',sans-serif "
                >
                  It's hard to keep track of how much we spend in a day, this may result to people spending more than they plan to.
                  TrackDaily helps to keep tabs on what we spend on and the total amount spent.
                </Text>
              </Fade>
              <Fade
                in={true}
              >
                <Link href={"/about"}>
                  <Text
                    ml={["","","","-30rem"]}
                    color={learnmore}
                    fontWeight={500}
                    fontSize="1.1rem"
                    mt={["1rem", "-0.4rem", "-0.4rem", "-2rem"]}
                    mb={["10rem","","",""]}
                  >
                    Learn more <ChevronRightIcon/>
                  </Text>
                </Link>
              </Fade>
            </VStack>
        </Flex>
        <Flex
          flexDir={["column", "column", "column", "row"]}
        >
          <Box
            ml={["0.2rem", "4rem", "4rem", "-5rem"]}
            w={["27rem", "40rem", "40rem", "51rem"]}
            mt={["8rem", "", "3rem", "-3rem"]}
          >
            <Image
              src={GrapgImage}
              alt=""
            />
          </Box>

          <VStack
            w={["","","",""]}
            h={["18rem","","","25rem"]}
            borderRadius="1.2rem"
            mt={["0.1rem", "5rem", "2rem", "7rem"]}
          >
            <Fade
              in={true}
            >
              <Heading
                size="2xl"
                w={["20rem", "30rem", "30rem", "30rem"]}
                lineHeight={["2rem", "4.5rem", "4.5rem", "3rem"]}
                mb="0.6rem"
                ml={["", "", "", "6rem"]}
                textAlign={["center", "initial"]}
                fontFamily="'Roboto', sans-serif"
              >
                Visualize your daily and weekly expenses.
              </Heading>
            </Fade>

            <Flex
            >
              <Fade
                in={true}
              >
                <Text
                  fontWeight={500}
                  color={textColor}
                  fontSize={["1.1rem", "1.1rem", "1.1rem", "1.2rem"]}
                  mb={["0.4rem", "0.4rem", "0.4rem", "2rem"]}
                  w={["18rem", "30rem", "30rem", "23.6rem"]}
                  justifyContent="center"
                  alignItems="center"
                  textAlign={["center", "initial"]}
                  fontFamily="'DM Sans',sans-serif "
                >
                A graph that shows your spending data will be provided to you so you can take note of any spike or decrease in expenses.
                </Text>
              </Fade>
            </Flex>
          </VStack>

        </Flex>

        <Flex
          w={["20rem","30rem","40rem","90rem"]}
          h={["20rem","20rem","20rem","15rem"]}
          bg={divColor2}
          mt={["5rem","7rem","7rem","7rem"]}
          mb={["7rem","7rem","7rem","7rem"]}
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
            {/* <Input
              placeholder='Your email...'
              _placeholder={{color: 'lightgrey' }}
              size={["md","lg","lg","lg"]}
              variant='filled'
              mr="0.4rem"
            /> */}
            <Link href="/signup">
              <Button
                size={["md","lg","lg","lg"]}
                h="3.5rem"
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
          </Flex>
        </Flex>
      </Container>
    </main>   
  </>
  )
}

export default LandingPage