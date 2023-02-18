import { Flex, Button } from '@chakra-ui/react'
import React from 'react'
import router from "next/router";
import { useAuth } from 'context/AuthContext';

// interface Props {
//     children?: React.ReactNode
// }

const DashBoardLandingPage = () => {
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
    </Flex>
  )
}

export default DashBoardLandingPage