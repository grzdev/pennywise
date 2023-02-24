import { Container, Flex, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

const AnalyticsModule = () => {
  const divColor = useColorModeValue("#6a11cb","#0c3483")
  const divGradient = useColorModeValue("linear-gradient(to top, #505285 0%, #585e92 12%, #65689f 25%, #7474b0 37%, #7e7ebb 50%, #8389c7 62%, #9795d4 75%, #a2a1dc 87%, #b5aee4 100%);","linear-gradient(to top, #0c3483 0%, #a2b6df 100%, #6b8cce 100%, #a2b6df 100%);")
  // background-image: linear-gradient(to top, #0c3483 0%, #a2b6df 100%, #6b8cce 100%, #a2b6df 100%);
  return (
    <Container
      centerContent
    >
      <Flex
        justifyContent="center"
        alignItems="center"
      >
        <Flex
          w={["20rem","20rem","34rem","60rem"]}
          h={["30rem","30rem","39rem","34rem"]}
          borderRadius="1rem 1rem 0 1rem"
          bg= {divColor}
          bgGradient= {divGradient}
          mt={["3rem","","4rem","4rem"]}
          boxShadow="2xl"
        >

        </Flex>
      </Flex>
    </Container>
  )
}

export default AnalyticsModule