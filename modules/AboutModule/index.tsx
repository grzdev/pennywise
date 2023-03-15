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
import AboutImg2 from "../../images/aboutpic.png"
import { motion } from 'framer-motion'

const About = () => {
  const headerBg = useColorModeValue("#EEF4FC","#256EC1")
  const header = useColorModeValue("#0F60D6","whitre")
  const textColor = useColorModeValue("white","#b6b6b6")
  // const secondDivCOlor = useColorModeValue("#e6f1ff","#333f55")
  const secondDivCOlor = useColorModeValue("linear-gradient(45deg, #262d45 0%, #3261ff 100%)","#333f55")



  return (
    <Container
      centerContent
      maxW="container.lg"
    >
      <Flex
        mt={["3rem","3rem","1rem", "1rem"]}
        flexDir={["column", "column", "column", "row"]}
        justifyContent={["center","","","flex-start"]}
        alignItems={["center","","","flex-start"]}
        ml={["", "", "", "12rem"]}
      >
        <VStack
          mt={["3rem", "3rem", "10rem", "10rem"]}
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
                ml={["","","","-19rem"]}
                mb={["1.4rem","1.4rem","1.4rem","2rem"]}
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
              w={["20rem", "30rem", "30rem", "30rem"]}
              lineHeight={["3rem", "3rem", "3.6rem", "3.9rem"]}
              // mt={["4rem","2rem","2rem","10rem"]}
              fontWeight={600}
              // ml={["", "", "", "1rem"]}
              textAlign={["center"]}
              fontFamily="'Rubik', sans-serif"
            >
              {/* To give everyone the power to better manage and keep track of their finances. */}
              To empower everyone with the ability to better manage and track their finances.
            </Heading>
          </motion.div>
        </VStack>

        <Box
            ml={["0.2rem", "4rem", "3rem", "1.8rem"]}
            w={["27rem", "40rem", "40rem", "51rem"]}
            mt={["3rem", "3rem", "3rem", "3rem"]}
          >
            <motion.div
              whileInView={{ x: 0 }}
              initial={{ x: 150 }}
              transition={{ duration: 1 }}
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
          mt={["4rem","4rem","6rem","5rem"]}
          mb="12rem"
          bg={secondDivCOlor}
          // w={["30rem","50rem","70rem ","96rem"]}
          boxShadow="2xl"
          borderRadius="1rem 0 1rem 0"
          w={["22rem","22rem","53rem ","85rem"]}
          h={["","","","47rem"]}
          justifyContent={["center","center","center","center"]}
          alignItems={["center","center","center","center"]}
        >
          <Box
            ml={["0.2rem", "4rem", "4rem", "-1rem"]}
            w={["27rem", "40rem", "40rem", "51rem"]}
            mt={["10rem", "10rem", "14rem", "-2rem"]}
            mb={["6rem","6rem","5rem","0.1rem"]}
          >
            <motion.div
              whileInView={{ x: 0 }}
              initial={{ x: -150 }}
              transition={{ duration: 1 }}
            >
              <Image
                src={AboutImg2}
                alt=""
                placeholder="blur"
                priority
              />
            </motion.div>
          </Box>

          <VStack
            w={["","","",""]}
            h={["18rem","","","25rem"]}
            borderRadius="1.2rem"
            mt={["8rem", "2rem", "5rem", "-8rem"]}
          >
            <Heading
              size="2xl"
              w={["20rem", "30rem", "25rem", "30rem"]}
              lineHeight={["2rem", "4.5rem", "4.5rem", "3rem"]}
              mb={["2rem","","",""]}
              color="white"
              textAlign={["center", "initial"]}
              fontFamily="'Roboto', sans-serif"
            >
              A Short Story
            </Heading>

            <Flex
            >
              <Text
                ml={["", "", "", "-6rem"]}
                fontWeight={550}
                color={textColor}
                fontSize={["1.1rem", "1.1rem", "1.3rem", "1.3rem"]}
                mb={["0.4rem", "0.4rem", "0.4rem", "2rem"]}
                w={["18rem", "30rem", "25rem", "23.6rem"]}
                justifyContent="center"
                alignItems="center"
                textAlign={["center", "initial"]}
                fontFamily="'Ubuntu', sans-serif"
              >
               I had this idea one afternoon at Unilorin after finishing a plate of Item 7, the post item clarity hit me then it dawned on me... <br/><br/>
               ..I spent enough money that day to feed a Nursery 2 student at King's college for a week<br/><br/> 
               " This no be life ", I said to myself. That night, I grabbed my laptop and began to code...
              </Text>
            </Flex>
          </VStack>

        </Flex>
    </Container>
  )
}

export default About