import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
// import { UserProvider } from '@auth0/nextjs-auth0/client';
import { AuthContextProvider } from 'context/AuthContext';
import { useRouter } from "next/router"
import ProtectedRoute from 'components/ProtectedRoute';
import { store } from 'redux/store';
// import store from 'redux/store';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react'

const noAuthRequired = ['/' ,'/login', '/signup', "/about"]
let persistor = persistStore(store)


export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (
    <AuthContextProvider>
      <ChakraProvider>
        <Provider store={store}>
          {/* <PersistGate persistor={persistor}> */}
          {noAuthRequired.includes(router.pathname)?(
            <Component {...pageProps}/>
            ) : (
              <ProtectedRoute>
                <Component {...pageProps} />
              </ProtectedRoute>
            )}
          {/* </PersistGate> */}
        </Provider>
      </ChakraProvider>
     </AuthContextProvider>
  )
}
