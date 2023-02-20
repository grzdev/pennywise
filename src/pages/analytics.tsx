import { Flex } from '@chakra-ui/react'
import SidebarWithHeader from 'modules/Dashboard/components/DashboardNavbar'
import AnalyticsModule from 'modules/Dashboard/components/AnalyticsModule'
import React from 'react'

const DashboardHome = () => {
  return (
    <SidebarWithHeader>
        <AnalyticsModule/>
    </SidebarWithHeader>
  )
}

export default DashboardHome