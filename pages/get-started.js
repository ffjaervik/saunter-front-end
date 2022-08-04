import {useState, useEffect, useCallback} from "react";
import axios from "axios";
import { useRouter } from 'next/router';
import Head from "next/head";
import Link from "next/link";
import Image from "next/future/image";


import page2image from "../public/assets/inputpageimage.avif";

import { Box, ChakraProvider, FormControl, FormLabel, Select } from '@chakra-ui/react'
import styles from "../styles/Inputpage.module.css"

export default function GetStarted() {
  const [budget, setBudget] = useState(null)
 


  const router = useRouter()
  
  function sendingResults(){
    let selectedLocation = "London"
    let selectedBudget = budget
    router.push(
      {
        pathname: `/results`,
        query: {selectedLocation, selectedBudget}
      }
      )}

  return (
    <div className={styles.get_started__container}>
      <Head>
        <title>Saunter | Get-Started</title>
      </Head>
      <Image
        className={styles.pagetwoimg}
        src={page2image}
        alt="inputpage image"
        // height={60}
        // width={50}
        style={{ transform: "rotate(-13.23deg)" }}
        // layout="raw"
        // width={{ md: 40 }}
      />
      {/* MORE IMAGES GO HERE */}

      <div className={styles.form}>
        <ChakraProvider>
          <Box
            width= {{ base:"30vw", lg:"100%", md: "80%"}}
            borderColor="black"
            borderStyle="solid"
            borderWidth="4px"
            padding="6"
            borderRadius="2rem"
            boxShadow="10px 10px black"

          >
            <FormControl>
              <FormLabel>Where do you want to travel to?</FormLabel>
              <Select placeholder="Select Location">
                <option>London</option>
              </Select>

              <FormLabel>What is your budget?</FormLabel>
              <Select
                placeholder="Select Budget"
                value={budget}
                fill="white"
                onChange={(e) => setBudget(e.target.value)}
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </Select>

              <button className="btn" onClick={sendingResults}>
                Create Day Plan
              </button>
            </FormControl>
          </Box>
        </ChakraProvider>
      </div>
      <div className={styles.bottomdiv}></div>
    </div>
  );
}

