import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavbarHome from "../components/NavbarHome";
import JobList from "../components/JobList";

function Home() {
  const navigator = useNavigate();

  return (
    <>
      <NavbarHome />
      <div className="search-holder">
        <input type="text" placeholder="Enter Text" />
        <button>Search</button>
      </div>
      <JobList />
    </>
  );
}

export default Home;
