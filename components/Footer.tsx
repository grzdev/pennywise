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
import { BsPiggyBank } from 'react-icons/bs'
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare
} from 'react-icons/ai'

const Footer = () => {
  return (
    <Flex
      flexDir={["column","column","column","column"]}
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
            mt={["-0.1rem", "0.2rem", "0.2rem", "-0.2rem"]}
            mb={["6rem","","",""]}
          >
            <BsPiggyBank 
              fontSize="2rem"
              color='black'

            />
          </Flex>

          <Heading
            size="md"
            ml="0.2rem"
            color='black'
          >
            trackdaily
          </Heading>
        </Flex>

        <Flex
          gap={["4rem","4rem","4rem","17rem"]}
          mt={["","","","3rem"]}
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
              <ListItem 
               mb="1rem"
               color="grey"
              >
                About 
              </ListItem>
              <ListItem
               mb="1rem"
               color="grey"
              >
                FAQs 
              </ListItem>
              <ListItem
               mb="1rem"
               color="grey"
               >
                Blog 
              </ListItem>
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
              <ListItem
              mb="1rem"
              color="grey"
              >
                Terms 
              </ListItem>
              <ListItem
              mb="1rem"
              color="grey"
              >
                Privacy 
              </ListItem>
              <ListItem
              mb="1rem"
              color="grey"
              >
                Security 
              </ListItem>
            </List>
          </Flex>
        </Flex>

        <Flex
          flexDir="column"
          mt={["5rem","","","0.1rem"]}
          justifyContent={["center","","","center"]}
          alignItems={["center","","","center"]}
        >
          <Flex
            gap="0.3rem"
          >
           <AiFillFacebook fontSize="2rem"/>
           <AiFillInstagram fontSize="2rem"/>
           <AiFillTwitterSquare fontSize="2rem"/>
          </Flex>

          <Flex
            flexDir="column"
            mt="1rem"
            justifyContent={["center","","","center"]}
            alignItems={["center","","","center"]}
          >
            <Text mb="0.5rem">
              Oko-oba Tanke, Ilorin, Nigeria
            </Text>
            <Text mb="0.5rem">
              damilolaoyeniyi13@gmail.com
            </Text>
            <Text >
              09036818841
            </Text>
          </Flex>
        </Flex>
    </Flex>

      <Flex
        justifyContent={["center","","","center"]}
        alignItems={["center","","","center"]}
        mt={["3rem","","","6rem"]}
        mb="3rem"
      >
      <Text
        fontWeight={600}
        color="blue"
        fontSize="0.8rem"
      >
        2023 TrackTech and co.
      </Text>
    </Flex>
  </Flex>
)
}

export default Footer