import "../styles/globals.css"
import Layout from '../components/Layout'
// import { ChakraProvider } from '@chakra-ui/react'


function MyApp({ Component, pageProps }) {
  return (
  <Layout>
  <Component {...pageProps} />
  </Layout>
)}

export default MyApp
