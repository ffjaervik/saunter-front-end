import {useRouter} from 'next/router';
import { useState, useEffect } from 'react'
import axios from "axios";
import { Box, ChakraProvider, FormControl, FormLabel, Select } from '@chakra-ui/react'


// const data = router.query;
// console.log(data);

export default function Results(){
    
    const [data, setData] = useState([]);
    const router = useRouter();
    const {location, budget} = router.query

    useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`http://localhost:3001/${router.query.budget}`);
      setData(response.data.data);
      console.log(response.data.data)
    };
    // query can change, but don't actually trigger
    // request unless submitting is true
      getData();

  }, [router.query.budget]);

  function sendingResults(){
    let location = "London"
    let budget = "medium-budget"
    router.push(
        {
            // pathname: `/results`,
            query: {location, budget}
        })   
    console.log(budget)
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
  <Select placeholder='Select Location'>
    <option>London</option>
  </Select>

  <FormLabel>Budget</FormLabel>
  <Select placeholder='Select Budget'>
    <option>High</option>
    <option>Medium</option>
    <option>Low</option>
  </Select>
  
  <button className="btn" onClick={sendingResults}>Create Day Plan</button>
  </FormControl>
  </Box>
  </ChakraProvider>

        </div>
      </div>

    );
}