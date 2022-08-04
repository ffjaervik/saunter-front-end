import {useState, useEffect, useCallback} from "react";
import axios from "axios";
import { useRouter } from 'next/router';
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import page2image from "../public/assets/inputpageimage.avif";

import { Box, ChakraProvider, FormControl, FormLabel, Select } from '@chakra-ui/react'
import styles from "../styles/Inputpage.module.css"

export default function GetStarted() {
  const [budget, setBudget] = useState(null)
  const [energy, setEnergy] = useState(null)
  const [dog, setDog] = useState(null)
  const router = useRouter()
  
  function sendingResults(){
    let selectedLocation = "London";
    let selectedBudget = budget;
    let selectedEnergy = energy;
    let selectedDog = dog;
    router.push(
      {
        pathname: `/results`,
        query: {selectedLocation, selectedBudget, selectedEnergy, selectedDog}
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

            // src="/../public/assets/inputpageimage.avif"
            src={page2image}

            alt="inputpage image"
            height = "530%"
            width= "400%"
          />
        </div>
  
        <ChakraProvider>
          <Box
            width="30vw"
            borderColor="#FF8F7780"
            borderStyle="solid"
            borderWidth="4px"
            padding="6"
            borderRadius="2rem"
          >
            <FormControl>
              <FormLabel>Where do you want to travel to?</FormLabel>
              <Select placeholder="Select location">
                <option>London</option>
              </Select>

              <FormLabel>What is your budget?</FormLabel>
              <Select placeholder='Select budget' value={budget} onChange={(e) => setBudget(e.target.value)}>
                <option value="1">Low</option>
                <option value="2">Medium</option>
                <option value="3">High</option>
              </Select>

              <FormLabel>What is your energy level?</FormLabel>
              <Select placeholder='Select energy level' value={energy} onChange={(e) => setEnergy(e.target.value)}>
                <option value="1">Low</option>
                <option value="2">Medium</option>
                <option value="3">High</option>
              </Select>

              <FormLabel>Would you prefer a dog friendly activity?</FormLabel>
              <Select placeholder='Select preference' value={dog} onChange={(e) => setDog(e.target.value)}>
                <option value="true">Yes</option>
                <option value="false">No</option>
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

