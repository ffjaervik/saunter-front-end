import {useRouter} from 'next/router';
import { useState, useEffect } from 'react'
import axios from "axios";


// const data = router.query;
// console.log(data);

export default function Results(){
    
    const [data, setData] = useState([]);
    const router = useRouter();
    const {selectedLocation, selectedBudget} = router.query;

    async function patchSaved(input) {
      await fetch(`http://localhost:3001/${router.query.selectedBudget}-budget`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Request-Method": "PATCH",
        },
        body: JSON.stringify(input),
      });
    }

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`http://localhost:3001/${router.query.selectedBudget}-budget`);
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
            const id = activity.id;
            const name = activity.name;
            const image = activity.image;
            const body = {id: id}
            return (
              <div>
                <h5 key={name}>{name}</h5>
                <img src={image} />
                <button onClick={function(){return patchSaved(body)}} key={id} className="btn">Save</button>
              </div>
            );
          })}
        </div>
      </div>
    );
}