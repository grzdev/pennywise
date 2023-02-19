import React from 'react'
import { Button, Flex } from '@chakra-ui/react'
import Link from 'next/link'
import DashBoardLandingPage from './components/DashBoardLandingPage';
import SidebarWithHeader from './components/DashboardNavbar';

const DashboardModule = () => {

  return (
    <SidebarWithHeader>
     <DashBoardLandingPage/>
    </SidebarWithHeader>
  )
}

export default DashboardModule