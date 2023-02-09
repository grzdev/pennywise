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
import { BsPiggyBank } from 'react-icons/bs'
import { useColorModeValue } from '@chakra-ui/react'
import Link from 'next/link'

const SignUpModule = () => {
  const divColor = useColorModeValue("#2a53b8","white")
  const TextColor = useColorModeValue("white","#084DA1")
  const TextColor2 = useColorModeValue("white","#4A5568")
  const TextColor3 = useColorModeValue("white","black")
  const button = useColorModeValue("#608dff","#084DA1")

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDir="column"
      mt={["3rem", "2rem", "2rem", "3rem"]}
      mb="3rem"
    >
       <Flex
          mt="0.4rem"
        >
          <Flex
            mt={["-0.5rem", "0.2rem", "0.2rem", "-0.3rem"]}
          >
            <BsPiggyBank
              fontSize="3rem"
              // color='black'
            />
          </Flex>

          <Heading
            size="lg"
            ml="0.2rem"
            // color='black'
          >
            trackdaily
          </Heading>
        </Flex>

        <Flex
          w={["22rem","22rem","22rem","27rem"]}
          h={["43rem","35rem","35rem","43rem"]}
          bg={divColor}
          mt={["1rem","3rem","3rem","2rem"]}
          borderRadius="1.3rem"
          // justifyContent="center"
          // alignItems="center"
          flexDir="column"
          boxShadow=" rgba(0, 0, 0, 0.1) 0px 10px 50px;"
        >
          <Flex
            flexDir="column"
            // justifyContent="center"
            alignItems="center"
            mt="3rem"
          >
            <Heading
              color={TextColor}
              size="md"
            >
              Create a Secure Account
            </Heading>
            <Text
              color={TextColor3}
              mt="0.2rem"
              fontSize="0.9rem"
            >
              Welcome to the future of budgeting.
            </Text>
          </Flex>

          <Flex
            flexDir="column"
            // w={["","","","20rem"]}
            justifyContent="center"
            alignItems="center"
            mt="2rem"
          >
            <Flex
              flexDir="column"
            >
              <Text
                color={TextColor2}
                fontWeight={600}
              >
                Full Name
              </Text>
              <Input
                variant="filled"
                bg="#EDF2F7"
                size="lg"
                mt="0.5rem"
                placeholder="Full name"
                _placeholder={{ color: "grey", fontSize: "0.8rem" }}
              />
            </Flex>

            <Flex
              flexDir="column"
              mt="2rem"
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
                _placeholder={{ color: "grey", fontSize: "0.8rem"  }}
              />
            </Flex>

            <Flex
              flexDir="column"
              mt="2rem"
            >
              <Text
                color={TextColor2}
                fontWeight={600}
              >
                Username
              </Text>
              <Input
                variant="filled"
                bg="#EDF2F7"
                size="lg"
                mt="0.5rem"
                placeholder="Username"
                _placeholder={{ color: "grey", fontSize: "0.8rem"  }}
              />
            </Flex>

            <Flex
              flexDir="column"
              mt="2rem"
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
                _placeholder={{ color: "grey", fontSize: "0.8rem"  }}
              />
            </Flex>

            <Flex
              mt="3rem"
            >
              <Button
                bg={button}
                size="lg"
                color="white"
              >
                CREATE ACCOUNT
              </Button>
            </Flex>
          </Flex>
         
        </Flex>

        <Flex
          mt="2rem"
        >
          <Link href="/login">
            <Text>
              Already have an account? Log in
            </Text>
          </Link>
        </Flex>
    </Flex>
  )
}

export default SignUpModule