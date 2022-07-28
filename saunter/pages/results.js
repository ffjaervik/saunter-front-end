import {useRouter} from 'next/router';
import { useState } from 'react'


// const data = router.query;
// console.log(data);

export default function Results(){
    
    const [submitting, setSubmitting] = useState(false);
    const [data, setData] = useState([]);
    const router = useRouter();
    const {location, budget} = router.query

//   useEffect(() => {
//     const getData = async () => {
//       const response = await axios.get(`http://localhost:3001/all-budgets`);
//       setData(response.data.data);
//       console.log(response.data.data)
//       setSubmitting(false); // call is finished, set to false
//     };

    // query can change, but don't actually trigger
    // request unless submitting is true

//     if (submitting) {
//       // is true initially, and again when button is clicked
//       getData();
//     }
//   }, [submitting]);

    return(
        <div>
            <p>{location}</p>
            <p>Hello</p>
            <p>Hello</p>
            <p>Hello</p>
            <p>Hello</p>
            <p>{location}</p>
            <p>{budget}</p>
        </div>
    )
}