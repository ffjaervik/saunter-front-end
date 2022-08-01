import {useRouter} from 'next/router';
import { useState, useEffect } from 'react'
import axios from "axios";
import { Box, ChakraProvider, FormControl, FormLabel, Select } from '@chakra-ui/react'
import styles from "../styles/Results.module.css"
import Image from 'next/image'




// const data = router.query;
// console.log(data);

export default function Results(){
    
    const [data, setData] = useState([]);
    const [budget, setBudget] = useState(null);
    const router = useRouter();
    const {selectedLocation, selectedBudget} = router.query;

//SAVE BUTTON FUNCTIONALITY
    async function patchSaved(input) {
      await fetch(`https://saunter-db.herokuapp.com/${router.query.selectedBudget}-budget`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Request-Method": "PATCH",
        },
        body: JSON.stringify(input),
      });
    }

// UPDATE FORM DATA FUNCTIONALITY

    useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`https://saunter-db.herokuapp.com/${router.query.selectedBudget}-budget`);
      setData(response.data.data);
      console.log(response.data.data)
    };
    // query can change, but don't actually trigger
    // request unless submitting is true
      getData();

  }, [router.query.selectedBudget]);

  function sendingResults() {
    let selectedLocation = "London";
    let selectedBudget = budget;
    router.push({
      pathname: `/results`,
      query: { selectedLocation, selectedBudget },
    });
  }



    return (
      <div className={styles.main}>
        <h1>Your Recommendations:</h1>
        <div className={styles.results}>
          {data.map((activity) => {
            console.log(activity.name);
            const id = activity.id;
            const name = activity.name;
            const image = activity.image;
            const body = {id: id}
            return (

              <div className={styles.activity} key={name}>
                <h5>{name}</h5>
                <div className={styles.imagebtn}>
                <img src={image} alt="/" />
                <button onClick={function(){return patchSaved(body)}} key={id} className="btn">Save</button>
                </div>
              </div>
            );
          })}
        </div>
        {/* chakra ui imported below */}
        <div className="form">
          <ChakraProvider>
            <Box
              width="15vw"
              padding="6"
              borderRadius="2rem"
              m = "15vh"
            >
              <FormControl>
                <FormLabel>Location</FormLabel>
                <Select placeholder="Select Location">
                  <option>London</option>
                </Select>


                <FormLabel>Budget</FormLabel>

                <Select
                  placeholder="Select Budget"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </Select>

                <div className={styles.daybtn}>
                <button className="btn" onClick={sendingResults}>
                  Create Day Plan
                </button>
                </div>

              </FormControl>
            </Box>
          </ChakraProvider>
        </div>
      </div>
    );
}