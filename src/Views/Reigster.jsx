import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Reigster() {
  const [userType, setUserType] = useState("student");
  const [batch, setBatch] = useState();
  const navigator = useNavigate();

  useEffect(() => {
    fetch("/api/batchlist/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) =>
      res.json().then((data) => setBatch(JSON.parse(data["batch"])))
    );
  }, []);

  function getBatchOptions() {
    return batch != undefined && batch.map((elem) => <option>{elem}</option>);
  }

  function userRegister() {
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;
    const confirmPass = document.getElementById(
      "register-confirm-password"
    ).value;
    const name = document.getElementById("register-name").value;
    const rollNumberElem = document.getElementById("register-roll-number");
    // const batchElem = document.getElementById("register-batch");
    // const specializationElem = document.getElementById(
    //   "register-specialization"
    // );
    const batchElem = document.getElementById("register-batch");

    const rollNumber = rollNumberElem != null ? rollNumberElem.value : "";
    const batchValue = batchElem != null ? batchElem.value : "";
    // const specialization =
    //   specializationElem != null ? specializationElem.value : "";
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
    fetch("/api/register/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        roll_no: rollNumber,
        batch: batchValue,
        user_type: userType,
      }),
    }).then((res) => {
      if (res.status == 200) {
        toast.success("Register Successful!");
        navigator("/login");
        //goto login page
      } else {
        toast.error("Could not register!");
      }
    });
  }

  return (
    <div className="form">
      <h2 className="header">Register</h2>
      <div className="details">
        <select value={userType} onChange={(e) => setUserType(e.target.value)}>
          <option value="student">Student</option>
          <option value="company">Company</option>
          <option value="alumni">Alumni</option>
        </select>
        {userType == "company" ? (
          <input type="text" placeholder="Something for Company" />
        ) : (
          <>
            <input
              type="text"
              placeholder="Roll Number"
              id="register-roll-number"
            />
            <select id="register-batch">{getBatchOptions()}</select>
          </>
        )}
        <input type="email" placeholder="Name" id="register-name" />
        <input type="email" placeholder="Email" id="register-email" />
        <input type="password" placeholder="Password" id="register-password" />
        <input
          type="password"
          placeholder="Confirm Password"
          id="register-confirm-password"
        />
        <button onClick={userRegister}>Submit</button>
      </div>
    </div>
  );
}

export default Reigster;
