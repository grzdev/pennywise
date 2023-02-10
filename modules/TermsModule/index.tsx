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
import TermsImg from "../../images/terms1.png"

const Terms = () => {
  const headerBg = useColorModeValue("#EEF4FC","#256EC1")
  const header = useColorModeValue("#0F60D6","whitre")
  const textColor = useColorModeValue("grey","#b6b6b6")

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
          mt={["6rem", "10rem", "10rem", "16rem"]}
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
            Terms Of Use
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
               Please note that your use of and access to the services (as defined below)
               are subject to the following terms; if you do not agree to all of these terms,
               you may not use or access the services in any manner.
              </Text>

              <Text
                fontWeight={600}
                mt={["1rem","1rem","1rem",""]}
              >
                Last updated: February 10, 2023
              </Text>
            </Flex>
        </VStack>

        <Box
            ml={["0.2rem", "4rem", "3rem", "4.8rem"]}
            w={["27rem", "40rem", "40rem", "51rem"]}
            mt={["2rem", "", "3rem", "3rem"]}
          >
            <Image
              src={TermsImg}
              alt=""
            />
          </Box>
      </Flex>

      <Flex
        mt="7rem"
      >
        <Text
          fontWeight={600}
          // color={textColor}
          fontSize={["1.1rem", "1.1rem", "1.1rem", "1.2rem"]}
          mb={["5rem", "5rem", "5rem", "8rem"]}
          w={["21rem", "23rem", "30rem", "80rem"]}
          mt="1rem"
          justifyContent="center"
          lineHeight="2rem"
          alignItems="center"
          textAlign={["center", "initial"]}
          fontFamily="'DM Sans',sans-serif "
        >
          These Terms of Use (these "Terms") represent an agreement between you and PiggyTech Global Limited.
          ("TrackDaily") and contain the terms and conditions governing your use of and access to our website
          at https://www.trackDaily.com and all affiliated websites owned and operated by us 
          (collectively, the "Website") and our products, services, and applications 
          (together with the Website, the "Services"). "You" and "your" mean the person who uses or accesses
          the Services. "We," "us," and "our" mean TrackDaily and its successors, affiliates, and assignees. As 
          used in these Terms, "TrackDaily Account" means the account you have with us for the Services.<br/><br/>

          Your use of and access to the Services are subject at all times to these Terms and our Privacy Policy.
          Please read these Terms and our Privacy Policy carefully. By using or accessing the Services, you represent
          that you have read and understood these Terms and our Privacy Policy and you agree to be bound by these Terms
          and our Privacy Policy. If you do not agree to all the terms and conditions of these Terms and our Privacy 
          Policy, do not use or access the Services.
        </Text>
      </Flex>
    </Container>
  )
}

export default Terms