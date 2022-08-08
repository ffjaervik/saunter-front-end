import React from "react";
import { withPageAuthRequired } from '@auth0/nextjs-auth0'

const members = () => {
  return <h1>Your Day Plan!</h1>;
};

export default members;

export const getServerSideProps = withPageAuthRequired ();
