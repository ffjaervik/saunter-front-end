import {useState, useEffect, useCallback} from "react";
import axios from "axios";
import { useRouter } from 'next/router';
import Head from "next/head";
import Link from "next/link";
import Image from "next/future/image";


import page2image from "../public/assets/inputpageimage.avif";
import page2image2 from "../public/assets/inputimage2.avif";
import page2image3 from "../public/assets/inputimage3.avif";


import { Box, ChakraProvider, FormControl, FormLabel, Select } from '@chakra-ui/react'
import styles from "../styles/Inputpage.module.css"

export default function GetStarted() {

  const [budget, setBudget] = useState('Any')
  const [energy, setEnergy] = useState('Any')
  const [dog, setDog] = useState('Any')

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
      )};

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
      <Image
        className={styles.pagetwoimg2}
        src={page2image2}
        alt="Second Input Image"
      />
      <Image
        className={styles.pagetwoimg3}
        src={page2image3}
        style={{ transform: "rotate(64.35deg)" }}
        alt="Third Input Image"
      />

      <div className={styles.form}>
        <ChakraProvider>
          <Box
            width={{ base: "30vw", lg: "100%", md: "80%" }}
            borderColor="black"
            borderStyle="solid"
            borderWidth="4px"
            padding="6"
            borderRadius="2rem"
            boxShadow="10px 10px black"
            backgroundColor="white"
          >
            <FormControl>
              <FormLabel>Where do you want to travel to?</FormLabel>
              <Select placeholder="Select location">
                <option>London</option>
              </Select>

              <FormLabel>What is your budget?</FormLabel>

              <Select placeholder='Select budget' value={budget}  fill="white" onChange={(e) => setBudget(e.target.value)}>
                <option selected value="Any">Any</option>
                <option value="1">Low</option>
                <option value="2">Medium</option>
                <option value="3">High</option>
              </Select>

              <FormLabel>What is your energy level?</FormLabel>
              <Select placeholder='Select energy level' value={energy} onChange={(e) => setEnergy(e.target.value)}>
                <option selected value="Any">Any</option>
                <option value="1">Low</option>
                <option value="2">Medium</option>
                <option value="3">High</option>
              </Select>

              <FormLabel>Would you prefer a dog friendly activity?</FormLabel>
              <Select placeholder='Select preference' value={dog} onChange={(e) => setDog(e.target.value)}>
                <option selected value="Any">Any</option>
                <option value='true'>Yes</option>
                <option value='false'>No</option>
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

