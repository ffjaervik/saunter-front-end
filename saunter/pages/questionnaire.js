import {useState, useEffect } from "react";


export default function CreateDayPlan() {
  const [activities, setActivities] = useState([]);
  
  async function fetchActivities() {
    const response = await fetch("https://localhost:3001/low-budget");
    const data = await response.json();
    console.log(data.rows)
    return data.rows;
  }
  
  useEffect(() => {
    async function setOnLoad() {
      const result = await fetchActivities();
      setActivities(result);
    }
    setOnLoad();
  }, []);
}