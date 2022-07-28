import {useRouter} from 'next/router';
import { useState, useEffect } from 'react'
import axios from "axios";


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

  }, []);

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
      </div>
    );
}