import { 
  Box, 
  Container,
 } from '@chakra-ui/react'
import React from 'react'
import LoginModule from 'modules/LoginModule'
import BackgroundImage from '../../images/background1.png'

const SignIn = () => {
  return (
    <Container
      maxW="container.xl"
      bg="#062763"
    >
      <LoginModule/>
    </Container>
  )
}

export default SignIn