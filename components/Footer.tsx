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
import { MdOutlineEmail, MdTrackChanges } from 'react-icons/md'
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
import { IoMdMail } from 'react-icons/io'
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
        w={["21.5rem","21.5rem","45rem","81rem"]}
        h={["","","22rem","16rem"]}
        justifyContent={["center","","","center"]}
        alignItems={["center","","","center"]}
        gap={["","","","14rem"]}
        flexDir={["column","column","column","row"]}
        mb='4rem'
        mt="5rem"
        
      >
        {/* Logo */}
        <Flex
          mt={["","","-2rem","-8rem"]}
        >
          <Flex
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
            color={headerColor}
            fontFamily="'Lato', sans-serif"
          >
            pennywise
          </Heading>
        </Flex>
        
        {/* Project Gmail */}
        <Flex
          flexDir="column"
          mt={["3rem","","7rem","-10rem"]}
          ml={["","","","29rem"]}
          mb={["4rem","4rem","4rem",""]}
          justifyContent={["center","","","center"]}
          alignItems={["center","","","center"]}
        >
          <Flex
            gap="0.3rem"
          >
           <Text
            fontSize={["0.7rem","0.7","1rem","1.4rem" ]}
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
              fontSize={["1rem","1rem","1rem","1rem" ]}  
              color={textColor}
              >
              pennywise@gmail.com
            </Text>
          </Flex>
        </Flex>
    </Flex>

      {/* Author's Signature and Links */}
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
          fontSize={["0.8rem","0.9rem","1rem","1rem" ]}
          mr="0.3rem"
        >
          Made in NG by
        </Text>
        <Text 
          fontWeight={600}
          color={dami}
          fontSize={["0.9rem","0.9rem","1rem","1rem" ]}
        >
        Damilola Oyeniyi 
        </Text>
      </Flex>
      {/* <Flex
        flexDir="row"
        gap={["0.9rem","0.9rem","1.1rem","1.2rem"]}
      >
        <Link href="https://github.com/19zay?tab=repositories">
          <Text
            fontSize={["1.4rem","1.4rem","1.5rem","1.6rem" ]}
            color={icons}
          >
            <AiFillGithub/>
          </Text>
        </Link>
        <Link href="https://twitter.com/grzdev_">
          <Text
            fontSize={["1.4rem","1.4rem","1.5rem","1.6rem" ]}
            color={icons}
          >
            <AiOutlineTwitter/>
          </Text>
        </Link>
        <Link href="https://www.linkedin.com/in/damilola-oyeniyi-97805b23a/">
          <Text
            fontSize={["1.4rem","1.4rem","1.5rem","1.6rem" ]}
            color={icons}
          >
            <AiFillLinkedin/>
          </Text>
        </Link>
        <Link href="mailto:damilolaoyeniyi13@gmail.com">
          <Text
            fontSize={["1.4rem","1.4rem","1.5rem","1.6rem" ]}
            color={icons}
          >
            <IoMdMail/>
          </Text>
        </Link>
        <Link href="https://www.instagram.com/grzdev_/">
          <Text
            fontSize={["1.4rem","1.4rem","1.5rem","1.6rem" ]}
            color={icons}
          >
            <AiFillInstagram/>
          </Text>
        </Link>
      </Flex> */}
    </Flex>
  </Flex>
)
}

export default Footer