import { Box } from '@chakra-ui/react'
import { Layout } from 'components'
import DashboardModule from 'modules/Dashboard'
import React from 'react'

const Dashboard = () => {
  return (
    <Layout>
        <DashboardModule/>
    </Layout>
  )
}

export default Dashboard