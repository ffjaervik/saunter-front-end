import {useState, useEffect, useCallback} from "react";
import axios from "axios";
import { useRouter } from 'next/router';

export default function GetStarted() {
  const router = useRouter()
  function sendingResults(){
    let location = "London"
    let budget = "low-budget"
    router.push(
      {
        pathname: `/results`,
        query: {location, budget}
      }
      )}

  return (
    <div>
      <h1>Create Day Plan</h1>
      <button type="button" onClick={sendingResults}>
        Click here
      </button>
    </div>

  );
}
