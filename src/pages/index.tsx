import { Container, Flex, Heading, HStack, Text, VStack, Box, Button } from '@chakra-ui/react'
import { Inter } from '@next/font/google'
import Image from 'next/image'
import SavingImage from '../../images/image6.png'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
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
                mt={["4rem", "5rem", "2rem", "11rem"]}
                ml={["", "", "", "6rem"]}
                textAlign={["center", "initial"]}
                fontFamily="'Roboto', sans-serif"
              >
                Document Your Daily Spendings.
              </Heading>

              <Flex
                // ml={["", "", "", "6rem"]}
              >
                <Text
                  // mt="3rem"
                  fontWeight={500}
                  color="grey"
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
                // display="block"
              >
                <Button
                  size="lg"
                  h="3.5rem"
                  variant='solid'
                  // colorScheme="#000000"
                  bg='black'
                  color="white"
                  mt={["2rem", "1.3rem", "1.3rem", "-1.3rem"]}
                  borderRadius="0.6rem"
                >
                  Create free account
                </Button>
              </Flex>
            </VStack>

            <Box
              ml={["0.2rem", "4rem", "4rem", "4.8rem"]}
              w={["27rem", "40rem", "40rem", "51rem"]}
              mt={["2rem", "", "3rem", ""]}
            >
              <Image
                src={SavingImage}
                alt=""
                
              />
            </Box>
          </Flex>
        </Container>
      </main>   
    </>
  )
}
