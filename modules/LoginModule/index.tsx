/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { 
  Box,
  Button,
  Checkbox,
  Container,
  Flex,
  Heading,
  Input,
  Text, 
} from '@chakra-ui/react'
import { MdTrackChanges } from 'react-icons/md'
import { FcGoogle } from "react-icons/fc"
import { useColorModeValue } from '@chakra-ui/react'
import Link from 'next/link'

const LogInModule = () => {
  const divColor = useColorModeValue("white","")
  const headerColor = useColorModeValue("#4f89e8","#c6dbfb")
  const TextColor2 = useColorModeValue("black","")
  const signUp = useColorModeValue("#0059ec","#5088e4")
  const signIn = useColorModeValue("#0059ec","#4f89e8")

  return (
    //  <Flex
    //   justifyContent="center"
    //   alignItems="center"
    //   flexDir="column"
    //   mt={["3rem", "2rem", "2rem", "3rem"]}
    //   mb="3rem"
      
    // >
    //    <Flex
    //       mt="0.4rem"
          
    //     >
    //       <Flex
    //         mt={["-0.5rem", "0.2rem", "0.2rem", "-0.3rem"]}
    //       >
    //         <MdTrackChanges
    //           fontSize="3rem"
    //           // color='black'
    //         />
    //       </Flex>

    //       <Heading
    //         size="lg"
    //         ml="0.2rem"
    //         // color='black'
    //       >
    //         trackdaily
    //       </Heading>
    //     </Flex>

    //     <Flex
    //       w={["22rem","22rem","22rem","27rem"]}
    //       h="29rem"
    //       bg={divColor}
    //       mt={["1rem","3rem","3rem","2rem"]}
    //       borderRadius="1.3rem"
    //       // justifyContent="center"
    //       // alignItems="center"
    //       flexDir="column"
    //       boxShadow=" rgba(0, 0, 0, 0.1) 0px 10px 50px;"
    //     >
    //       <Flex
    //         flexDir="column"
    //         // justifyContent="center"
    //         alignItems="center"
    //         mt="3rem"
    //       >
    //         <Heading
    //           color={TextColor}
    //           size="md"
    //         >
    //           Login to Your Account
    //         </Heading>
    //         <Text
    //           color={TextColor3}
    //           mt="0.2rem"
    //           fontSize="0.9rem"
    //         >
    //           Securly login to your trackdaily
    //         </Text>
    //       </Flex>

    //       <Flex
    //         flexDir="column"
    //         // w={["","","","20rem"]}
    //         justifyContent="center"
    //         alignItems="center"
    //         mt="2rem"
    //       >
    //         <Flex
    //           flexDir="column"
    //         >
    //           <Text
    //             color={TextColor2}
    //             fontWeight={600}
    //           >
    //             Email or Username
    //           </Text>
    //           <Input
    //             variant="filled"
    //             bg="#EDF2F7"
    //             size="lg"
    //             mt="0.5rem"
    //           />
    //         </Flex>

    //         <Flex
    //           flexDir="column"
    //           mt="2rem"
    //         >
    //           <Text
    //             color={TextColor2}
    //             fontWeight={600}
    //           >
    //             Password
    //           </Text>
    //           <Input
    //             variant="filled"
    //             bg="#EDF2F7"
    //             size="lg"
    //             mt="0.5rem"
    //           />
    //         </Flex>


    //         <Flex
    //           mt="3rem"
    //         >
    //           <Link href="/dashboard">
    //             <Button
    //               bg={button} 
    //               size="lg"
    //               color="white"
    //             >
    //               LOG IN
    //             </Button>
    //           </Link>
    //         </Flex>
    //       </Flex>
         
    //     </Flex>

    //     <Flex
    //       mt="2rem"
    //       flexDir="column"
    //       alignItems="center"
    //     >
    //       <Link href="/signup">
    //         <Text>
    //           Don't have an account? Register
    //         </Text>
    //       </Link>

    //       <Text
    //         mt="0.6rem"
    //       >
    //         Forgot Password?
    //       </Text>
    //     </Flex>
    // </Flex> 
    <Container centerContent>
       <Flex
          mt="4rem"
          w={["","","","30rem"]}
          bg={divColor}
          // h={["","","","30rem"]}
          justifyContent="center"
          alignContent="center"
          borderRadius="1rem"
          flexDir="column"
        >
          <Flex
            // justifyContent="center"
            // alignItems="center"
            mt={["","","","2rem"]}
            ml={["","","","1.5rem"]}
          >
            <Flex
              mt={["-0.3rem", "-0.3rem", "-0.3rem", "-0.3rem"]}
            >
              <Link href="/">
                <MdTrackChanges
                  fontSize="2rem"
                  color={headerColor}
                />
              </Link>
            </Flex>

            <Link href="/">
              <Heading
                size="md"
                // ml="0.1rem"
                color={headerColor}
              >
                trackdaily
              </Heading>
            </Link>
          </Flex>

          <Flex
            flexDir="column"
            ml={["0.1rem","0.1rem","0.1rem","2rem"]}
            mt="1.5rem"
          >
            <Heading
              size={["lg","lg","lg","lg"]}
            >
              Welcome back
            </Heading>
            <Text
              fontSize={["0.8rem","","",""]}
            >
             Securly login to your Trackdaily account.
            </Text>
          </Flex>

          <Flex
            ml={["0.1rem","0.1rem","0.1rem","2rem"]}
            mt={["1.6rem","2rem","2rem","2rem"]}
            flexDir="column"
          >
          <Flex
              flexDir="column"
            >
              <Text
                color={TextColor2}
                fontWeight={600}
              >
                Email or Username
              </Text>
              <Input
                variant="filled"
                bg="#EDF2F7"
                size="lg"
                mt="0.5rem"
              />
            </Flex>

            <Flex
              flexDir="column"
              mt="1rem"
            >
              <Text
                color={TextColor2}
                fontWeight={600}
              >
                Password
              </Text>
              <Input
                variant="filled"
                bg="#EDF2F7"
                size="lg"
                mt="0.5rem"
              />
            </Flex>
          </Flex>

            <Flex
              ml={["0.1rem","0.1rem","0.1rem","2rem"]}
              mt="1.5rem"
              mb="1.5rem"
              // flexDir="column"
            >
                <Checkbox
                >
                  <Text
                    fontSize={["0.7rem","0.7rem","0.7rem","0.9rem"]}
                    fontWeight={600}
                    mr={["5rem","10rem","10rem","12rem"]}
                  >
                   Remember me 
                  </Text>
                </Checkbox>
              
              <Text
                fontSize={["0.7rem","0.7rem","0.7rem","0.9rem"]}
                fontWeight={600}
                ml="1rem"
                // mt="0.6rem"
              >
                Forgot Password?
              </Text>
            </Flex>

            <Flex
              flexDir="column"
              ml={["0.1rem","0.1rem","0.1rem","2rem"]}
              gap="1rem"
            >
              <Button
                bg={signIn}
                color="white"
              >
                Sign in
              </Button>
              <Button>
                {/* Put a logo here */}

               <FcGoogle fontSize="1.5rem"/> <Text ml="0.3rem">Sign in with google</Text>
              </Button>
            </Flex>

            <Flex
              // ml={["","","","22rem"]}
              justifyContent="center"
              alignItems="center"
              mt="2rem"
              mb="2rem"
              flexDir="row"
            >
              <Text>
               Don't have an account? 
              </Text>
               <Text
                color={signUp}
                ml="0.4rem"
             fontWeight={700}

               >
                <Link href="/signup" >
                  Sign up
                </Link>
               </Text>
            </Flex>
        </Flex>
    </Container>
  )
}

export default LogInModule