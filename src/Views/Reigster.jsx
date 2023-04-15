import { React, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Reigster() {
  const [userType, setUserType] = useState("Student");

  const userTypeSelection = () => {
    switch (userType) {
      case "Student":
        return (
          <>
            <input
              type="text"
              placeholder="Roll Number"
              id="register-roll-number"
            />
            <input type="text" placeholder="Batch" id="register-batch" />
            <input
              type="text"
              placeholder="Specialization"
              id="register-specialization"
            />
          </>
        );
        break;
      case "Company":
        return <input type="text" placeholder="Something for Company" />;
        break;
      case "Alumni":
        return <input type="text" placeholder="Roll No" />;
        break;
      default:
        break;
    }
  };

  function userRegister() {
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;
    const confirmPass = document.getElementById(
      "register-confirm-password"
    ).value;
    const name = document.getElementById("register-name").value;
    const rollNumberElem = document.getElementById("register-roll-number");
    const batchElem = document.getElementById("register-batch");
    const specializationElem = document.getElementById(
      "register-specialization"
    );

    const rollNumber = rollNumberElem != null ? rollNumberElem.value : "";
    const batch = batchElem != null ? batchElem.value : "";
    const specialization =
      specializationElem != null ? specializationElem.value : "";
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
        batch: batch,
        specialization: specialization,
      }),
    }).then((res) => {
      if (res.status == 200) {
        toast.success("Register Successful!");
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
          <option value="Student">Student</option>
          <option value="Company">Company</option>
          <option value="Alumni">Alumni</option>
        </select>
        {userTypeSelection()}
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
