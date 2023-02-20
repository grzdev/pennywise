import { Flex } from '@chakra-ui/react'
import AccountModule from 'modules/Dashboard/components/AccountModule'
import SidebarWithHeader from 'modules/Dashboard/components/DashboardNavbar'
import React from 'react'

const AccountPage = () => {
  return (
    <SidebarWithHeader>
        <AccountModule/>
    </SidebarWithHeader>
  )
}

export default AccountPage