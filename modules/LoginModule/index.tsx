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
import Router from 'next/router'
import { CircularProgress, } from "@chakra-ui/react";

const LogInModule = () => {
  const divColor = useColorModeValue("white","")
  const headerColor = useColorModeValue("#4f89e8","#c6dbfb")
  const TextColor2 = useColorModeValue("black","")
  const signUp = useColorModeValue("#0059ec","#5088e4")
  const signIn = useColorModeValue("#0059ec","#4f89e8")

  const { signIWithGoogle } = useAuth()

  const [loading, setLoading] = useState(false)
  
  const { user, login } = useAuth()

  const [ data, setData ] = useState({
    email:'',
    password:''
  })


  const handleGoogleClick = async (e: any) => {
    e.preventDefault()

    try {
      await signIWithGoogle()
      Router.push("/dashboard")
    } catch (error) {
      console.log(error)
    }
  }

  const handleLogin = async (e: any) =>{
    e.preventDefault()

    try {
      await login(data.email, data.password)
      Router.push("/dashboard")
    } catch (err) {
      console.log(err)
    }

   setLoading(true)

  }

  return (
    <Container centerContent>
       <Flex
          mt="4rem"
          w={["","","","30rem"]}
          bg={divColor}
          justifyContent="center"
          alignContent="center"
          borderRadius="1rem"
          flexDir="column"
        >
          <Flex
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
            mt={["1rem","1.4rem","1.5rem","1.6rem"]}
            flexDir="column"
          >
            <Flex>
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
                      size="lg"
                      mt="0.5rem"
                      id='email'
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
                      size="lg"
                      mt="0.5rem"
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
                    />
                  </Flex>
                </FormControl>
            </Flex>
          </Flex>

            <Flex
              ml={["8rem","7rem","8rem","21rem"]}
              mt="1rem"
              mb="1rem"
            >
              {/* <Link href="/resetpassword">
                <Text
                  fontSize={["0.7rem","0.7rem","0.7rem","0.9rem"]}
                  fontWeight={600}
                  ml="1rem"
                >
                  Forgot Password?
                </Text>
              </Link> */}
            </Flex>

            <Flex
              flexDir="column"
              ml={["0.1rem","0.1rem","0.1rem","2rem"]}
              gap="1rem"
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
                onClick={handleLogin}
                type="submit"
              >
                Sign in
              </Button>
              <Button
                onClick={handleGoogleClick}
              >
               <FcGoogle fontSize="1.5rem"/> <Text ml="0.3rem">Sign in with google</Text>
              </Button>
            </Flex>

            <Flex
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