/* eslint-disable react/no-children-prop */
import React from 'react'
import Head from 'next/head'
import { Flex } from '@chakra-ui/react'
import DashboardNavbar from './DashboardNavbar'

interface Props {
    children?: React.ReactNode
}

const DashboardLayout = ({ children }: Props) => {
  return (
    <div>
    <Head>
        <title>Track Daily</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <header>
        <DashboardNavbar children={undefined}/>
    </header>
    <main>
        {children}    
    </main>
    <footer>
        <Flex
            justifyContent="center"
            alignItems="center"
        >
            
        </Flex>   
    </footer>
</div>
  )
}

export default DashboardLayout