import React from 'react'
import { Button, Flex } from '@chakra-ui/react'
import Link from 'next/link'
import { useAuth } from "context/AuthContext";
import router from "next/router";

const DashboardModule = () => {
  const { user, logout } = useAuth()

  return (
    <Flex>
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
            Hiyya
    </Flex>
  )
}

export default DashboardModule