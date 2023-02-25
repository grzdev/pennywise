import React from 'react'
import { Button, Flex } from '@chakra-ui/react'
import Link from 'next/link'
import DashBoardLandingPage from './modules/DashBoardLandingPage';
import SidebarWithHeader from './modules/DashboardNavbar';

const DashboardModule = () => {

  return (
    <SidebarWithHeader>
     <DashBoardLandingPage/>
    </SidebarWithHeader>
  )
}

export default DashboardModule