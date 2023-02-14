/* eslint-disable react/no-unescaped-entities */
import { 
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Input,
  Text, 
} from '@chakra-ui/react'
import React from 'react'
import { MdTrackChanges } from 'react-icons/md'
import { useColorModeValue } from '@chakra-ui/react'
import Link from 'next/link'
import { FcGoogle } from "react-icons/fc"


const SignUpModule = () => {
  const divColor = useColorModeValue("white","")
  const headerColor = useColorModeValue("#4f89e8","#c6dbfb")
  const TextColor2 = useColorModeValue("black","")
  const signUp = useColorModeValue("#0059ec","#5088e4")
  const TextColor3 = useColorModeValue("white","black")
  const signIn = useColorModeValue("#0059ec","#4f89e8")
  const button = useColorModeValue("#608dff","#084DA1")

  return (
    <Container centerContent>
    <Flex
       mt={["2rem","4rem","4rem","4rem"]}
       w={["","","","30rem"]}
       h={["","","","40rem"]}
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
            //  ml="0.2rem"
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
          Create a Secure Account
         </Heading>
         <Text
              fontSize={["0.8rem","","",""]}

         >
          Welcome to the future of budgeting
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
             Fullname
           </Text>
           <Input
             variant="filled"
             bg="#EDF2F7"
             size="lg"
             mt="0.5rem"
             placeholder="Fullname"
             _placeholder={{ color: "grey", fontSize: "0.8rem" }}
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
             Email Address
           </Text>
           <Input
             variant="filled"
             bg="#EDF2F7"
             size="lg"
             mt="0.5rem"
             placeholder="Email Address"
             _placeholder={{ color: "grey", fontSize: "0.8rem" }}
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
             placeholder="Password"
             _placeholder={{ color: "grey", fontSize: "0.8rem" }}
           />
         </Flex>

         
       </Flex>
{/* 
         <Flex
           ml={["12rem","10rem","10rem","22rem"]}
           mt="1.5rem"
           mb="1.5rem"

         >
           <Text
           >
             Forgot Password?
           </Text>
         </Flex> */}

         <Flex
           flexDir="column"
           ml={["0.1rem","0.1rem","0.1rem","2rem"]}
           gap="1rem"
           mt="2rem"
         >
           <Button
             bg={signIn}
             color="white"
           >
              Create account
           </Button>
           <Button>
             {/* Put a logo here */}

            <FcGoogle fontSize="1.5rem"/> <Text ml="0.3rem">Continue with google</Text>
           </Button>
         </Flex>

         <Flex
           // ml={["","","","22rem"]}
           justifyContent="center"
           alignItems="center"
           mt="2rem"
           mb="3rem"
           flexDir="row"
         >
           <Text>
             Already have an account?  
           </Text>
            <Text
             color={signUp}
             ml="0.4rem"
             fontWeight={700}
            >
             <Link href="/login" >
              Log in
             </Link>
            </Text>
         </Flex>
     </Flex>
 </Container>
  )
}

export default SignUpModule