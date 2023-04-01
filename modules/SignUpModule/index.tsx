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
  FormLabel,
  useToast
} from '@chakra-ui/react'
import React,{ useState } from 'react'
import { MdTrackChanges } from 'react-icons/md'
import { useColorModeValue } from '@chakra-ui/react'
import Link from 'next/link'
import { FcGoogle } from "react-icons/fc"
import { useRouter} from 'next/router'
import { useAuth } from 'context/AuthContext'
import { CircularProgress, } from "@chakra-ui/react";
import { motion } from 'framer-motion'
import { FaGem } from 'react-icons/fa'

const SignUpModule = () => {
  const divColor = useColorModeValue("white","#333f55")
  const headerColor = useColorModeValue("#374D9A","#c6dbfb")
  const TextColor2 = useColorModeValue("black","")
  const signUp = useColorModeValue("white","white")
  const signUpBg = useColorModeValue("#e6e6e6","#2a3549")
  const header2Color = useColorModeValue("black","white")
  const textColor3 = useColorModeValue("black","")
  const signIn = useColorModeValue("linear-gradient( 135deg, #FFA6B7 10%, #1E2AD2 100%)","linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)")
  const router = useRouter()

  const { signIWithGoogle } = useAuth()

  const toast = useToast()

  const [loading, setLoading] = useState(false)

  const { user, signup } = useAuth()
  console.log(user)

  const [ data, setData ] = useState({
    email:'',
    password:'',
  })

  const handleGoogleClick = async (e: any) => {
    e.preventDefault()

    try {
      await signIWithGoogle()
      router.push("/dashboard")
      toast({
        title: 'Account created.',
        description: "",
        position:"top",
        status: 'success',
        duration: 6000,
        isClosable: true,
    })
    } catch (error) {
      toast({
        title: 'There seems to ba an error :(',
        description: "",
        position:"top",
        status: 'error',
        duration: 5000,
        isClosable: true,
    })
    }
  }

  const handleSignup = async (e: any) => {
    e.preventDefault()
  
    try {
      await signup(data.email, data.password)
      router.push("/dashboard")
      toast({
        title: 'Account created.',
        description: "",
        position:"top",
        status: 'success',
        duration: 6000,
        isClosable: true,
    })
    } catch (err) {
      toast({
          title: 'There seems to ba an error :(',
          description: "",
          position:"top",
          status: 'error',
          duration: 5000,
          isClosable: true,
      })
    }

   setLoading(true)
  }
  return (
    <Container centerContent>
    <Flex
       mt={["3rem","3rem","4rem","4rem"]}
       w={["20.5rem","20.5rem","24.5rem","28rem"]}
       h={["34rem","34rem","36rem","38rem"]}
       mb="3rem"
       boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
       overflow="hidden"
       bg={divColor}
       // h={["","","","30rem"]}
       justifyContent="center"
       alignContent="center"
       borderRadius="1rem 0 1rem 0"
       flexDir="column"
     >
       <Flex
        mt={["2rem","2rem","2.4rem","2rem"]}
        ml={["1.1rem","1.1rem","1rem","1.5rem"]}
       >
         <Flex
          //  mt={["-0.3rem", "-0.3rem", "-0.3rem", "-0.1rem"]}
         >
           <Link href="/">
              <Text
                color={headerColor}
                mr="0.2rem"
                fontSize={["1.3rem","1.3rem","1.8rem","1.8rem"]}
              >
                <FaGem/>
              </Text>
           </Link>
         </Flex>

         <Link href="/">
           <Heading
            size={["sm","sm","md","md"]}
            fontFamily="'Lato', sans-serif"
            color={headerColor}
           >
             pennywise
           </Heading>
         </Link>
       </Flex>

       <Flex
         flexDir="column"
         ml={["1.3rem","1.3rem","1.5rem","2rem"]}
         mt={["2rem","2rem","2rem","2.5rem"]}
       >
         <Heading
          size="md"
          color={headerColor}
         >
          Create a Secure Account
         </Heading>
         <Text
          color={header2Color}
          fontSize={["0.8rem","0.8rem","0.9rem","1rem"]}
         >
          Welcome to the future of budgeting.
         </Text>
       </Flex>

       <Flex
         ml={["1.4rem","1.4rem","1.7rem","2rem"]}
         mt={["1rem","1.4rem","1.5rem","1.6rem"]}
         flexDir="column"
       >
           <FormControl>
                  {/* <Flex
                    flexDir="column"
                    mt={["0.8rem","1rem","1rem","1rem"]}
                  >
                    <FormLabel
                      color={TextColor2}
                      fontWeight={600}
                    >
                      Username
                    </FormLabel>
                    <Input
                      variant="filled"
                      bg={signUpBg}
                      w={["17.2rem","17.2rem","20.7rem","24rem"]}
                      size="lg"
                      
                      id="email"
                      onChange={(e: any)=>
                        setData({
                          ...data,
                          username: e.target.value
                        })
                      }
                      value={data.username}
                      type="userame"
                      placeholder='Username'
                    />
                  </Flex> */}

                  <Flex
                    flexDir="column"
                    mt={["0.8rem","1rem","1rem","1rem"]}
                  >
                    <FormLabel
                      color={TextColor2}
                      fontWeight={600}
                    >
                      Email Address
                    </FormLabel>
                    <Input
                      variant="filled"
                      bg={signUpBg}
                      w={["17.2rem","17.2rem","20.7rem","24rem"]}
                      size="lg"
                      
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
                    mt={["0.8rem","1rem","1rem","1rem"]}
                  >
                    <FormLabel
                      color={TextColor2}
                      fontWeight={600}
                    >
                      Password
                    </FormLabel>
                    <Input
                      variant="filled"
                      bg={signUpBg}
                      size="lg"
                      
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
                      w={["17.2rem","17.2rem","20.7rem","24rem"]}
                    />
                  </Flex>
                </FormControl>

          
         
       </Flex>

         <Flex
           flexDir="column"
          //  ml={["0.1rem","0.1rem","0.1rem","2rem"]}
           gap="1rem"
          //  mt="2rem"
           justifyContent="center"
          alignItems="center"
         >
          <motion.div
            whileInView={{ y: 0, opacity: 1}}
            initial={{ y: 100, opacity: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            <Button
              bg={signIn}
              color="white"
              onClick={handleSignup}
                type="submit"
                mt={["2.2rem","2.2rem","2.5rem","3rem"]}
                borderRadius="1rem 0 1rem 0"
                w={["9.2rem","9.2rem","11rem","13rem"]}
                h={["2.3rem","2.3rem","2.6rem","3rem"]}
                  _hover={{
                    bg: '#7858ff',
                  }}
            >
                Create account
            </Button>
          </motion.div>
          <motion.div
            whileInView={{ y: 0, opacity: 1}}
            initial={{ y: 100, opacity: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
           <Button
            onClick={handleGoogleClick}
            borderRadius="1rem 0 1rem 0"
           >
            <FcGoogle fontSize="1.5rem"/> <Text ml="0.3rem">Continue with google</Text>
           </Button>
          </motion.div>
         </Flex>

         <Flex
           // ml={["","","","22rem"]}
           justifyContent="center"
           alignItems="center"
           mt="2rem"
           mb="3rem"
           flexDir="row"
         >
           <Text
             color={textColor3}
           >
             Already have an account?  
           </Text>
            <Text
             color={textColor3}
             ml="0.4rem"
             fontWeight={700}
            >
             <Link href="/login" >
              Log in
             </Link>
            </Text>
         </Flex>
     </Flex>

     <Flex
            justifyContent="center"
            alignItems="center"
          >
            {loading ? <CircularProgress isIndeterminate value={40} thickness='4px' size="2rem"/> : ''} 
          </Flex>
 </Container>
  )
}

export default SignUpModule