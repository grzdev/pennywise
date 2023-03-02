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
} from '@chakra-ui/react'
import { MdTrackChanges } from 'react-icons/md'
import { FcGoogle } from "react-icons/fc"
import { useColorModeValue } from '@chakra-ui/react'
import Link from 'next/link'
import { useAuth } from 'context/AuthContext'
import { useRouter} from 'next/router'
import { CircularProgress, } from "@chakra-ui/react";

const LogInModule = () => {
  const divColor = useColorModeValue("linear-gradient( 135deg, #FFA6B7 10%, #1E2AD2 100%)","linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)")
  const headerColor = useColorModeValue("white","#c6dbfb")
  const header2Color = useColorModeValue("#f1f1f1","white")
  const TextColor2 = useColorModeValue("white","")
  const signUp = useColorModeValue("white","white")
  const signUpBg = useColorModeValue("#e6e6e6","white")
  const signIn = useColorModeValue("#5092ff","#4f89e8")
  


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

  const handleLogin = async (e: any) =>{
    e.preventDefault()

    try {
      await login(data.email, data.password)
      router.push("/dashboard")
    } catch (err) {
      console.log(err)
    }

   setLoading(true)

  }

  return (
    <Container centerContent>
       <Flex
          mt={["5rem","5rem","6rem","4rem"]}
          w={["20rem","20rem","24rem","28rem"]}
          h={["32rem","32rem","32rem","35rem"]}
          bg={divColor}
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
                color={headerColor}
              >
                trackdaily
              </Heading>
            </Link>
          </Flex>

          <Flex
            flexDir="column"
            ml={["1.3rem","1.3rem","1.5rem","2rem"]}
            mt="1.5rem"
          >
            <Heading
              size={["lg","lg","lg","lg"]}
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
                      color="white"
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
                      color="white"
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
                justifyContent="center"
                alignItems="center"
              >
                {loading ? <CircularProgress isIndeterminate value={40} thickness='4px' size="2rem"/> : ''} 
              </Flex>

            <Flex
              flexDir="column"
              // ml={["1.4rem","1.4rem","1.7rem","2rem"]}
              gap="1rem"
              justifyContent="center"
              alignItems="center"
            >
              
              <Button
                bg={signIn}
                color="white"
                // onClick={handleLogin}
                type="submit"
                mt={["3.3rem","2rem","2.5rem","3rem"]}
                borderRadius="1rem 0 1rem 0"
                w={["13.2rem","14.2rem","16.7rem","20rem"]}
              >
                Sign in
              </Button>
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
                color="white"
                >
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