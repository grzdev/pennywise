import { Flex } from '@chakra-ui/react'
import AccountModule from 'modules/Dashboard/modules/AccountModule'
import SidebarWithHeader from 'modules/Dashboard/modules/DashboardNavbar'
import React from 'react'

const AccountPage = () => {
  return (
    <SidebarWithHeader>
        <AccountModule/>
    </SidebarWithHeader>
  )
}

export default AccountPage