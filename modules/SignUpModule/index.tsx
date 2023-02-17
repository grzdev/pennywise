/* eslint-disable react/no-unescaped-entities */
import { 
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Input,
  Text, 
  FormControl,
  FormLabel
} from '@chakra-ui/react'
import React,{ useState } from 'react'
import { MdTrackChanges } from 'react-icons/md'
import { useColorModeValue } from '@chakra-ui/react'
import Link from 'next/link'
import { FcGoogle } from "react-icons/fc"
import Router from 'next/router'
import { useAuth } from 'context/AuthContext'
import { CircularProgress, } from "@chakra-ui/react";


const SignUpModule = () => {
  const divColor = useColorModeValue("white","")
  const headerColor = useColorModeValue("#4f89e8","#c6dbfb")
  const TextColor2 = useColorModeValue("black","")
  const signUp = useColorModeValue("#0059ec","#5088e4")
  const TextColor3 = useColorModeValue("white","black")
  const signIn = useColorModeValue("#0059ec","#4f89e8")
  const button = useColorModeValue("#608dff","#084DA1")

  const [loading, setLoading] = useState(false)

  const { user, signup } = useAuth()
  console.log(user)

  const [ data, setData ] = useState({
    email:'',
    password:'',
    username: ''
  })

  const handleSignup = async (e: any) => {
    e.preventDefault()
  
    try {
      await signup(data.email, data.password)
      Router.push("/dashboard")
    } catch (err) {
      console.log(err)
    }

   setLoading(true)
  }
  return (
    <Container centerContent>
    <Flex
       mt={["4rem","4rem","4rem","4rem"]}
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
           <FormControl>
                  <Flex
                    flexDir="column"
                    mt="1rem"
                  >
                    <FormLabel
                      color={TextColor2}
                      fontWeight={600}
                    >
                      Email Address
                    </FormLabel>
                    <Input
                      variant="filled"
                      // bg="#EDF2F7"
                      size="lg"
                      mt="0.5rem"
                      id="email"
                      onChange={(e: any)=>
                        setData({
                          ...data,
                          email: e.target.value
                        })
                      }
                      value={data.email}
                      type="email"
                      placeholder='Email'
                    />
                  </Flex>
                  <Flex
                    flexDir="column"
                    mt="1rem"
                  >
                    <FormLabel
                      color={TextColor2}
                      fontWeight={600}
                    >
                      Password
                    </FormLabel>
                    <Input
                      variant="filled"
                      // bg="#EDF2F7"
                      size="lg"
                      mt="0.5rem"
                      id="password"
                      onChange={(e:any)=>
                        setData({
                          ...data,
                          password:e.target.value
                        })
                      }
                      value={data.password}
                      type="password"
                      placeholder='Password'
                    />
                  </Flex>
                </FormControl>

         
       </Flex>

         <Flex
           flexDir="column"
           ml={["0.1rem","0.1rem","0.1rem","2rem"]}
           gap="1rem"
           mt="2rem"
         >
          <Flex
            justifyContent="center"
            alignItems="center"
          >
            {loading ? <CircularProgress isIndeterminate value={40} thickness='4px' size="2rem"/> : ''} 
          </Flex>
           <Button
             bg={signIn}
             color="white"
             onClick={handleSignup}
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