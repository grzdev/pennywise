import { 
  Box,
  Flex,
  Heading,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Text,
  VStack,
  HStack
} from '@chakra-ui/react'
import React from 'react'
import { MdTrackChanges } from 'react-icons/md'
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiFillTwitterCircle,
  AiFillTwitterSquare
} from 'react-icons/ai'
import { useColorModeValue } from '@chakra-ui/react'
import Link from 'next/link'
import { SiGmail, SiNetlify } from 'react-icons/si'

const Footer = () => {
  const textColor = useColorModeValue("#7a7a7a","#b9b9b9")
  const gmail = useColorModeValue("#F04235","#b6b6b6")
  const footer = useColorModeValue("#eceaea","black")
  const headerColor = useColorModeValue("#4f89e8","#c6dbfb")
  const tradeMark = useColorModeValue("black","white")
  const dami = useColorModeValue("#4F89E8","#C6DBFB")
  const icons = useColorModeValue("#7a7a7a","#b9b9b9")
  return (
    <Flex
      flexDir={["column","column","column","column"]}
      fontFamily="'Fira Sans', sans-serif"
      bg={footer}
      borderRadius="1.2rem"
      mt="4rem"
      mb="1rem"
    >
      <Flex
        w={["20rem","30rem","40rem","90rem"]}
        justifyContent={["center","","","center"]}
        alignItems={["center","","","center"]}
        gap={["","","","14rem"]}
        flexDir={["column","column","column","row"]}
        mb='4rem'
        mt="5rem"
        
      >
        <Flex>
          <Flex
            mt={["-0.1rem", "-0.2rem", "-0.1rem", "-0.1rem"]}
            mb={["6rem","","",""]}
          >
            <MdTrackChanges 
              fontSize="2rem"
              // color='black'
              color={headerColor}
            />
          </Flex>

          <Heading
            size="md"
            // ml="0.2rem"
            // color='black'
              color={headerColor}

          >
            trackdaily
          </Heading>
        </Flex>

        {/* <Flex
          gap={["4rem","4rem","4rem","17rem"]}
          mt={["","","","1.7rem"]}
        >
          <Flex
            flexDir="column"
          >
            <Heading
              size='xs'
            >
              Company
            </Heading>
            <List
             mt={["2rem","","","1.5rem"]}
            >
              <Link href={'/about'}>
                <ListItem 
                mb="1rem"
                color={textColor}
                fontWeight={600}
                fontSize={["0.7rem","0.7rem","0.8rem","0.8rem" ]}
                >
                  About 
                </ListItem>
              </Link>
            </List>
          </Flex>

          <Flex
           flexDir="column"
          >
            <Heading
             size='xs'
            >
              Legal
            </Heading>
            <List
             mt={["2rem","","","1.5rem"]}
            >
              <Link href={'/terms'}>
                <ListItem
                mb="1rem"
                fontWeight={600}
                color={textColor}
                fontSize={["0.7rem","0.7rem","0.8rem","0.8rem" ]}
                >
                  Terms 
                </ListItem>
              </Link>

              <Link href={'/privacy'}>
                <ListItem
                mb="1rem"
                fontWeight={600}
                color={textColor}
                fontSize={["0.7rem","0.7rem","0.8rem","0.8rem" ]}
                >
                  Privacy 
                </ListItem>
              </Link>
               <ListItem
              mb="1rem"
              color={textColor}
              >
                Security 
              </ListItem> 
            </List>
          </Flex>
        </Flex> */}

        <Flex
          flexDir="column"
          mt={["3rem","","","-3rem"]}
          ml={["","","","29rem"]}
          mb={["4rem","4rem","4rem",""]}
          justifyContent={["center","","","center"]}
          alignItems={["center","","","center"]}
        >
          <Flex
            gap="0.3rem"
          >
           {/* <AiFillFacebook fontSize="2rem" color={textColor}/>
           <AiFillInstagram fontSize="2rem" color={textColor}/>
           <AiFillTwitterSquare fontSize="2rem" color={textColor}/> */}
           <Text
            fontSize={["0.7rem","0.7","0.7rem","1.2rem" ]}
            color={gmail}
           >
            <SiGmail />
           </Text>
          </Flex>

          <Flex
            flexDir="column"
            mt="0.3rem"
            justifyContent={["center","","","center"]}
            alignItems={["center","","","center"]}
          >
            <Text 
              mb="0.5rem" 
              fontSize={["0.7rem","0.7rem","0.8rem","0.8rem" ]}  
              color={textColor}
              >
              trackdaily23@gmail.com
            </Text>
          </Flex>
        </Flex>
    </Flex>

      <Flex
        justifyContent={["center","","","center"]}
        alignItems={["center","","","center"]}
        mt={["3rem","3rem","3rem","6rem"]}
        mb="3rem"
        flexDir="column"
        gap={["0.4rem","0.4rem","0.5rem","0.5rem"]}
      >
      <Flex
        flexDir= "row"
        alignItems="center"
      >
        <Text
          fontWeight={600}
          color={tradeMark}
          fontSize={["0.7rem","0.7rem","0.8rem","0.8rem" ]}
          mr="0.3rem"
        >
          Made in NG by
        </Text>
        <Text 
          fontWeight={600}
          color={dami}
          fontSize={["0.7rem","0.7rem","0.8rem","0.8rem" ]}
        >
        Oyeniyi Damilola
        </Text>
      </Flex>
      <Flex
        flexDir="row"
        gap="0.6rem"
      >
        <Link href="https://github.com/19zay?tab=repositories">
          <Text
            fontSize={["1.1rem","1.1rem","1.3rem","1.5rem" ]}
            color={icons}
          >
            <AiFillGithub/>
          </Text>
        </Link>
        <Link href="https://twitter.com/grzdev_">
          <Text
            fontSize={["1.1rem","1.1rem","1.3rem","1.5rem" ]}
            color={icons}
          >
            <AiFillTwitterCircle/>
          </Text>
        </Link>
        <Link href="https://www.linkedin.com/in/damilola-oyeniyi-97805b23a/">
          <Text
            fontSize={["1.1rem","1.1rem","1.3rem","1.5rem" ]}
            color={icons}
          >
            <AiFillLinkedin/>
          </Text>
        </Link>
        <Link href="https://app.netlify.com/teams/19zay/overview">
          <Text
            fontSize={["1.1rem","1.1rem","1.3rem","1.5rem" ]}
            color={icons}
          >
            <SiNetlify/>
          </Text>
        </Link>
        <Link href="https://www.instagram.com/grzdev_/">
          <Text
            fontSize={["1.1rem","1.1rem","1.3rem","1.5rem" ]}
            color={icons}
          >
            <AiFillInstagram/>
          </Text>
        </Link>
      </Flex>
    </Flex>
  </Flex>
)
}

export default Footer