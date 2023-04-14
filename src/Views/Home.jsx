import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavbarHome from "../components/NavbarHome";

function Home() {
  
  const navigator = useNavigate();
  

  
  return (
    <>
      <NavbarHome />
      <div className="search-holder">
        <input type="text" placeholder="Enter Text"/>
        <button>Search</button>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default Home;
