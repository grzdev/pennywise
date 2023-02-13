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
  } from '@chakra-ui/react'
  import { Inter } from '@next/font/google'
  import Image from 'next/image'
  import SavingImage from '../../images/div4.png'
  import GrapgImage from '../../images/image8.png'
  import React from 'react'
  import { VscGraph } from 'react-icons/vsc'
  import Link from 'next/link'
  import { ChevronRightIcon } from "@chakra-ui/icons"
  import { useColorModeValue } from '@chakra-ui/react'

const LandingPage = () => {
  const buttonColor = useColorModeValue("black","#256ec1")
  const textColor = useColorModeValue("grey","#b6b6b6")
  const divColor = useColorModeValue("#2469BE","#3d99ff")
  const divColor2 = useColorModeValue("#308DFF","#256ec1")
  const signUp = useColorModeValue("#256EC1","#308DFF")
  const secondDivCOlor = useColorModeValue("#e6f1ff","")

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
        >
          <VStack
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

            <Flex
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
                TrackDaily helps users budget their income by tracking the amount they spend on a daily basis.
              </Text>
            </Flex>
            <Flex
            >
              <Link href='/signup'>
                <Button
                  size="lg"
                  h="3.5rem"
                  variant='solid'
                  bg={buttonColor}
                  color="white"
                  mt={["2rem", "1.3rem", "1.3rem", "-1.3rem"]}
                  borderRadius="0.6rem"
                  _hover={{
                    bg: '#308DFF',
                  }}
                >
                  Create free account
                </Button>
              </Link>
            </Flex>
          </VStack>

          <Box
            ml={["0.2rem", "4rem", "3rem", "4.8rem"]}
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
        >
          <Flex
            mr={["","","","2.7rem"]}
            mt={["9rem","","","1rem"]}
            ml={["","","","10rem"]}
          >
            <VscGraph
              fontSize="5rem"
              color={divColor}
            />
          </Flex>
            <VStack
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
              >
                We will help you economize efficiently
              </Heading>
              <Text
                fontWeight={500}
                color={textColor}
                fontSize={["1.1rem", "1.1rem", "1.1rem", "1.2rem"]}
                mb={["0.4rem", "0.4rem", "0.4rem", "3rem"]}
                w={["18rem", "30rem", "30rem", "60rem"]}
                noOfLines={[6,6,6,2]}
                justifyContent="center"
                alignItems="center"
                textAlign={["center", "initial"]}
                ml={["", "", "", "16rem"]}
                fontFamily="'poppins',sans-serif "
              >
                It is hard to keep track of how much we spend in a day, this may result to people spending more than their budget.
                TrackDaily helps to keep tabs on what we spend on and the total amount spent.
              </Text>
              <Link href={"/about"}>
                <Text
                  ml={["","","","-30rem"]}
                  color="#3d99ff"
                  fontWeight={500}
                  fontSize="1.1rem"
                  mt={["1rem", "-0.4rem", "-0.4rem", "0.1rem"]}
                  mb={["10rem","","",""]}
                >
                  Learn more <ChevronRightIcon/>
                </Text>
              </Link>
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

            <Flex
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
            </Flex>
          </VStack>

        </Flex>

        <Flex
          w={["20rem","30rem","40rem","90rem"]}
          h={["20rem","20rem","20rem","15rem"]}
          bg={divColor2}
          mt={["5rem","7rem","7rem","7rem"]}
          mb={["7rem","7rem","7rem","7rem"]}
          borderRadius="1.1rem"
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
            <Input
              placeholder='Your email...'
              _placeholder={{color: 'lightgrey' }}
              size={["md","lg","lg","lg"]}
              variant='filled'
              mr="0.4rem"
            />
            <Button
              size={["md","lg","lg","lg"]}
              h="3.5rem"
              variant='solid'
              bg={signUp}
              color="white"
              mt={["1rem","","","0.1rem"]}
              borderRadius="0.6rem"
              _hover={{
                bg: '#308DFF',
              }}
            >
              Get started
            </Button>
          </Flex>
        </Flex>
      </Container>
    </main>   
  </>
  )
}

export default LandingPage