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
import AboutImg from "../../images/about1.png"
import AboutImg2 from "../../images/about6.png"

const About = () => {
  const headerBg = useColorModeValue("#EEF4FC","#256EC1")
  const header = useColorModeValue("#0F60D6","whitre")
  const textColor = useColorModeValue("grey","#b6b6b6")

  return (
    <Container
      centerContent
      maxW="container.lg"
    >
      <Flex
        mt={["6rem", "1rem"]}
        flexDir={["column", "column", "column", "row"]}
        justifyContent={["center","","","flex-start"]}
        alignItems={["center","","","flex-start"]}
        ml={["", "", "", "6rem"]}
      >
        <VStack
          mt={["6rem", "10rem", "10rem", "10rem"]}
        >
          <Flex
            bg={headerBg}
            w="10rem"
            h="2rem"
            borderRadius="full"
            justifyContent="center"
            alignItems="center"
            ml={["","","","-19rem"]}
            mb={["1.4rem","1.4rem","1.4rem","2rem"]}
          >
            <Heading
              size="md"
              color={header}
              mt="-0.25rem"
              
            >
              Our Mission
            </Heading>
          </Flex>
          <Heading
            size="2xl"
            w={["20rem", "30rem", "30rem", "30rem"]}
            lineHeight={["3rem", "3rem", "3.6rem", "3.9rem"]}
            // mt={["4rem","2rem","2rem","10rem"]}
            ml={["", "", "", "6rem"]}
            textAlign={["center", "initial"]}
            fontFamily="'Roboto', sans-serif"
          >
            To give everyone the power to better manage and keep track of their finances.
          </Heading>
        </VStack>

        <Box
            ml={["0.2rem", "4rem", "3rem", "4.8rem"]}
            w={["27rem", "40rem", "40rem", "51rem"]}
            mt={["2rem", "", "3rem", "3rem"]}
          >
            <Image
              src={AboutImg}
              alt=""
            />
          </Box>
      </Flex>

      <Flex
          flexDir={["column-reverse", "column-reverse", "column-reverse", "row"]}
          mt={["8rem","8rem","8rem","20rem"]}
          mb={["6rem","6rem","6rem","10rem"]}
        >
          <Box
            // ml={["0.2rem", "4rem", "4rem", "-5rem"]}
            w={["27rem", "40rem", "40rem", "51rem"]}
            mt={["14rem", "8rem", "8rem", "-16rem"]}
          >
            <Image
              src={AboutImg2}
              alt=""
            />
          </Box>

          <VStack
            w={["","","",""]}
            h={["18rem","","","25rem"]}
            borderRadius="1.2rem"
            mt={["0.1rem", "5rem", "2rem", "-10rem"]}
          >
            <Heading
              size="2xl"
              w={["20rem", "30rem", "30rem", "30rem"]}
              lineHeight={["2rem", "4.5rem", "4.5rem", "3rem"]}
              ml={["", "", "", "6rem"]}
              mb={["2rem","","",""]}
              textAlign={["center", "initial"]}
              fontFamily="'Roboto', sans-serif"
            >
              A Short Story
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
               TrackDaily is the first online "Money tracking" app in Nigeria.
               It first came about when the team noticed that they didn't have
               an idea on how much they spend on a daily basis.<br/><br/>

               This was a problem because when calculated, they spent more than
               their income.
               It drove the team to find a solution.<br/><br/>

               TrackDaily is on a mission to help everyone budget their income better,
               and we tend to be the best at this. From all of us at TrackDaily, Thank you ❤️
              </Text>
            </Flex>
          </VStack>

        </Flex>
    </Container>
  )
}

export default About