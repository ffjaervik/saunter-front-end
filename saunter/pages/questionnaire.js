import {useState, useEffect, useCallback} from "react";
import axios from "axios"

export default function CreateDayPlan() {

  const [submitting, setSubmitting] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`http://localhost:3001/all-budgets`);
      setData(response.data.data);
      console.log(response.data.data)
      setSubmitting(false); // call is finished, set to false
    };

    // query can change, but don't actually trigger
    // request unless submitting is true

    if (submitting) {
      // is true initially, and again when button is clicked
      getData();
    }
  }, [submitting]);

  const handleChange = (event) => {
    event.preventDefault();
    setQuery(event.target.value);
  };

  const getData = () => setSubmitting(true);

  return (
    <div>
      <h1>Create Day Plan</h1>
      <button type="button" onClick={() => setSubmitting(true)}>
        Click here
      </button>
       <div>{data.map((activity) => {
        console.log(activity.name);
        const name = activity.name;
        const image = activity.image;
        return ( <div>
        <h5 key={name}>{name}</h5>
        <img src={image} /></div>)
       
      })}</div>
    </div>
  );
}
