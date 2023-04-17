import React, { useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();
  const [userType, setUserType] = useState("student");

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
        user_type: userType,
      }),
    }).then((res) =>
      res.json().then((data) => {
        if (data.message == "Success") {
          // console.log(`/:${data.user}`);
          // return redirect(`/:${data.user}`);
          toast.success("Login Successful!");
          localStorage.setItem("userType", userType);
          navigate("/");
          // todo redirect to home page
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
        <select value={userType} onChange={(e) => setUserType(e.target.value)}>
          <option value="student">Student</option>
          <option value="company">Company</option>
          <option value="alumni">Alumni</option>
        </select>
        <input type="email" placeholder="Email" id="login-email" />
        <input type="password" placeholder="Password" id="login-password" />
        <button onClick={userLogin}>Submit</button>
      </div>
    </div>
  );
}

export default Login;
