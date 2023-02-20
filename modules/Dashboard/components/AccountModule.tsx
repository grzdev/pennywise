import { Flex, Button } from '@chakra-ui/react'
import React from 'react'
import router from "next/router";
import { useAuth } from 'context/AuthContext';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useColorMode } from '@chakra-ui/react';

const AccountModule = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const { user, logout } = useAuth()

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      mt="4rem"
      bottom={0}
    >
      <Button
        fontSize={'sm'}
        fontWeight={600}
        // variant={'outlne'}
        onClick={()=>{
        logout(),
        router.push("/login")
        }}
      >
        Logout
      </Button>
      <Button 
          onClick={toggleColorMode}
          // display={{ base: 'none', md: 'inline-flex' }}
          
        >
          {colorMode === 'light' ? <MoonIcon/> : <SunIcon/>}
        </Button>
    </Flex>
  )
}

export default AccountModule