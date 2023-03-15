import React from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'
import { Flex } from '@chakra-ui/react'

interface Props {
    children?: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div>
        <Head>
            <title>Penny Wise</title>
            <meta name="description" content="Track your daily expenses." />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <header>
            <Navbar/>
        </header>
        <main>
            {children}    
        </main>
        <footer>
            <Flex
                justifyContent="center"
                alignItems="center"
            >
                <Footer/>
            </Flex>   
        </footer>
    </div>
  )
}

export default Layout