/* eslint-disable react/no-children-prop */
import React from 'react'
import Head from 'next/head'
import SidebarWithHeader from '../DashboardNavbar'
import { Flex } from '@chakra-ui/react'

interface Props {
    children?: React.ReactNode
}

const DashboardLayout = ({children}: {children : React.ReactNode}) => {
  return (
    <div>
    <Head>
        <title>Track Daily</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <header>
        <SidebarWithHeader children={undefined}/>
    </header>
    <main>
        {children}    
    </main>
    <footer>
        <Flex
            justifyContent="center"
            alignItems="center"
        >
            {/* <Footer/> */}
        </Flex>   
    </footer>
</div>
  )
}

export default DashboardLayout