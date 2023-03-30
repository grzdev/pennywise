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
  AiOutlineTwitter,
  AiFillTwitterSquare
} from 'react-icons/ai'
import { useColorModeValue } from '@chakra-ui/react'
import Link from 'next/link'
import { SiGmail, SiNetlify } from 'react-icons/si'
import { FaGem } from "react-icons/fa"

const Footer = () => {
  const textColor = useColorModeValue("black","#b9b9b9")
  const gmail = useColorModeValue("#F04235","#b6b6b6")
  const footer = useColorModeValue("#e3eeff","black")
  const headerColor = useColorModeValue("#374D9A","#c6dbfb")
  const tradeMark = useColorModeValue("black","white")
  const dami = useColorModeValue("#070D59","#C6DBFB")
  const icons = useColorModeValue("#545454","#b9b9b9")
  return (
    <Flex
      flexDir={["column","column","column","column"]}
      fontFamily="'Fira Sans', sans-serif"
      bg={footer}
      borderRadius="1.2rem"
      mt={["1rem","1rem","6rem","4rem"]}
      mb={["1.5rem","1.5rem","2rem","2rem"]}
    >
      <Flex
        w={["21.5rem","21.5rem","53rem","85rem"]}
        justifyContent={["center","","","center"]}
        alignItems={["center","","","center"]}
        gap={["","","","14rem"]}
        flexDir={["column","column","column","row"]}
        mb='4rem'
        mt="5rem"
        
      >
        <Flex>
          <Flex
            // mt={["-0.2rem", "-0.05rem", "-0.04rem", "-0.01rem"]}f
            mb={["6rem","","",""]}
            mr="0.2rem"
          >
            <Text
              fontSize={["1.5rem","1.5rem","1.8rem","1.8rem"]}
              color={headerColor}
            >
              <FaGem 
              />
            </Text>
          </Flex>

          <Heading
            size={["sm","sm","md","md"]}
            // ml={["-0.06rem","-0.05rem","-0.1rem","0.1rem"]}
            color={headerColor}
            fontFamily="'Lato', sans-serif"
          >
            pennywise
          </Heading>
        </Flex>
        

       

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
              fontSize={["0.75rem","0.75rem","0.9rem","0.9rem" ]}  
              color={textColor}
              >
              pennywise@gmail.com
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
        Damilola Oyeniyi 
        </Text>
      </Flex>
      <Flex
        flexDir="row"
        gap="0.8rem"
      >
        <Link href="https://github.com/19zay?tab=repositories">
          <Text
            fontSize={["1.2rem","1.2rem","1.3rem","1.5rem" ]}
            color={icons}
          >
            <AiFillGithub/>
          </Text>
        </Link>
        <Link href="https://twitter.com/grzdev_">
          <Text
            fontSize={["1.2rem","1.2rem","1.3rem","1.5rem" ]}
            color={icons}
          >
            <AiOutlineTwitter/>
          </Text>
        </Link>
        <Link href="https://www.linkedin.com/in/damilola-oyeniyi-97805b23a/">
          <Text
            fontSize={["1.2rem","1.2rem","1.3rem","1.5rem" ]}
            color={icons}
          >
            <AiFillLinkedin/>
          </Text>
        </Link>
        <Link href="https://app.netlify.com/teams/19zay/overview">
          <Text
            fontSize={["1.2rem","1.2rem","1.3rem","1.5rem" ]}
            color={icons}
          >
            <SiNetlify/>
          </Text>
        </Link>
        <Link href="https://www.instagram.com/grzdev_/">
          <Text
            fontSize={["1.1rem","1.2rem","1.3rem","1.5rem" ]}
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