import { Flex } from '@chakra-ui/react'
import SidebarWithHeader from 'modules/Dashboard/modules/DashboardNavbar'
import AnalyticsModule from 'modules/Dashboard/modules/AnalyticsModule'
import React from 'react'

const DashboardHome = () => {
  return (
    <SidebarWithHeader>
        <AnalyticsModule/>
    </SidebarWithHeader>
  )
}

export default DashboardHome