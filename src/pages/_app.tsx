import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
// import { UserProvider } from '@auth0/nextjs-auth0/client';
import { AuthContextProvider } from 'context/AuthContext';
import { useRouter } from "next/router"
import ProtectedRoute from 'components/ProtectedRoute';

const noAuthRequired = ['/' ,'/login', '/signup']

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (
    <AuthContextProvider>
      <ChakraProvider>
        {noAuthRequired.includes(router.pathname)?(
          <Component {...pageProps}/>
          ) : (
            <ProtectedRoute>
              <Component {...pageProps} />
            </ProtectedRoute>
          )}
      </ChakraProvider>
     </AuthContextProvider>
  )
}
