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
    const [energy, setEnergy] = useState(null);
    const [update, setUpdate] = useState(0)
    const router = useRouter();
    const {selectedLocation, selectedBudget, selectedEnergy} = router.query;

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
      const response = await axios.get(`https://saunter-db.herokuapp.com/all-budgets`);
      let allActivities = response.data.data;
      let filteredActivities = [];

      for(let i = 0; i < allActivities.length; i++){
        if(allActivities[i].budget == router.query.selectedBudget && allActivities[i].energy_level == router.query.selectedEnergy){
          filteredActivities.push(allActivities[i])
        }
      }
      setData(filteredActivities)

      // setData(response.data.data);
      // console.log(response.data.data)
      console.log(data)
    };
    // query can change, but don't actually trigger
    // request unless submitting is true
      getData();

  }, [update]);

  // useEffect(() => {
  //   const getEnergy = async () => {
  //     const response = await axios.get(`https://saunter-db.herokuapp.com/${router.query.selectedEnergy}-energy`);
  //     setData(response.data.data);
  //     console.log(response.data.data)
  //   };
  //   // query can change, but don't actually trigger
  //   // request unless submitting is true
  //     getEnergy();

  // }, [router.query.selectedEnergy]);

  function sendingResults() {
    // let selectedLocation = "London";
    // let selectedBudget = budget;
    // let selectedEnergy = energy;
    // router.push({
    //   pathname: `/results`,
    //   query: { selectedLocation, selectedBudget, selectedEnergy },
    // });
    router.query.selectedBudget = budget;
    router.query.selectedEnergy = energy;
    setUpdate(update + 1)
  }



    return (
      <div className={styles.main}>
        <h1>Your Recommendations:</h1>
        <div className={styles.results}>
          {data.map((activity) => {
            {/* console.log(activity.name); */}
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
                <Select placeholder="Select location">
                  <option>London</option>
                </Select>


                <FormLabel>Budget</FormLabel>
                <Select
                  placeholder="Select budget"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </Select>

                <FormLabel>Energy level</FormLabel>
                <Select 
                  placeholder='Select energy level' 
                  value={energy} 
                  onChange={(e) => setEnergy(e.target.value)}
                >
                  <option value="1">Low</option>
                  <option value="2">Medium</option>
                  <option value="3">High</option>
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