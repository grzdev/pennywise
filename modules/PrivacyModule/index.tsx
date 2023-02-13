/* eslint-disable react/no-unescaped-entities */
import { 
  Flex,
  Heading,
  Container, 
  useColorModeValue,
  Box,
  VStack,
  Text
} from '@chakra-ui/react'
import React from 'react'
import Image from 'next/image'
import PrivacyImg from "../../images/privacy.png"

const Privacy = () => {
  const headerBg = useColorModeValue("#EEF4FC","#256EC1")
  const header = useColorModeValue("#0F60D6","whitre")
  const textColor = useColorModeValue("grey","#b6b6b6")
  const secondDivCOlor = useColorModeValue("#e6f1ff","")  

  return (
    <Container
    centerContent
    maxW="container.lg"
  >
    <Flex
      mt={["6rem", "1rem"]}
      flexDir={["column", "column", "column", "row"]}
      justifyContent={["center","","","flex-start"]}
      alignItems={["center","","","flex-start"]}
      ml={["", "", "", "6rem"]}
    >
      <VStack
        mt={["6rem", "10rem", "10rem", "12rem"]}
      >
        <Heading
          size="3xl"
          w={["20rem", "30rem", "30rem", "30rem"]}
          lineHeight={["3rem", "3rem", "3.6rem", "3.9rem"]}
          // mt={["4rem","2rem","2rem","10rem"]}
          ml={["", "", "", "2rem"]}
          textAlign={["center", "initial"]}
          fontFamily="'Roboto', sans-serif"
        >
          Privacy Policy
        </Heading>
          <Flex
          flexDir="column"
          justifyContent={["center","center","flex-start","flex-start"]}
          alignItems={["center","center","flex-start","flex-start"]}
          >
            <Text
              fontWeight={500}
              color={textColor}
              fontSize={["1.1rem", "1.1rem", "1.1rem", "1.2rem"]}
              mb={["0.4rem", "0.4rem", "0.4rem", "2rem"]}
              w={["18rem", "30rem", "30rem", "28rem"]}
              mt="1rem"
              justifyContent="center"
              alignItems="center"
              textAlign={["center", "initial"]}
              fontFamily="'DM Sans',sans-serif "
            >
             This privacy policy (this "Privacy Policy") explains how personal information is collected, 
             used, stored, and disclosed by TrackTech Global Limited, ("TrackDaily," "we," "us," and "our").<br/><br/>

             The provisions contained in this Privacy Policy supersede all previous notices and statements regarding
             our privacy practices with respect to our services.
            </Text>

            <Text
              fontWeight={600}
              mt={["1rem","1rem","1rem",""]}
              mb="3rem"
            >
              Last updated: February 10, 2023
            </Text>
          </Flex>
      </VStack>

      <Box
          ml={["0.2rem", "4rem", "3rem", "4.8rem"]}
          w={["27rem", "40rem", "40rem", "51rem"]}
          mt={["2rem", "", "3rem", "5rem"]}
        >
          <Image
            src={PrivacyImg}
            alt=""
          />
        </Box>
    </Flex>

    <Flex
      mt={["4rem","4rem","6rem","7rem"]}
      flexDir="column"
      bg={secondDivCOlor}
      w={["30rem","50rem","70rem ","96rem"]}
      h={["","","","47rem"]}
      justifyContent={["center","center","center","center"]}
      alignItems={["center","center","center","center"]}
      mb={["4rem","5rem","5rem","7rem"]}
    >
      <Box
         w={["20rem", "30rem", "30rem", "100%"]}
         mt={["6rem","","","7rem"]}
      >
        <Heading
          size={["lg","lg","lg","xl"]}
            lineHeight={["3rem", "3rem", "3.6rem", "3.9rem"]}
            // mt={["4rem","2rem","2rem","10rem"]}
            // ml={["", "", "", "2rem"]}
            textAlign={["center", "center"]}
            fontFamily="'Roboto', sans-serif"
        >
          Application of this Privacy Policy
        </Heading>
      </Box>
      <Text
        fontWeight={600}
        // color={textColor}
        fontSize={["1.1rem", "1.1rem", "1.1rem", "1.2rem"]}
        mb={["5rem", "5rem", "5rem", "8rem"]}
        w={["21rem", "23rem", "30rem", "80rem"]}
        mt="2rem"
        justifyContent="center"
        lineHeight="2rem"
        alignItems="center"
        textAlign={["center", "initial"]}
        fontFamily="'DM Sans',sans-serif "
      >
       This Privacy Policy applies generally to the business of TrackDaily and serves to set
       out our approach to personal data, inclusive of personal data of our consumer users ("Users").
       This Privacy Policy applies to systems, operations and processes of PiggyVest that involve the
       collection, use, storage, and disclosure etc. of personal information.<br/><br/>

       This Privacy Policy applies to use of our websites, applications, other online services and/or 
       any related services, sales, marketing, promotional or events, and social media activities 
       (collectively, our "Services"). For our Users, this Privacy Policy is part of our Terms of Use.<br/><br/>

       This Privacy Policy applies to your use of (regardless of means of access) our Services. 
       You may access or use our Services through a desktop, laptop, mobile phone, tablet, or other consumer 
       electronic device (each, a "Device"). This Privacy Policy also applies to offline interactions with TrackDaily.<br/><br/>

       By accessing or using our Services, you agree to this Privacy Policy.
      </Text>
    </Flex>
  </Container>
  )
}

export default Privacy