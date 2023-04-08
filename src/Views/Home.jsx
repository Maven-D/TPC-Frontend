import React from "react";
import { useLoaderData } from "react-router-dom";

function Home() {
  const user = useLoaderData();
  return <div>Home</div>;
}

export default Home;
