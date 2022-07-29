import {useRouter} from 'next/router';
import { useState, useEffect } from 'react'
import axios from "axios";
import { Box, ChakraProvider, FormControl, FormLabel, Select } from '@chakra-ui/react'


// const data = router.query;
// console.log(data);

export default function Results(){
    
    const [data, setData] = useState([]);
    const [budget, setBudget] = useState(null);
    const router = useRouter();
    const {selectedLocation, selectedBudget} = router.query

    useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`http://localhost:3001/${router.query.selectedBudget}-budget`);
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
      <div>
        <h1>Create Day Plan</h1>
        <div>
          {data.map((activity) => {
            console.log(activity.name);
            const name = activity.name;
            const image = activity.image;
            return (
              <div>
                <h5 key={name}>{name}</h5>
                <img src={image} />
              </div>
            );
          })}
        </div>
        {/* chakra ui imported below */}
        <div className="form">
          <ChakraProvider>
            <Box width="15vw">
              <FormControl>
                <FormLabel>Location</FormLabel>
                <Select placeholder="Select Location">
                  <option>London</option>
                </Select>

                <FormLabel>What is your budget?</FormLabel>
                <Select
                  placeholder="Select Budget"
                  value={budget}
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
      </div>
    );
}