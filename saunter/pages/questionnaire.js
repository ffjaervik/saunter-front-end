import {useState, useEffect } from "react";

export default function CreateDayPlan() {

const [activities, setActivities] = useState()

 useEffect(() => {
    const getActivities = async function () {
      const response = await fetch(
        `http://localhost:3000/all-budgets`
      );
      const data = await response.json();

      console.log(data);
      

      // console.log({ squatsToday, squatsThisWeekTotal, squatsThisWeekAverage })

      setActivities({ data });
    };

    getActivities();
  }, []);

  return (
    <div>
    <button onSubmit = {}></button>
    </div>
  );
}
