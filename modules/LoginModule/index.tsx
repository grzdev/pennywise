/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react'
import { 
  Box,
  Button,
  Checkbox,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  useToast, 
} from '@chakra-ui/react'
import { MdTrackChanges } from 'react-icons/md'
import { FcGoogle } from "react-icons/fc"
import { useColorModeValue } from '@chakra-ui/react'
import Link from 'next/link'
import { useAuth } from 'context/AuthContext'
import { useRouter} from 'next/router'
import { CircularProgress, } from "@chakra-ui/react";
import { motion } from 'framer-motion'
import { FaGem } from 'react-icons/fa'

const LogInModule = () => {
  const divColor = useColorModeValue("white","#333f55")
  const headerColor = useColorModeValue("#374D9A","#c6dbfb")
  const header2Color = useColorModeValue("black","white")
  const TextColor2 = useColorModeValue("black","")
  const signUp = useColorModeValue("white","white")
  const signUpBg = useColorModeValue("#e6e6e6","#2a3549")
  const signIn = useColorModeValue("linear-gradient( 135deg, #FFA6B7 10%, #1E2AD2 100%)","linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)")
  const textColor3 = useColorModeValue("black","")


  const router = useRouter()

  const { signIWithGoogle, forgotPassword } = useAuth()

  const [loading, setLoading] = useState(false)
  
  const { user, login } = useAuth()

  const [ data, setData ] = useState({
    email:'',
    password:''
  })

  // const handleForgotPassword = async (e: any) => {
  //   e.preventDefault()

  //   try {
  //     await forgotPassword()
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }


  const handleGoogleClick = async (e: any) => {
    e.preventDefault()

    try {
      await signIWithGoogle()
      router.push("/dashboard")
    } catch (error) {
      console.log(error)
    }
  }

  const toast = useToast()
  const handleLogin = async (e: any) =>{
    e.preventDefault()
    try {
      await login(data.email, data.password)
      router.push("/dashboard")
      toast({
        title: 'Login successful',
        description: "",
        position:"top",
        status: 'success',
        duration: 6000,
        isClosable: true,
    })
    } catch (err) {
      toast({
        position:"top",
        title: 'Wrong password or email',
        description: "",
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
          mt={["3.5rem","3.5rem","6rem","6rem"]}
          w={["20rem","20rem","24rem","28rem"]}
          h={["32rem","32rem","32rem","35rem"]}
          bg={divColor}
          mb="3rem"
          boxShadow="2xl"
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
              // mt={["-0.3rem", "-0.3rem", "-0.3rem", "-0.1rem"]}
            >
              <Link href="/">
                <Text
                  fontSize={["1.3rem","1.3rem","1.8rem","1.8rem"]}
                  color={headerColor}
                  mr="0.2rem"
                >
                  <FaGem
                  />
                </Text>
              </Link>
            </Flex>

            <Link href="/">
              <Heading
               size={["sm","sm","md","md"]}
               fontFamily="'Lato', sans-serif"
                // ml={["-0.05rem","-0.05rem","-0.05rem","-0.1rem"]}
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
              Welcome back
            </Heading>
            <Text
              color={header2Color}
              fontSize={["0.8rem","0.8rem","0.9rem","1rem"]}
            >
             Securly login to your Trackdaily account.
            </Text>
          </Flex>

          <Flex
            ml={["1.4rem","1.4rem","1.7rem","2rem"]}
            mt={["1rem","1.4rem","1.5rem","1.6rem"]}
            flexDir="column"
          >
            <Flex>
                <FormControl>
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
                      size="lg"
                      w={["17.2rem","17.2rem","20.7rem","24rem"]}
                      // h={["2.4rem","","",""]}
                      // color="white"
                      // mt="0.5rem"
                      id='email'
                      bg={signUpBg}
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
                      // color="white"
                      bg={signUpBg}
                      size="lg"
                      // mt="0.5rem"
                      id='password'
                      onChange={(e:any)=>
                        setData({
                          ...data,
                          password: e.target.value
                        })
                      }
                      value={data.password}
                      type="password"
                      placeholder='Password'
                      // h={["2.4rem","","",""]}
                      w={["17.2rem","17.2rem","20.7rem","24rem"]}
                    />
                  </Flex>
                </FormControl>
            </Flex>
          </Flex>

            {/* <Flex
              ml={["8rem","7rem","8rem","21rem"]}
              mt="1rem"
              mb="1rem"
            >
              <Link href="/reset">
                <Text
                  fontSize={["0.7rem","0.7rem","0.7rem","0.9rem"]}
                  fontWeight={600}
                  ml="1rem"
                >
                  Forgot Password?
                </Text>
              </Link>
            </Flex> */}

            <Flex
              flexDir="column"
              // ml={["1.4rem","1.4rem","1.7rem","2rem"]}
              gap="1rem"
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
                  onClick={handleLogin}
                  type="submit"
                  mt={["2.2rem","2rem","2.5rem","3rem"]}
                  borderRadius="1rem 0 1rem 0"
                  w={["9.2rem","9.2rem","11rem","15rem"]}
                  h={["2.3rem","2.3rem","2.6rem","3rem"]}
                  _hover={{
                    bg: '#7858ff',
                  }}
                >
                  Sign in
                </Button>
              </motion.div>
              {/* <Button
                onClick={handleGoogleClick}
                type="submit"
              >
               <FcGoogle fontSize="1.5rem"/> <Text ml="0.3rem">Sign in with google</Text>
              </Button> */}
            </Flex>

            <Flex
              justifyContent="center"
              alignItems="center"
              mt={["2rem","2rem","1rem","2rem"]}
              mb="2rem"
              flexDir="row"
            >
              <Text
                color={textColor3}
                >
               Don't have an account? 
              </Text>
               <Text
                color={textColor3}
                ml="0.4rem"
             fontWeight={700}

               >
                <Link 
                  href="/signup" 
                  color={textColor3}
                >
                  Sign up
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

export default LogInModule