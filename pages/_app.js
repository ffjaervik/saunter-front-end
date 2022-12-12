import "../styles/globals.css";
import Layout from '../components/Layout';
import { ChakraProvider } from '@chakra-ui/react';



import { UserProvider } from "@auth0/nextjs-auth0";



function MyApp({ Component, pageProps }) {
  return (

    <UserProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  );
}


export default MyApp;
