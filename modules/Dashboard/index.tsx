import React from 'react'
import { Button, Flex } from '@chakra-ui/react'
import Link from 'next/link'
import DashBoardLandingPage from './components/DashBoardLandingPage';
import DashboardLayout from './components/DashboardLayout';

const DashboardModule = () => {

  return (
    <DashboardLayout>
     <DashBoardLandingPage/>
    </DashboardLayout>
  )
}

export default DashboardModule