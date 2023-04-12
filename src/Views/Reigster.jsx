import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Reigster() {
  const userRegister = () => {
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;
    const confirmPass = document.getElementById(
      "register-confirm-password"
    ).value;
    const name = document.getElementById("register-name").value;
    if (/\w+/.test(name) == false) {
      toast.error("Invalid Name!");
      return;
    }
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) == false) {
      toast.error("Invalid Email ID!");
      return;
    }
    if (/\w+/.test(password) == false) {
      toast.error("Invalid Password!");
      return;
    }
    if (password != confirmPass) {
      toast.error("Password did not match!");
      return;
    }
  };

  return (
    <div className="form">
      <h2 className="header">Register</h2>
      <div className="details">
        <input type="email" placeholder="Name" id="register-name" />
        <input type="email" placeholder="Email" id="register-email" />
        <input type="password" placeholder="Password" id="register-password" />
        <input
          type="password"
          placeholder="Confirm Password"
          id="register-confirm-password"
        />
        <button onClick={userRegister}>Submit</button>
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
      </div>
    </div>
  );
}

export default Reigster;
