import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import "../public/assets/inputpageimage.avif";
import { Box, ChakraProvider, FormControl, FormLabel, Select } from '@chakra-ui/react'
import styles from "../styles/Inputpage.module.css"

const InputPage = () => {
  return (
  <div>
  <Head>
    <title>Saunter | Get-Started</title>
  </Head>
 
  <div className={styles.form}>
  <div className={styles.imgcontainer}>
  <Image
  className={styles.pagetwoimg}
  src="/../public/assets/inputpageimage.avif"
  alt="inputpage image"
  layout="fill"
  objectFit="cover"
  objectPosition="center"
  // display= "block"
  width="100%"
  height="100%"
  />
  </div>
<ChakraProvider>
<Box width="50vw">
  <FormControl>
  <FormLabel>Location</FormLabel>
  <Select placeholder='Select Location'>
    <option>London</option>
  </Select>

  <FormLabel>Budget</FormLabel>
  <Select placeholder='Select Budget'>
    <option>High</option>
    <option>Medium</option>
    <option>Low</option>
  </Select>
  
  <button className="btn">Create Day Plan</button>
  </FormControl>
  </Box>
  </ChakraProvider>
  </div>
  </div> 
  );
};

export default InputPage;
