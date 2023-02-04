import { Container, Flex, Heading, HStack, Text, VStack, Box, Button } from '@chakra-ui/react'
import { Inter } from '@next/font/google'
import Image from 'next/image'
import SavingImage from '../../images/image2.png'
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
            mt={["3rem", "4.4rem"]}
            flexDir={["column", "column", "column", "row"]}
          >
            <VStack
            >
              <Heading
                size="3xl"
                w={["20rem", "30rem", "30rem", "30rem"]}
                lineHeight={["3.9rem", "4.5rem", "4.5rem", "4.5rem"]}
                mb="0.8rem"
                mt={["4rem", "5rem", "2rem", "7rem"]}
                textAlign="center"
              >
                Document your daily spendings.
              </Heading>

              <Text
                // mt="3rem"
                fontWeight={500}
                color="grey"
                fontSize={["0.9rem", "1.1rem", "1.1rem", "1.1rem"]}
                mb="2.4rem"
                w={["18rem", "30rem", "30rem", "30rem"]}
                justifyContent="center"
                // alignItems="center"
                textAlign="center"
              >
                TrackDaily helps users budget their income by tracking the amount they spend on a daily basis.
              </Text>

              <Box
                // display="block"
              >
                <Button
                  size="lg"
                  variant='solid'
                  // colorScheme="#000000"
                  colorScheme="blue"
                  mt={["2rem", "1.3rem", "1.3rem", "1.3rem"]}
                >
                  Create an account
                </Button>
              </Box>
            </VStack>

            <Box
              ml={["0.2rem", "4rem", "4rem", "4rem"]}
              w={["27rem", "40rem", "40rem", "40rem"]}
              mt={["1rem", "", "3rem", ""]}
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
