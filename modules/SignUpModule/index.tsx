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
  const headerColor = useColorModeValue("#0059ec","white")
  const TextColor2 = useColorModeValue("black","")
  const signUp = useColorModeValue("0059ec","#5088e4")
  const TextColor3 = useColorModeValue("white","black")
  const button = useColorModeValue("#608dff","#084DA1")

  return (
    // <Flex
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
    //       h={["43rem","35rem","35rem","43rem"]}
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
    //           Create a Secure Account
    //         </Heading>
    //         <Text
    //           color={TextColor3}
    //           mt="0.2rem"
    //           fontSize="0.9rem"
    //         >
    //           Welcome to the future of budgeting.
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
    //             Full Name
    //           </Text>
    //           <Input
    //             variant="filled"
    //             bg="#EDF2F7"
    //             size="lg"
    //             mt="0.5rem"
    //             placeholder="Full name"
    //             _placeholder={{ color: "grey", fontSize: "0.8rem" }}
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
    //             Email Address
    //           </Text>
    //           <Input
    //             variant="filled"
    //             bg="#EDF2F7"
    //             size="lg"
    //             mt="0.5rem"
    //             placeholder="Email Address"
    //             _placeholder={{ color: "grey", fontSize: "0.8rem"  }}
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
    //             Username
    //           </Text>
    //           <Input
    //             variant="filled"
    //             bg="#EDF2F7"
    //             size="lg"
    //             mt="0.5rem"
    //             placeholder="Username"
    //             _placeholder={{ color: "grey", fontSize: "0.8rem"  }}
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
    //             placeholder="Password"
    //             _placeholder={{ color: "grey", fontSize: "0.8rem"  }}
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
    //               CREATE ACCOUNT
    //             </Button>
    //           </Link>
    //         </Flex>
    //       </Flex>
         
    //     </Flex>

    //     <Flex
    //       mt="2rem"
    //     >
    //       <Link href="/login">
    //         <Text>
    //           Already have an account? Log in
    //         </Text>
    //       </Link>
    //     </Flex>
    // </Flex>
    <Container centerContent>
    <Flex
       mt="4rem"
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
           mt={["-0.5rem", "0.2rem", "0.2rem", "-0.3rem"]}
         >
           <Link href="/">
             <MdTrackChanges
               fontSize="3rem"
               color='#0059ec'
             />
           </Link>
         </Flex>

         <Link href="/">
           <Heading
             size="lg"
             ml="0.2rem"
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
         <Heading>
          Create a Secure Account
         </Heading>
         <Text>
          Welcome to the future of budgeting
         </Text>
       </Flex>

       <Flex
         ml={["0.1rem","0.1rem","0.1rem","2rem"]}
         mt="3rem"
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

         <Flex
           ml={["14rem","10rem","10rem","22rem"]}
           mt="1.5rem"
           mb="1.5rem"

         >
           <Text
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
             bg="#0059ec"
             color="white"
           >
              Create account
           </Button>
           <Button>
             {/* Put a logo here */}

            <FcGoogle fontSize="1.5rem"/> <Text ml="0.3rem">Sign up with google</Text>
           </Button>
         </Flex>

         <Flex
           // ml={["","","","22rem"]}
           justifyContent="center"
           alignItems="center"
           mt="2rem"
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