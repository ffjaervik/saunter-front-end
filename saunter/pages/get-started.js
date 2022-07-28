import {useState, useEffect, useCallback} from "react";
import axios from "axios";
import { useRouter } from 'next/router';
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import "../public/assets/inputpageimage.avif";
import { Box, ChakraProvider, FormControl, FormLabel, Select } from '@chakra-ui/react'
import styles from "../styles/Inputpage.module.css"

export default function GetStarted() {
  const router = useRouter()
  function sendingResults(){
    let location = "London"
    let budget = "low-budget"
    router.push(
      {
        pathname: `/results`,
        query: {location, budget}
      }
      )}

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
            height = "400%"
            width= "300%"
          />
        </div>

        <ChakraProvider>
          <Box
            width="50vw"
            borderColor="#FF8F7780"
            borderStyle="solid"
            borderWidth="4px"
            padding="6"
            borderRadius="2rem"
          >
            <FormControl>
              <FormLabel>Where do you want to travel to?</FormLabel>
              <Select placeholder="Select Location">
                <option>London</option>
              </Select>

              <FormLabel>What is your budget?</FormLabel>
              <Select placeholder="Select Budget">
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </Select>

              <button className="btn" onClick={sendingResults}>
                Create Day Plan
              </button>
            </FormControl>
          </Box>
        </ChakraProvider>
      </div>
    </div>
  );
}

