import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  function userLogin() {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) == false) {
      toast.error("Invalid Email ID!");
      return;
    }
    if (/\w+/.test(password) == false) {
      toast.error("Invalid Password!");
      return;
    }
    fetch("/api/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }).then((res) =>
      res.json().then((data) => {
        if (data.message == "Success") {
          toast.success("Login Successful!");
        } else {
          toast.error("Invalid data provided!");
        }
      })
    );
  }

  return (
    <div className="form">
      <h2 className="header">Login</h2>
      <div className="details">
        <input type="email" placeholder="Email" id="login-email" />
        <input type="password" placeholder="Password" id="login-password" />
        <button onClick={userLogin}>Submit</button>
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

export default Login;
