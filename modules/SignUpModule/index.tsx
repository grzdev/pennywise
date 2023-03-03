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
import { useRouter} from 'next/router'
import { useAuth } from 'context/AuthContext'
import { CircularProgress, } from "@chakra-ui/react";


const SignUpModule = () => {
  const divColor = useColorModeValue("linear-gradient( 135deg, #FFA6B7 10%, #1E2AD2 100%)","linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)")
  const headerColor = useColorModeValue("white","#c6dbfb")
  const TextColor2 = useColorModeValue("white","")
  const signUp = useColorModeValue("white","white")
  const signUpBg = useColorModeValue("#e6e6e6","white")
  const header2Color = useColorModeValue("#f1f1f1","white")
  const signIn = useColorModeValue("#5092ff","#4f89e8")
  const router = useRouter()

  const { signIWithGoogle } = useAuth()

  const [loading, setLoading] = useState(false)

  const { user, signup } = useAuth()
  console.log(user)

  const [ data, setData ] = useState({
    email:'',
    password:'',
    username: ''
  })

  const handleGoogleClick = async (e: any) => {
    e.preventDefault()

    try {
      await signIWithGoogle()
      router.push("/dashboard")
    } catch (error) {
      console.log(error)
    }
  }

  const handleSignup = async (e: any) => {
    e.preventDefault()
  
    try {
      await signup(data.email, data.password)
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
       w={["20.5rem","20.5rem","24rem","28rem"]}
       h={["33rem","33rem","32rem","35rem"]}
       mb="3rem"
       boxShadow="dark-lg"
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
         ml={["1.3rem","1.3rem","1.5rem","2rem"]}
         mt="1.5rem"
       >
         <Heading
          size={["lg","lg","lg","lg"]}
          color={headerColor}
         >
          Create a Secure Account
         </Heading>
         <Text
          color={header2Color}
          fontSize={["0.8rem","0.8rem","0.9rem","1rem"]}
         >
          Welcome to the future of budgeting
         </Text>
       </Flex>

       <Flex
         ml={["1.4rem","1.4rem","1.7rem","2rem"]}
         mt={["1rem","1.4rem","1.5rem","1.6rem"]}
         flexDir="column"
       >
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

          <Flex
            justifyContent="center"
            alignItems="center"
          >
            {loading ? <CircularProgress isIndeterminate value={40} thickness='4px' size="2rem"/> : ''} 
          </Flex>
         
       </Flex>

         <Flex
           flexDir="column"
           ml={["0.1rem","0.1rem","0.1rem","2rem"]}
           gap="1rem"
          //  mt="2rem"
           justifyContent="center"
          alignItems="center"
         >
           <Button
             bg={signIn}
             color="white"
            //  onClick={handleSignup}
            type="submit"
                mt={["3.3rem","2rem","2.5rem","3rem"]}
                borderRadius="1rem 0 1rem 0"
                w={["13.2rem","14.2rem","16.7rem","20rem"]}
           >
              Create account
           </Button>
           {/* <Button
            onClick={handleGoogleClick}
           >
            <FcGoogle fontSize="1.5rem"/> <Text ml="0.3rem">Continue with google</Text>
           </Button> */}
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
             color={signUp}
           >
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